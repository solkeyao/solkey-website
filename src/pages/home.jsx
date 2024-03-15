import Header from "../components/header";
import QuemSomos from "../components/quem-somos";
import Servicos from "../components/servicos";
import Parcerios from "../components/parceiros";
import Projectos from "../components/projectos";
import Contactar from "../components/contactar";
import Footer from "../components/footer";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/navbar";

export default function App(){
    return (
        <>
          <Toaster />
          <Header navbar={<Navbar  />} />
          {/*
          <QuemSomos />
    */}
          <Servicos />
          <Parcerios />
          <Projectos />
          <Contactar />
          <Footer />
        </>
    );
}