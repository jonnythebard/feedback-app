import React from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import _ from "lodash"
import SurveyField from "./SurveyField";
import validateMails from "../../utils/validateEmails"
import formFields from "./formFields";

class SurveyForm extends React.Component {
    renderFields() {
        return _.map(formFields, ({ label, name }) => {
            return (
                <Field  key={name} component={SurveyField} type="text" label={label} name={name} />
            );
        })
    }

    render() {
        return (
            <form
                onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
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

function validate(values) {
    const errors = {};

    errors.recipents = validateMails(values.recipients || "");

    _.each(formFields, ({ name }) => {
        if (!values[name]) {
            errors[name] = `You must provide a value`
        }
    });

    return errors;
}

export default reduxForm({
    validate,
    form: "surveyForm",
    destroyOnUnmount: false
})(SurveyForm);
