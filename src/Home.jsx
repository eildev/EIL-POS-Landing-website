import Banner from "./components/Banner"
import Beginner from "./components/Beginner"
import Brands from "./components/Brands"
import Contact from "./components/Contact"
import Download from "./components/Download"
import Faq from "./components/Faq"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Package from "./components/Package"

function Home() {

  const isHome = true;
  return (
    <>
      {/* <Nav></Nav> */}
      <Banner></Banner>
      <Features></Features>
      <Beginner></Beginner>
      {/* <Package></Package> */}
      <Brands></Brands>
      <Faq isHome ={isHome}></Faq>
      <Contact></Contact>
      {/* <Download></Download> */}
      {/* <Footer></Footer> */}
    </>
  )
}

export default Home
