import Dropdown from "components/Dropdown/Dropdown";
import Heading from "components/Heading/Heading";
import React from "react";

const GuildeDropdow = () => {
  return (
    <div className="container py-10 space-y-4">
      <Heading>DROPDOW</Heading>
      <Dropdown>
        <Dropdown.Trigger></Dropdown.Trigger>
        <Dropdown.Panel></Dropdown.Panel>
      </Dropdown>
    </div>
  );
};

export default GuildeDropdow;
