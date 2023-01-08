import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ViewButton({ id }) {
  return (
    <Link style={{ textDecoration: "none" }} to={`/notes/${id}`}>
      <button className="viw">Open</button>
    </Link>
  );
}

ViewButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ViewButton;
