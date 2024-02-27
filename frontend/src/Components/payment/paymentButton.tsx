import React from 'react'
import StripeCheckout, { Token } from 'react-stripe-checkout'

const YourComponent: React.FC = () => {
  const handlePayment = (token: Token) => {
    // Handle the token (payment method) received from Stripe
    const body = {
      token,
    }

    console.log('Received token:', token)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <StripeCheckout token={handlePayment} stripeKey="pk_test_51OoJDOSDwYqHucXKlrnLB8uIZP2VZfuDpWsCgziClU1P3maMBStDCTu8zhigWRdK7e9C30RCogXOw4M01KQZVHUR00eX1sKJLv" />
    </div>
  )
}

export default YourComponent
