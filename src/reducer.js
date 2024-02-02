export const initialState = {
  subscriptionInterval: "monthly",
  name: "",
  email: "",
  phoneNumber: "",
  activePlan: "",
  checkedAddOns: [],
};

export function reducer(state, action) {
  switch (action.type) {
    case "setName":
      return {
        ...state,
        name: action.payload,
      };
    case "setEmail":
      return {
        ...state,
        email: action.payload,
      };
    case "setPhoneNumber":
      return {
        ...state,
        phoneNumber: action.payload,
      };
    case "selectPlan": {
      return {
        ...state,
        activePlan: action.payload,
      };
    }
    case "changeSubscriptionInterval":
      return {
        ...state,
        subscriptionInterval:
          state.subscriptionInterval === "monthly" ? "yearly" : "monthly",
      };

    case "tickAddOn":
      return {
        ...state,
        checkedAddOns: state.checkedAddOns.includes(action.payload)
          ? state.checkedAddOns.filter((addOn) => addOn !== action.payload)
          : [...state.checkedAddOns, action.payload],
      };

    default:
      throw new Error("no action was found");
  }
}
