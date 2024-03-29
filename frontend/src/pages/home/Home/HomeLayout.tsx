import React from 'react'
import Hero from '@/components/Hero/Hero'
import Header from '@/components/common/header/Header'
import HeroCarousel from '@/components/Hero/HeroCarousel'
import Footer from '@/components/common/footer/Footer'
import FeatureSection from '@/components/Hero/featureSection'
import TopProduct from '@/components/Product/TopProduct'
import AppBanner from '@/components/Hero/AppBanner'

const HomeLayout: React.FC = () => {
  return (
    <div className="flex flex-col gap-10">
      {/* <HeroCarousel/> */}
      <Hero />
      <AppBanner />
      <TopProduct />
      <FeatureSection />
    </div>
  )
}

export default HomeLayout
