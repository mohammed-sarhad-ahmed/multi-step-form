import {
  YEARLY_ADVANCED_PRICE,
  YEARLY_PRO_PRICE,
  YEARLY_ARCADE_PRICE,
  MONTHLY_ADVANCED_PRICE,
  MONTHLY_PRO_PRICE,
  MONTHLY_ARCADE_PRICE,
  YEARLY_ONLINE_SERVICES,
  MONTHLY_ONLINE_SERVICES,
  YEARLY_LARGER_STORAGE,
  MONTHLY_LARGER_STORAGE,
  YEARLY_CUSTOMIZABLE_PROFILE,
  MONTHLY_CUSTOMIZABLE_PROFILE,
} from "./config";

export const initialState = {
  activeSubType: "monthly",
  name: "",
  email: "",
  phoneNumber: "",
  plan: {
    type: "arcade",
    price: MONTHLY_ARCADE_PRICE,
    bonus: false,
  },
  addOns: {
    onlineServices: {
      checked: false,
      price: MONTHLY_ONLINE_SERVICES,
    },
    largerStorage: {
      checked: false,
      price: MONTHLY_LARGER_STORAGE,
    },
    customizableProfile: {
      checked: false,
      price: MONTHLY_CUSTOMIZABLE_PROFILE,
    },
  },
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

    case "selectPlan":
      return selectPlan(state, action);
    case "changeSubType":
      return {
        ...state,
        activeSubType: state.activeSubType === "monthly" ? "yearly" : "monthly",
        plan: {
          ...state.plan,
          price: calculatePrice(state.activeSubType, state.plan.type),
          bonus: !state.plan.bonus,
        },
        addOns: {
          onlineServices: {
            ...state.addOns.onlineServices,
            price:
              state.activeSubType === "monthly"
                ? YEARLY_ONLINE_SERVICES
                : MONTHLY_ONLINE_SERVICES,
          },
          largerStorage: {
            ...state.addOns.largerStorage,
            price:
              state.activeSubType === "monthly"
                ? YEARLY_LARGER_STORAGE
                : MONTHLY_LARGER_STORAGE,
          },
          customizableProfile: {
            ...state.addOns.customizableProfile,
            price:
              state.activeSubType === "monthly"
                ? YEARLY_CUSTOMIZABLE_PROFILE
                : MONTHLY_CUSTOMIZABLE_PROFILE,
          },
        },
      };

    case "changeOnlineServiceState":
      return {
        ...state,
        addOns: {
          ...state.addOns,
          onlineServices: {
            ...state.addOns.onlineServices,
            checked: !state.addOns.onlineServices.checked,
          },
        },
      };
    case "changeLargerStorageState":
      return {
        ...state,
        addOns: {
          ...state.addOns,
          largerStorage: {
            ...state.addOns.largerStorage,
            checked: !state.addOns.largerStorage.checked,
          },
        },
      };
    case "changeCustomizableProfileState":
      return {
        ...state,
        addOns: {
          ...state.addOns,
          customizableProfile: {
            ...state.addOns.customizableProfile,
            checked: !state.addOns.customizableProfile.checked,
          },
        },
      };

    default:
      throw new Error("no action was found");
  }
}

function selectPlan(state, action) {
  if (state.plan.type === action.payload) return;
  if (state.activeSubType === "monthly") {
    if (action.payload === "arcade")
      return {
        ...state,
        plan: {
          type: "arcade",
          price: MONTHLY_ARCADE_PRICE,
          bonus: false,
        },
      };
    if (action.payload === "advanced")
      return {
        ...state,
        plan: {
          type: "advanced",
          price: MONTHLY_ADVANCED_PRICE,
          bonus: false,
        },
      };
    if (action.payload === "pro")
      return {
        ...state,
        plan: {
          type: "pro",
          price: MONTHLY_PRO_PRICE,
          bonus: false,
        },
      };
  } else if (state.activeSubType === "yearly") {
    if (action.payload === "arcade")
      return {
        ...state,
        plan: {
          type: "arcade",
          price: YEARLY_ARCADE_PRICE,
          bonus: true,
        },
      };
    if (action.payload === "advanced")
      return {
        ...state,
        plan: {
          type: "advanced",
          price: YEARLY_ADVANCED_PRICE,
          bonus: true,
        },
      };
    if (action.payload === "pro")
      return {
        ...state,
        plan: {
          type: "pro",
          price: YEARLY_PRO_PRICE,
          bonus: true,
        },
      };
  }
}

function calculatePrice(SubscriptionType, mode) {
  console.log(SubscriptionType, mode);
  if (SubscriptionType === "monthly") {
    if (mode === "arcade") return YEARLY_ARCADE_PRICE;
    if (mode === "advanced") return YEARLY_ADVANCED_PRICE;
    if (mode === "pro") return YEARLY_PRO_PRICE;
  } else if (SubscriptionType === "yearly") {
    if (mode === "arcade") return MONTHLY_ARCADE_PRICE;
    if (mode === "advanced") return MONTHLY_ADVANCED_PRICE;
    if (mode === "pro") return MONTHLY_PRO_PRICE;
  }
}
