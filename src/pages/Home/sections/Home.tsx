import "./Home.module.css"
import Header from "@/reusable_sections/Header"
import HeroSection from "./sections/HeroSection"
import WhyChooseUs from "./sections/WhyChooseUs"
import ChannelLogos from "./sections/ChannelLogos"
import CustomerReviews from "./sections/CustomerReviews"
import EntertainmentStats from "./sections/EntertainmentStats"
import WatchOnAnyDevice from "./sections/WatchOnAnyDevice"
import LiveFootballSports from "./sections/LiveFootballSports"
import PricingPlans from "./sections/PricingPlans"
import HowToGetStarted from "./sections/HowToGetStarted"
import EverythingYouGet from "./sections/EverythingYouGet"
import MoviesSeries from "./sections/MoviesSeries"
import FrequentlyAskedQuestions from "./sections/FrequentlyAskedQuestions"
import Footer from "@/reusable_sections/Footer"

export default function HomePage() {

  return (
    <div>
      <Header />
      <HeroSection />
      <WhyChooseUs />
      <ChannelLogos />
      <CustomerReviews />
      <EntertainmentStats />
      <WatchOnAnyDevice />
      <LiveFootballSports />
      <PricingPlans />
      <HowToGetStarted />
      <EverythingYouGet />
      <MoviesSeries />
      <FrequentlyAskedQuestions />
      <Footer />
    </div>
  )
}
