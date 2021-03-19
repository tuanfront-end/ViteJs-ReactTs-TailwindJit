import Button from "components/Button/Button";
import ButtonPrimary from "components/Button/ButtonPrimary";
import ButtonSecondary from "components/Button/ButtonSecondary";
import ButtonClose from "components/ButtonClose/ButtonClose";
import Section from "components/Section/Section";
import SectionHeading from "components/Section/SectionHeading";
import React from "react";

const GuildeButtons = () => {
  return (
    <Section>
      <div className="container">
        <SectionHeading title="BUTTONS" />
        <div className="grid grid-cols-4 gap-5">
          <div>
            <Button />
          </div>
          <div>
            <ButtonPrimary />
          </div>
          <div>
            <ButtonSecondary />
          </div>
          <div>
            <ButtonClose />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default GuildeButtons;
