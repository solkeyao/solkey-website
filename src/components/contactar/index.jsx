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
          toast.success('Agradecemos a sua solicitação! Em breve entraremos em contato.');
        }
        else{
          toast.error('Houve um problema ao enviar a mensagem');
        }

        nomeRef.current.value ='';
        emailRef.current.value ='';
        telefoneRef.current.value ='';
        mensagemRef.current.value ='';
        setFormPending(false);

      }).catch((error)=>{
        toast.error('Houve um problema ao enviar a mensagem');
        setFormPending(false);
      });
    
  }

  return (
    <section className="d-section contactar" id="contactar">
        <div className="container">
            <div className="contact-content">
                <div className="contact-info">
                    <h2 className="contact-title">Pronto para transformar sua ideia em realidade?</h2>
                    <p className="contact-description">
                        Entre em contato conosco e vamos discutir como podemos ajudar sua empresa 
                        a alcançar o próximo nível no mundo digital.
                    </p>
                    
                    <div className="contact-details">
                        <div className="contact-item">
                            <div className="contact-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                    <polyline points="22,6 12,13 2,6"/>
                                </svg>
                            </div>
                            <div>
                                <h4>Email</h4>
                                <p>solkey.ao@gmail.com</p>
                            </div>
                        </div>
                        
                        <div className="contact-item">
                            <div className="contact-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                </svg>
                            </div>
                            <div>
                                <h4>Telefone</h4>
                                <p>+244 939 416 647</p>
                            </div>
                        </div>
                        
                        <div className="contact-item">
                            <div className="contact-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                    <circle cx="12" cy="10" r="3"/>
                                </svg>
                            </div>
                            <div>
                                <h4>Endereço</h4>
                                <p>Urbanização Nova Vida, Rua 181 Nº6024, Luanda, Angola</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="contact-form-container">
                    <form className="contact-form" onSubmit={submitForm}>
                        <h3>Solicite seu orçamento</h3>
                        <p>Preencha o formulário abaixo e entraremos em contato em breve.</p>
                        
                        <div className="form-group">
                            <input 
                                required 
                                ref={nomeRef} 
                                name="nome" 
                                type="text" 
                                placeholder="Nome ou Entidade" 
                            />
                        </div>
                        
                        <div className="form-group">
                            <input 
                                required 
                                ref={emailRef} 
                                name="email" 
                                type="email" 
                                placeholder="Email" 
                            />
                        </div>
                        
                        <div className="form-group">
                            <input 
                                required 
                                ref={telefoneRef} 
                                name="telefone" 
                                type="tel" 
                                placeholder="Telefone" 
                            />
                        </div>
                        
                        <div className="form-group">
                            <textarea 
                                required 
                                ref={mensagemRef} 
                                name="mensagem" 
                                rows="5" 
                                placeholder="Conte-nos sobre seu projeto..."
                            ></textarea>
                        </div>
                        
                        <button 
                            className={`submit-button ${formPending ? 'pending' : ''}`} 
                            type="submit"
                            disabled={formPending}
                        >
                            {formPending ? (
                                <>
                                    <svg className="spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 12a9 9 0 11-6.219-8.56"/>
                                    </svg>
                                    Enviando...
                                </>
                            ) : (
                                <>
                                    Enviar mensagem
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7"/>
                                    </svg>
                                </>
                            )}
                        </button>
        </form>
                </div>
            </div>
        </div>
    </section>
  );
}
