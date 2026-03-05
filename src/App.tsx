import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./layout/mainlayout"
import HomePage from "./pages/home"
import ServicePage from "./pages/services"
import AboutUs from "./pages/about-us"
import CaseStudies from "./pages/case-studies"
import Contact from "./pages/contact"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicePage/>} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/case-studies" element={<CaseStudies/>} />
          <Route path="/contact" element={<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App