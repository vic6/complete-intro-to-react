const ce = React.createElement;

const MyTitle = function() {
  return ce("div", null, ce("h1", null, "Sup Dog!"));
};

const MyFirstComponent = function() {
  return ce("div", null, ce(MyTitle), ce(MyTitle), ce(MyTitle));
};
ReactDOM.render(ce(MyFirstComponent), document.getElementById("app"));
