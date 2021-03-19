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
    </div>
  );
};

export default StyleGuildePage;
