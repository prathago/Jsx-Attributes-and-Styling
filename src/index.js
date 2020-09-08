import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <img alt="random_image" src={img + "?grayscale"} /> {/*include alt in img tag.*/}
  </div>,
  document.getElementById("root")
);
