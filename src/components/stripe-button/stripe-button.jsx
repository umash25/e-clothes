import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IsqQtSGD9gTRY2ZWIp0N8iwtdRCrh0LIVOOZAcUMdvJm9vSrJ3ixEEazDCFIxURXir5BFrJUI71zW8bOG6aLuP300bS4EsEX4';

    const onToken = token => {
        console.log(token);
        alert("Payment Success!")
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='E-Clothes'
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;