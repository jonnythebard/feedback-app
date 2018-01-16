import React from "react";
import SurveyForm from "./SurveyForm"
import SurveyFormReview from "./SurveyFormReview";

class SurveyNew extends React.Component {
    state = { showFormReview: false };

    renderContent() {
        if (this.state.showFormReview) {
            return <SurveyFormReview/>
        }
        return (
            <SurveyForm
                onSurveySubmit={(values) => {
                    console.log(values);
                    return this.setState({ showFormReview: true })
                }}
            />
        );
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

export default SurveyNew