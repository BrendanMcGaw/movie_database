import React from "react";
import "../Styles/cardStyle.css";

export const Card = (props: any) => {
    return <div className="cardContainer">{props.children}</div>;
};
