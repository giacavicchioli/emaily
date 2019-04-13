import React from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";
import SurveyCard from "./SurveyCard";

class SurveyList extends React.Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return <SurveyCard key={survey._id} survey={survey} />;
    });
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

function mapStatoToProps({ surveys }) {
  return { surveys };
}

export default connect(
  mapStatoToProps,
  { fetchSurveys }
)(SurveyList);
