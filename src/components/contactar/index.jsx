import "./index.css";

export default function Contactar() {
  return (
    <section className="d-section contactar" id="contactar">
        <h1 className="text-center">Solicite seu orçamento</h1>
        <form className="con_form">
            <input type="text" placeholder="Nome ou Entidade" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Telefone" />
            <textarea cols="30" rows="10" placeholder="Mensagem..."></textarea>
            <button className="con_btn_submit" type="submit">Enviar</button>
        </form>
    </section>
  );
}
