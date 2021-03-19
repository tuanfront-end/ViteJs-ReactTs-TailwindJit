import Avatar from "components/Avatar/Avatar";
import Heading from "components/Heading/Heading";
import React from "react";

const GuildAvatar = () => {
  return (
    <div className="container">
      <Heading>Avatars</Heading>
      <div className="space-x-4 mt-8">
        <Avatar />
        <Avatar sizeClass="w-8 h-8" />
        <Avatar sizeClass="w-10 h-10" />
        <Avatar sizeClass="w-12 h-12" />
      </div>
    </div>
  );
};

export default GuildAvatar;
