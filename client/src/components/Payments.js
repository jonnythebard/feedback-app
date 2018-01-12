import React from "react";
import CheckOut from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Payments extends React.Component {
    render() {
        return (
            <CheckOut
                name="Emaily"
                description="$5 for 5 credits"
                amount={500}
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn">Add Credits</button>
            </CheckOut>
        );
    }
}

export default connect(null, actions)(Payments);