import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './index.css'
import AuthLayout from './pages/auth/page'
import SigninForm from './pages/auth/Login/SigninForm'
import SignupForm from './pages/auth/SignupSection/SignupForm'
import { BackgroundAnimation } from './components/common/Background/BgAnimationa'
import HomeLayout from '@/pages/home/Home/HomeLayout'
import Home from '@/pages/home/page'
import ProductPage from '@/pages/product/page'
import ProductView from './components/Product/ProductView'
import CartPage from './components/cart/Cart'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <main className="absolute flex items-center justify-center w-full">
      <Toaster />
      <BackgroundAnimation />
      <Routes>
        {/* Public routes */}
        <Route
          path="/sign-in"
          element={
            <AuthLayout>
              <SigninForm />
            </AuthLayout>
          }
        />
        <Route
          path="/sign-up"
          element={
            <AuthLayout>
              <SignupForm />
            </AuthLayout>
          }
        />
        <Route path="/" element={<Home />}>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product/:ProductId" element={<ProductView />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App

// import React from 'react'
// import { Elements } from '@stripe/react-stripe-js'
// import { loadStripe } from '@stripe/stripe-js'
// import StripePayment from './components/payment/paymentButton'

// const stripePromise = loadStripe('pk_test_51OoJDOSDwYqHucXKlrnLB8uIZP2VZfuDpWsCgziClU1P3maMBStDCTu8zhigWRdK7e9C30RCogXOw4M01KQZVHUR00eX1sKJLv')

// const App = () => {
//   return (
//     <Elements stripe={stripePromise}>
//       <StripePayment />
//     </Elements>
//   )
// }

// export default App
