/**
 * CO2 Factors & Sheet Weights for Paper Recycling
 * Data source reference: U.S. Environmental Protection Agency (EPA), Waste Reduction Model (WARM).
 * Factors represent kg CO2e avoided per kg of paper recycled.
 */

export const CO2_FACTORS = {
  officePaper: 3.15,
  newspaper: 2.99,
  cardboard: 3.46,
  textbooks: 3.42,
  mixedPaper: 3.91
};

export const PAPER_SHEET_WEIGHTS = {
  A4: 5,     // grams per sheet
  A3: 10,    // grams per sheet
  Letter: 4.5 // grams per sheet
};

export const PAPER_TYPES = [
  { id: 'officePaper', label: 'Office Paper', factor: 3.15 },
  { id: 'newspaper', label: 'Newspaper', factor: 2.99 },
  { id: 'cardboard', label: 'Cardboard', factor: 3.46 },
  { id: 'textbooks', label: 'Textbooks', factor: 3.42 },
  { id: 'mixedPaper', label: 'Mixed Paper', factor: 3.91 }
];

export const SHEET_SIZES = [
  { id: 'A4', label: 'A4 (210 x 297 mm)', weightGrams: 5 },
  { id: 'A3', label: 'A3 (297 x 420 mm)', weightGrams: 10 },
  { id: 'Letter', label: 'Letter (8.5 x 11 in)', weightGrams: 4.5 }
];
