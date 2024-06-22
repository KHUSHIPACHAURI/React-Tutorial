import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const title = <h1 className="head">hello react element</h1>;

//component composition
const HeadingComponent2 = () => (
  <div id="head2">
    <h1>react fc 2</h1>
  </div>
);

//React functional component
const HeadingComponent = () => (
  <div id="heading">
    <HeadingComponent2 />
    <HeadingComponent2></HeadingComponent2>
    {HeadingComponent2()}
    {title}
    <h1>hello react functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
