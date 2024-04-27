import React from "react";
import "./comment.scss";

function Comment(props) {
  const { dataHref, width } = props;
  return (
    <div className="container-comment">
      <div
        class="fb-comments"
        data-href={dataHref}
        data-width=""
        data-numposts="5"
      ></div>
    </div>
  );
}

export default Comment;
