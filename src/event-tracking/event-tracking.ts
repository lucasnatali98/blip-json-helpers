import { Flow } from "@/shared/flow";
export type EventTrackingPayload = {
  action: string;
  categoryName: string;
  newCategoryName: string;
  newAction: string;
  newCondition: string;
};
export function eventTracking(flow: Flow, payload: EventTrackingPayload) {
  try {
    const { action, categoryName, newCategoryName, newAction, newCondition } =
      payload;

    console.log("A ação é do tipo: ", action);
    for (const [key, value] of Object.entries(flow)) {
      const isCategoryExist = checkIfCategoryExists(value, categoryName);
      const isNewCategoryExist = checkIfCategoryExists(value, newCategoryName);
      console.log("isCategoryExist: ", isCategoryExist);
      console.log("isNewCategoryExist: ", isNewCategoryExist);
    }
  } catch (error) {
    console.error(error);
    return error;
  }
}

function checkIfCategoryExists(block, categoryName) {
  const enteringActions = block.$enteringActions;
  const leavingActions = block.$leavingActions;

  const categoryExistInEnteringActions = enteringActions.some(
    (category) => category.category === categoryName
  );
  const categoryExistInLeavingActions = leavingActions.some(
    (category) => category.category === categoryName
  );

  return categoryExistInEnteringActions || categoryExistInLeavingActions;
}
