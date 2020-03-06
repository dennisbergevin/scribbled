import React from "react";
import { connect } from "react-redux";
import { openModal, closeModal } from "../../actions/modal_actions";

import Featured from './featured'

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-container">
        <Featured />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
