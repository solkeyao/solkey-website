import Header from "./components/header";
import QuemSomos from "./components/quem-somos";
import Servicos from "./components/servicos";
import Parcerios from "./components/parceiros";
import Projectos from "./components/projectos";
import Contactar from "./components/contactar";
import Footer from "./components/footer";

export default function App(){
    return (
        <>
          <Header />
          <QuemSomos />
          <Servicos />
          <Parcerios />
          <Projectos />
          <Contactar />
          <Footer />
        </>
    );
}