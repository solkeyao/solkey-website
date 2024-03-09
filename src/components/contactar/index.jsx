import { useRef, useState } from "react";
import "./index.css";
import { emailSolicitacao } from "../../utils/mailer";
import {toast} from "react-hot-toast";

export default function Contactar() {

 const nomeRef = useRef(null);
 const emailRef = useRef(null);
 const telefoneRef = useRef(null);
 const mensagemRef = useRef(null);

 const [formPending, setFormPending] = useState(false);

 function getInputs(){
    return {
      nome: nomeRef.current.value, 
      email: emailRef.current.value, 
      telefone: telefoneRef.current.value, 
      mensagem: mensagemRef.current.value
    }
 }
  function submitForm(ev){
    ev.preventDefault();
    setFormPending(true);
    const {nome, email, telefone, mensagem} = getInputs();
    emailSolicitacao(nome, email, telefone, mensagem).then((success)=>{
        if(success){
          toast.success('Agradecemos a sua solicitação!');
        }
        else{
          toast.error('Houve um problema');
        }

        nomeRef.current.value ='';
        emailRef.current.value ='';
        telefoneRef.current.value ='';
        mensagemRef.current.value ='';
        setFormPending(false);

      });
    
  }

  return (
    <section className="d-section contactar" id="contactar">
        <h1 className="text-center">Solicite seu orçamento</h1>
        <form className="con_form" onSubmit={submitForm}>
            <input required ref={nomeRef} name="nome" type="text" placeholder="Nome ou Entidade" />
            <input required ref={emailRef} name="email" type="email" placeholder="Email" />
            <input required ref={telefoneRef} name="telefone" type="tel" placeholder="Telefone" />
            <textarea required  ref={mensagemRef} name="mensagem" cols="30" rows="10" placeholder="Mensagem..."></textarea>
            <button className={"con_btn_submit "+ (formPending ? 'con_btn_submit_pending': '')} type="submit">Enviar</button>
        </form>
    </section>
  );
}
