import React from "react";

import BoxPreview from "./previews/BoxPreview";
import ButtonPreview from "./previews/ButtonPreview";
import BadgePreview from "./previews/BadgePreview";
import IconPreview from "./previews/IconPreview";
import ImagePreview from "./previews/ImagePreview";
import TextPreview from "./previews/TextPreview";
import AvatarPreview, {
  AvatarBadgePreview,
  AvatarGroupPreview
} from "./previews/AvatarPreview";
import CheckboxPreview from "./previews/CheckboxPreview";

const ComponentPreview: React.FC<{ component: IComponent }> = ({
  component
}) => {
  switch (component.type) {
    case "Badge":
      return <BadgePreview component={component} />;
    case "Box":
      return <BoxPreview component={component} />;
    case "Button":
      return <ButtonPreview component={component} />;
    case "Icon":
      return <IconPreview component={component} />;
    case "Image":
      return <ImagePreview component={component} />;
    case "Text":
      return <TextPreview component={component} />;
    case "Avatar":
      return <AvatarPreview component={component} />;
    case "AvatarBadge":
      return <AvatarBadgePreview component={component} />;
    case "AvatarGroup":
      return <AvatarGroupPreview component={component} />;
    case "Checkbox":
      return <CheckboxPreview component={component} />;
    default:
      return null;
  }
};

export default ComponentPreview;
