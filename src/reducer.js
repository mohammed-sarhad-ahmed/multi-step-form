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

class Plan {
  constructor(type, price) {
    this.type = type;
    this.price = price;
    this.isActive = false;
  }
}

class Yearly extends Plan {
  constructor(type, price) {
    super(type, price);
    this.bonus = true;
  }
}

class Monthly extends Plan {
  constructor(type, price) {
    super(type, price);
    this.bonus = false;
  }
}

class AddOn {
  constructor(type, price, description) {
    this.checked = false;
    this.price = price;
    this.type = type;
    this.description = description;
  }
}

class Image {
  constructor(src, alt) {
    this.src = src;
    this.alt = alt;
  }
}

//arcade
const arcadeMonthly = new Monthly("arcade", MONTHLY_ARCADE_PRICE);
const arcadeMYearly = new Yearly("arcade", YEARLY_ARCADE_PRICE);
const arcadeImage = new Image("/images/icon-arcade.svg", "arcade plan");
arcadeMonthly.image = arcadeImage;
arcadeMYearly.image = arcadeImage;

//advanced
const advancedMonthly = new Monthly("advanced", MONTHLY_ADVANCED_PRICE);
const advancedYearly = new Yearly("advanced", YEARLY_ADVANCED_PRICE);
const advancedImage = new Image("/images/icon-advanced.svg", "advanced plan");
advancedMonthly.image = advancedImage;
advancedYearly.image = advancedImage;

//pro
const proMonthly = new Monthly("pro", MONTHLY_PRO_PRICE);
const proYearly = new Yearly("pro", YEARLY_PRO_PRICE);
const proImage = new Image("/images/icon-pro.svg", "pro plan");
proMonthly.image = proImage;
proYearly.image = proImage;

//online services
const onlineServicesMonthly = new AddOn(
  "Online services",
  MONTHLY_ONLINE_SERVICES,
  "Access to multiplayer games"
);
const onlineServicesYearly = new AddOn(
  "Online services",
  YEARLY_ONLINE_SERVICES,
  "Access to multiplayer games"
);
//larger storage
const largerStorageMonthly = new AddOn(
  "Larger storage",
  MONTHLY_LARGER_STORAGE,
  "Extra 1TB of cloud storage save"
);
const largerStorageYearly = new AddOn(
  "Larger storage",
  YEARLY_LARGER_STORAGE,
  "Extra 1TB of cloud storage save"
);
//customizable profile
const customizableProfileMonthly = new AddOn(
  "Customizable profile",
  MONTHLY_CUSTOMIZABLE_PROFILE,
  "Custom theme on your profile"
);
const customizableProfileYearly = new AddOn(
  "Customizable profile",
  YEARLY_CUSTOMIZABLE_PROFILE,
  "Custom theme on your profile"
);

const PlansMonthly = [arcadeMonthly, advancedMonthly, proMonthly];
const PlansYearly = [arcadeMYearly, advancedYearly, proYearly];

const AddonsMonthly = [
  onlineServicesMonthly,
  largerStorageMonthly,
  customizableProfileMonthly,
];
const AddonsYearly = [
  onlineServicesYearly,
  largerStorageYearly,
  customizableProfileYearly,
];

export const initialState = {
  subscriptionInterval: "monthly",
  name: "",
  email: "",
  phoneNumber: "",
  plans: PlansMonthly,
  addOns: AddonsMonthly,
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
        plans: state.plans.map((plan) => {
          return action.payload === plan.type
            ? { ...plan, isActive: true }
            : { ...plan, isActive: false };
        }),
      };
    }
    case "changeSubscriptionInterval": {
      const isMonthly = state.subscriptionInterval === "monthly";
      const newPlans = isMonthly ? PlansYearly : PlansMonthly;
      const newAddons = isMonthly ? AddonsYearly : AddonsMonthly;

      //this code transform the plans and addons array in to state that  reflect the current state of the application
      const transformedPlans = newPlans.map((plan, index) => {
        return state.plans.at(index).isActive
          ? { ...plan, isActive: true }
          : { ...plan, isActive: false };
      });

      const transformedAddOns = newAddons.map((addOn, index) => {
        return state.addOns.at(index).checked
          ? { ...addOn, checked: true }
          : { ...addOn, checked: false };
      });

      return {
        ...state,
        subscriptionInterval: isMonthly ? "yearly" : "monthly",
        plans: transformedPlans,
        addOns: transformedAddOns,
      };
    }
    case "tickAddOn":
      return {
        ...state,
        addOns: state.addOns.map((addOn) =>
          action.payload === addOn.type
            ? { ...addOn, checked: !addOn.checked }
            : addOn
        ),
      };
    default:
      throw new Error("no action was found");
  }
}
