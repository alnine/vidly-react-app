import React from "react";
import PropTypes from "prop-types";

const Like = props => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";

  return (
    <i
      onClick={props.onClick}
      className={classes}
      style={{ cursor: "pointer" }}
      aria-hidden="true"
    />
  );
};

Like.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Like;
