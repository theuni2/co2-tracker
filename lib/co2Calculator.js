import { CO2_FACTORS, PAPER_SHEET_WEIGHTS, PAPER_TYPES } from './co2Factors.js';

/**
 * Calculates paper weight in kg based on calculation method.
 * @param {'sheets' | 'weight'} method 
 * @param {number|string} sheets 
 * @param {string} sheetSize 
 * @param {number|string} directWeightKg 
 * @returns {number} Weight in kg
 */
export function calculatePaperWeight(method, sheets, sheetSize = 'A4', directWeightKg = 0) {
  if (method === 'sheets') {
    const numSheets = Number(sheets);
    if (isNaN(numSheets) || numSheets <= 0) return 0;
    const gramsPerSheet = PAPER_SHEET_WEIGHTS[sheetSize] || PAPER_SHEET_WEIGHTS.A4;
    return (numSheets * gramsPerSheet) / 1000;
  } else if (method === 'weight') {
    const weight = Number(directWeightKg);
    if (isNaN(weight) || weight <= 0) return 0;
    return weight;
  }
  return 0;
}

/**
 * Validates inputs for CO2 impact calculation.
 * @returns {{ isValid: boolean, error: string|null }}
 */
export function validateInputs({ method, sheets, sheetSize, weightKg, paperType }) {
  if (!paperType || !CO2_FACTORS[paperType]) {
    return { isValid: false, error: 'Please select a valid paper type.' };
  }

  if (method === 'sheets') {
    if (sheets === '' || sheets === null || sheets === undefined) {
      return { isValid: false, error: 'Please enter the number of sheets you recycled.' };
    }
    const numSheets = Number(sheets);
    if (isNaN(numSheets)) {
      return { isValid: false, error: 'Number of sheets must be a valid number.' };
    }
    if (numSheets <= 0) {
      return { isValid: false, error: 'Please enter a sheet count greater than zero.' };
    }
    if (numSheets > 1000000) {
      return { isValid: false, error: 'Please enter a realistic sheet count (max 1,000,000).' };
    }
    if (!PAPER_SHEET_WEIGHTS[sheetSize]) {
      return { isValid: false, error: 'Please select a valid sheet size.' };
    }
  } else if (method === 'weight') {
    if (weightKg === '' || weightKg === null || weightKg === undefined) {
      return { isValid: false, error: 'Please enter the paper weight in kg.' };
    }
    const weight = Number(weightKg);
    if (isNaN(weight)) {
      return { isValid: false, error: 'Paper weight must be a valid number.' };
    }
    if (weight <= 0) {
      return { isValid: false, error: 'Please enter a weight greater than zero.' };
    }
    if (weight > 100000) {
      return { isValid: false, error: 'Please enter a realistic paper weight (max 100,000 kg).' };
    }
  } else {
    return { isValid: false, error: 'Invalid calculation method selected.' };
  }

  return { isValid: true, error: null };
}

/**
 * Calculates CO2e avoided for recycled paper.
 * @param {Object} params
 * @param {'sheets' | 'weight'} params.method
 * @param {number|string} [params.sheets]
 * @param {string} [params.sheetSize]
 * @param {number|string} [params.directWeightKg]
 * @param {string} params.paperType
 * @returns {Object} Result calculation metadata or throws error/returns invalid flag
 */
export function calculateCO2Impact({ method, sheets, sheetSize = 'A4', directWeightKg, paperType }) {
  const validation = validateInputs({
    method,
    sheets,
    sheetSize,
    weightKg: directWeightKg,
    paperType
  });

  if (!validation.isValid) {
    return {
      success: false,
      error: validation.error
    };
  }

  const paperWeightKg = calculatePaperWeight(method, sheets, sheetSize, directWeightKg);
  const co2Factor = CO2_FACTORS[paperType];
  const rawCo2Avoided = paperWeightKg * co2Factor;

  // Format numbers nicely for display
  const co2AvoidedKg = Number(rawCo2Avoided.toFixed(3));
  const co2AvoidedFormatted = (Math.round((rawCo2Avoided + Number.EPSILON) * 100) / 100).toFixed(2);
  const paperWeightFormatted = (Math.round((paperWeightKg + Number.EPSILON) * 100) / 100).toFixed(2);

  const typeObject = PAPER_TYPES.find(t => t.id === paperType);

  return {
    success: true,
    method,
    paperType,
    paperTypeLabel: typeObject ? typeObject.label : paperType,
    sheets: method === 'sheets' ? Number(sheets) : null,
    sheetSize: method === 'sheets' ? sheetSize : null,
    paperWeightKg,
    paperWeightFormatted,
    co2Factor,
    co2AvoidedKg,
    co2AvoidedFormatted
  };
}
