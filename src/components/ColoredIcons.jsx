// LIBRARY IMPORT
import { useState, useEffect } from "react";

// ASSETS IMPORT
import office365 from "../assets/office365.png";
import google from "../assets/google.png";

const ColoredIcons = (props) => {
  const [iconUrl, setIconUrl] = useState("");

  useEffect(() => {
      if (props.icons == "office") {
        setIconUrl(office365);
      } else if (props.icons == "google"){
        setIconUrl(google);
      }
  }, [props.icons])

  return <img src={iconUrl}  alt="Colored Icons" className="colored-icons"/>;
};

export default ColoredIcons;
