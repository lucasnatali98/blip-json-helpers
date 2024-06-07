export function eventTracking(payload) {
  try {
    const { categoryName, newCategoryName, newAction, newCondition } = payload;
  } catch (error) {
    return error;
  }
}
