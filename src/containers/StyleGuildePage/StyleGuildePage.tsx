import Modal from "components/Modal/Modal";
import React from "react";
import GuildAvatar from "./GuildAvatar";
import GuildeButtons from "./GuildeButtons";
import GuildeDropdow from "./GuildeDropdow";

const StyleGuildePage = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800">
      <GuildeButtons />
      <GuildAvatar />
      <GuildeDropdow />
      <div className="container">
        <Modal>
          <Modal.Trigger></Modal.Trigger>
          <Modal.Panel></Modal.Panel>
        </Modal>
        <br />
        <input type="number" name="sfe" id="" />
      </div>
    </div>
  );
};

export default StyleGuildePage;
