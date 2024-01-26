import Container from "../Container/Container";
import Selection from "../Selection/Selection";
import SubscriptionType from "../SubscriptionType/SubscriptionType";

function SelectionOptions({ type }) {
  return (
    <>
      <Container gap="selectionGap">
        <Selection alt="arcade selection" src="/images/icon-arcade.svg">
          {type === "monthly" ? (
            <SubscriptionType title="Arcade" subTitle="$9/mo" />
          ) : (
            <SubscriptionType
              title="Arcade"
              subTitle="$90/yr"
              yearlyBonus="2 months free"
            />
          )}
        </Selection>
        <Selection alt="advanced selection" src="/images/icon-advanced.svg">
          {type === "monthly" ? (
            <SubscriptionType title="Advanced" subTitle="$12/mo" />
          ) : (
            <SubscriptionType
              title="Advanced"
              subTitle="$120/yr"
              yearlyBonus="2 months free"
            />
          )}
        </Selection>
        <Selection alt="pro selection" src="/images/icon-pro.svg">
          {type === "monthly" ? (
            <SubscriptionType title="Pro" subTitle="$15/mo" />
          ) : (
            <SubscriptionType
              title="Pro"
              subTitle="$150/yr"
              yearlyBonus="2 months free"
            />
          )}
        </Selection>
      </Container>
    </>
  );
}

export default SelectionOptions;
