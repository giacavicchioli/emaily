import React from "react";
import StripeCheckout from "react-stripe-checkout";

class Payments extends React.Component {
  onToken = token => {
    console.log(token);
  };

  render() {
    return (
      <StripeCheckout
        token={this.onToken}
        amount={500}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      />
    );
  }
}

export default Payments;
