import React from "react";
import "./likebutton.scss";

function LikeButton(props) {
  const { dataHref } = props;
  return (
    <div className="container-likebutton">
      <div
        class="fb-like"
        data-href={dataHref}
        data-width=""
        data-layout=""
        data-action=""
        data-size=""
        data-share="true"
      ></div>
    </div>
  );
}

export default LikeButton;
