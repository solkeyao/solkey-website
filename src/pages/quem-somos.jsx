import QuemSomos from "../components/quem-somos";
import Contactar from "../components/contactar";
import Footer from "../components/footer";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/navbar";


export default function App(){
    return (
        <>
          <Toaster />
          <Navbar startSection={4} />
          <br></br>
          <br></br>

          <QuemSomos />
  
          <Contactar />
          <Footer />
        </>
    );
}