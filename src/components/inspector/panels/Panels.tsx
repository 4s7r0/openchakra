import React from "react";
import ButtonPanel from "./ButtonPanel";
import BadgePanel from "./BadgePanel";
import IconPanel from "./IconPanel";
import ImagePanel from "./ImagePanel";
import BoxPanel from "./BoxPanel";
import ChildrenControl from "../controls/ChildrenControl";
import AvatarPanel from "./AvatarPanel";
import AvatarGroupPanel from "./AvatarGroupPanel";
import AvatarBadgePanel from "./AvatarBadgePanel";
import CheckboxPanel from "./CheckboxPanel";
import IconButtonPanel from "./IconButtonPanel";
import ProgressPanel from "./ProgressPanel";
import LinkPanel from "./LinkPanel";
import SpinnerPanel from "./SpinnerPanel";
import CloseButtonPanel from "./CloseButtonPanel";

const Panels: React.FC<{ component: IComponent }> = ({ component }) => {
  const { type } = component;

  return (
    <>
      {type === "Button" && <ButtonPanel />}
      {type === "Checkbox" && <CheckboxPanel />}
      {type === "Box" && <BoxPanel />}
      {type === "Badge" && <BadgePanel />}
      {type === "Image" && <ImagePanel />}
      {type === "Icon" && <IconPanel />}
      {type === "IconButton" && <IconButtonPanel />}
      {type === "Progress" && <ProgressPanel />}
      {type === "Text" && <ChildrenControl />}
      {type === "Link" && <LinkPanel />}
      {type === "Avatar" && <AvatarPanel />}
      {type === "AvatarGroup" && <AvatarGroupPanel />}
      {type === "AvatarBadge" && <AvatarBadgePanel />}
      {type === "Spinner" && <SpinnerPanel />}
      {type === "CloseButton" && <CloseButtonPanel />}
    </>
  );
};

export default Panels;
