/**
 * CO2 Factors & Sheet Weights for Read2Rise Initiative
 * - Recycling Factors: kg CO2e avoided per kg paper recycled (EPA WARM).
 * - Reuse/Redistribution Factors: kg CO2e avoided per kg paper reused (100% Virgin Production Avoidance).
 */

export const RECYCLING_CO2_FACTORS = {
  officePaper: 3.15,
  newspaper: 2.99,
  cardboard: 3.46,
  textbooks: 3.42,
  mixedPaper: 3.91
};

export const REUSE_CO2_FACTORS = {
  officePaper: 4.28,
  newspaper: 3.85,
  cardboard: 4.10,
  textbooks: 4.50,
  mixedPaper: 4.05
};

// Keep backwards-compatible default export
export const CO2_FACTORS = RECYCLING_CO2_FACTORS;

export const PAPER_SHEET_WEIGHTS = {
  A4: 5,     // grams per sheet
  A3: 10,    // grams per sheet
  Letter: 4.5 // grams per sheet
};

export const PAPER_TYPES = [
  { id: 'officePaper', label: 'Office Paper', recycleFactor: 3.15, reuseFactor: 4.28 },
  { id: 'newspaper', label: 'Newspaper', recycleFactor: 2.99, reuseFactor: 3.85 },
  { id: 'cardboard', label: 'Cardboard', recycleFactor: 3.46, reuseFactor: 4.10 },
  { id: 'textbooks', label: 'Textbooks', recycleFactor: 3.42, reuseFactor: 4.50 },
  { id: 'mixedPaper', label: 'Mixed Paper & Storybooks', recycleFactor: 3.91, reuseFactor: 4.05 }
];

export const SHEET_SIZES = [
  { id: 'A4', label: 'A4 (210 x 297 mm)', weightGrams: 5 },
  { id: 'A3', label: 'A3 (297 x 420 mm)', weightGrams: 10 },
  { id: 'Letter', label: 'Letter (8.5 x 11 in)', weightGrams: 4.5 }
];
