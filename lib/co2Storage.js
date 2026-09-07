const STORAGE_KEY = 'co2_recycling_activities';

/**
 * Retrieve saved recycling activities from localStorage.
 * @returns {Array} Array of activity objects
 */
export function getActivities() {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Failed to parse co2_recycling_activities from localStorage:', error);
    return [];
  }
}

/**
 * Save a new activity object to localStorage.
 * @param {Object} calculationResult 
 * @returns {Array} Updated array of activities
 */
export function saveActivity(calculationResult) {
  if (typeof window === 'undefined') return [];
  try {
    const currentActivities = getActivities();
    
    // Format date string (e.g., "Sep 2")
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

    const newActivity = {
      id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
      timestamp: now.toISOString(),
      date: formattedDate,
      method: calculationResult.method,
      paperType: calculationResult.paperType,
      paperTypeLabel: calculationResult.paperTypeLabel,
      sheets: calculationResult.sheets || null,
      sheetSize: calculationResult.sheetSize || null,
      weightKg: calculationResult.paperWeightKg,
      co2AvoidedKg: calculationResult.co2AvoidedKg
    };

    const updated = [newActivity, ...currentActivities];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (error) {
    console.error('Failed to save activity to localStorage:', error);
    return getActivities();
  }
}

/**
 * Delete an activity by ID from localStorage.
 * @param {string} id 
 * @returns {Array} Updated array of activities
 */
export function deleteActivity(id) {
  if (typeof window === 'undefined') return [];
  try {
    const currentActivities = getActivities();
    const updated = currentActivities.filter(item => item.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (error) {
    console.error('Failed to delete activity from localStorage:', error);
    return getActivities();
  }
}

/**
 * Calculate total cumulative metrics from activities array.
 * @param {Array} activities 
 * @returns {{ totalPaperKg: string, totalCo2AvoidedKg: string, totalActivities: number }}
 */
export function getCumulativeImpact(activities = []) {
  if (!activities || activities.length === 0) {
    return {
      totalPaperKg: '0.00',
      totalCo2AvoidedKg: '0.00',
      totalActivities: 0
    };
  }

  const rawPaper = activities.reduce((acc, curr) => acc + (Number(curr.weightKg) || 0), 0);
  const rawCo2 = activities.reduce((acc, curr) => acc + (Number(curr.co2AvoidedKg) || 0), 0);

  return {
    totalPaperKg: rawPaper.toFixed(2),
    totalCo2AvoidedKg: rawCo2.toFixed(2),
    totalActivities: activities.length
  };
}
