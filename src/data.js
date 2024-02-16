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
  }
}

class Input {
  constructor(type, label, placeholder, event, errorMsg, pattern) {
    this.type = type;
    this.label = label;
    this.placeholder = placeholder;
    this.event = event;
    this.errorMsg = errorMsg;
    this.pattern = pattern;
    this.requiredError = "the field is required";
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

//input

const name = new Input("text", "Name", "e.g. Stephen King", "setName");
const emailAddress = new Input(
  "email",
  "Email Address",
  "e.g. StephenKing@lorem.com",
  "setEmail",
  "use an valid email address",
  `^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$`
);
const phoneNumber = new Input(
  "tel",
  "Phone Number ",
  "e.g. +1 234 567 890",
  "setPhoneNumber",
  "use a valid phone number",
  `^(\\+\\d{1,2}\\s?)?(\\(\\d{3}\\)|\\d{3})[\\-\\s]?\\d{3}[\\-\\s]?\\d{3,4}$`
);

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

const inputs = { name, emailAddress, phoneNumber };

const plansMonthly = [arcadeMonthly, advancedMonthly, proMonthly];
const plansYearly = [arcadeMYearly, advancedYearly, proYearly];

const addonsMonthly = [
  onlineServicesMonthly,
  largerStorageMonthly,
  customizableProfileMonthly,
];
const addonsYearly = [
  onlineServicesYearly,
  largerStorageYearly,
  customizableProfileYearly,
];

export { addonsMonthly, addonsYearly, plansMonthly, plansYearly, inputs };
