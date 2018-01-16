import React from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import _ from "lodash"
import SurveyField from "./SurveyField";

const FIELDS = [
    { label: "Survey Title", name: "title" },
    { label: "Subject", name: "subject" },
    { label: "Email Body", name: "body" },
    { label: "Recipient list", name: "list" },
];

class SurveyForm extends React.Component {
    renderFields() {
        return _.map(FIELDS, ({ label, name }) => {
            return (
                <Field  key={name} component={SurveyField} type="text" label={label} name={name} />
            );
        })
    }

    render() {
        return (
            <form
                onSubmit={this.props.handleSubmit(values => console.log(values))}
            >
                {this.renderFields()}
                <Link to="/surveys" className="red btn-flat white-text">
                    cancel
                </Link>
                <button type="submit" className="teal btn-flat right white-text">
                    next
                    <i className="material-icons right">done</i>
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: "surveyForm"
})(SurveyForm);
