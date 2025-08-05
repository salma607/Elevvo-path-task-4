
import { Routes,Route } from "react-router-dom";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Home from "./Pages/Home/Home";
import Service from "./Pages/Service/Service"
import ContactMe from "./Pages/ContactMe/ContactMe";

 export default function App() {
  return (
    <Routes>
      <Route
      path="/F"
      element={<Footer/>} />,
      <Route
      path="/H"
      element={<Header/>}/>
      <Route
      path="/"
      element={<Home/>}/>
      <Route
      path="/S"
      element={<Service/>}/>
      <Route
      path="/contact"
      element={<ContactMe/>}/>

    </Routes>
  )
}