import React from "react";
import { showFormattedDate } from "../utils/index";
import PropTypes from "prop-types";

function NoteItemBody({ title, body, createdAt }) {
  return (
    <>
      <h3>{title}</h3>
      <p className="date">{showFormattedDate(createdAt)}</p>
      <p className="body-text">{body}</p>
    </>
  );
}

NoteItemBody.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default NoteItemBody;
