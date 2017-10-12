import React from "react";
import { render } from "react-dom";

const MyTitle = function title(props) {
  // return ce(
  //   "div",
  //   null,
  //   ce("h1", { style: { color: props.color } }, props.title),
  // );
  return (
    <div>
      <h1 style={{ color: props.color }}>{props.title}</h1>
    </div>
  );
};

const MyFirstComponent = function firstComponent() {
  return (
    <div id="my-first-component">
      <MyTitle title="Pootie Tang" color="Orange" />
      <MyTitle title="Dae Dae the Clown" color="Purple" />
      <MyTitle title="Ice Cream VENGENCE" color="Blue" />
      <MyTitle title="Joe Dirt" color="Brown" />
      <MyTitle title="Two Brothers" color="Pink" />
      <MyTitle title="Jan Quadrant Vincent 16" color="Grey" />
    </div>
  );
};
render(<MyFirstComponent />, document.getElementById("app"));
