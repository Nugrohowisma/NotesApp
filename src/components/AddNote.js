import React from "react";
import PropTypes from "prop-types";

class AddNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <section className="new">
        <form onSubmit={this.onSubmitEventHandler}>
          <input
            type="text"
            placeholder="Title"
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
          <textarea
            type="text"
            placeholder="write notes"
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
          ></textarea>
          <div className="con">
            <button type="submit" className="viw">
              Save
            </button>
          </div>
        </form>
      </section>
    );
  }
}

AddNote.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default AddNote;
