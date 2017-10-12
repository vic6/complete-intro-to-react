import React from "react";
import { render } from "react-dom";

const ce = React.createElement;

const MyTitle = function title(props) {
  return ce(
    "div",
    null,
    ce("h1", { style: { color: props.color } }, props.title),
  );
};

const MyFirstComponent = function firstComponent() {
  return ce(
    "div",
    { id: "my-first-component" },
    ce(MyTitle, { title: "Pootie Tang", color: "Yellow" }),
    ce(MyTitle, { title: "Joe Dirt", color: "Red" }),
    ce(MyTitle, { title: "Dae Dae the Clown", color: "Purlple" }),
    ce(MyTitle, { title: "Ice Cream Vengenge", color: "Pink" }),
  );
};
render(ce(MyFirstComponent), document.getElementById("app"));
