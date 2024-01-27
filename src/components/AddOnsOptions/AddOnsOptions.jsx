import Container from "../Container/Container";
import AddOnsTypes from "../addOnsTypes/addOnsTypes";

function AddOnsOptions({ type }) {
  return (
    <Container gap="addOnsGap">
      <AddOnsTypes
        title="Online Services"
        subTitle="Access multiplayer games"
        price={type === "monthly" ? "+$1/mo" : "+$10/yr"}
      />
      <AddOnsTypes
        title="Larger Storage"
        subTitle="Extra 1TB of cloud storage"
        price={type === "monthly" ? "+$2/mo" : "+$20/yr"}
      />
      <AddOnsTypes
        title="Customizable Profile"
        subTitle="Custom theme on your profile"
        price={type === "monthly" ? "+$2/mo" : "+$20/yr"}
      />
    </Container>
  );
}

export default AddOnsOptions;
