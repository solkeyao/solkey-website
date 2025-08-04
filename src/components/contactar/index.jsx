import { useRef, useState } from "react";
import "./index.css";
import { emailSolicitacao } from "../../utils/mailer";
import {toast} from "react-hot-toast";
import { motion } from 'framer-motion';

export default function Contactar() {

 const nomeRef = useRef(null);
 const emailRef = useRef(null);
 const telefoneRef = useRef(null);
 const mensagemRef = useRef(null);

 const [formPending, setFormPending] = useState(false);

 // Variantes de animação
 const containerVariants = {
     hidden: { opacity: 0 },
     visible: {
         opacity: 1,
         transition: {
             staggerChildren: 0.3,
             delayChildren: 0.1
         }
     }
 };

 const headerVariants = {
     hidden: { opacity: 0, y: 30 },
     visible: {
         opacity: 1,
         y: 0,
         transition: {
             duration: 0.6,
             ease: "easeOut"
         }
     }
 };

 const contactItemVariants = {
     hidden: { opacity: 0, x: -30 },
     visible: {
         opacity: 1,
         x: 0,
         transition: {
             duration: 0.5,
             ease: "easeOut"
         }
     }
 };

 const formVariants = {
     hidden: { opacity: 0, x: 50 },
     visible: {
         opacity: 1,
         x: 0,
         transition: {
             duration: 0.6,
             ease: "easeOut"
         }
     }
 };

 const inputVariants = {
     hidden: { opacity: 0, y: 20 },
     visible: {
         opacity: 1,
         y: 0,
         transition: {
             duration: 0.4,
             ease: "easeOut"
         }
     }
 };

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
    <motion.section 
        className="d-section contactar" 
        id="contactar"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
    >
        <div className="container">
            <motion.div 
                className="contact-content"
                variants={containerVariants}
            >
                <motion.div 
                    className="contact-info"
                    variants={headerVariants}
                >
                    <motion.h2 
                        className="contact-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Pronto para transformar sua ideia em realidade?
                    </motion.h2>
                    <motion.p 
                        className="contact-description"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Entre em contato conosco e vamos discutir como podemos ajudar sua empresa 
                        a alcançar o próximo nível no mundo digital.
                    </motion.p>
                    
                    <motion.div 
                        className="contact-details"
                        variants={containerVariants}
                    >
                        <motion.div 
                            className="contact-item"
                            variants={contactItemVariants}
                            whileHover={{ 
                                x: 10,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <motion.div 
                                className="contact-icon"
                                whileHover={{ 
                                    scale: 1.1,
                                    rotate: 5,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                    <polyline points="22,6 12,13 2,6"/>
                                </svg>
                            </motion.div>
                            <div>
                                <h4>Email</h4>
                                <p>solkey.ao@gmail.com</p>
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            className="contact-item"
                            variants={contactItemVariants}
                            whileHover={{ 
                                x: 10,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <motion.div 
                                className="contact-icon"
                                whileHover={{ 
                                    scale: 1.1,
                                    rotate: 5,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                </svg>
                            </motion.div>
                            <div>
                                <h4>Telefone</h4>
                                <p>+244 939 416 647</p>
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            className="contact-item"
                            variants={contactItemVariants}
                            whileHover={{ 
                                x: 10,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <motion.div 
                                className="contact-icon"
                                whileHover={{ 
                                    scale: 1.1,
                                    rotate: 5,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                    <circle cx="12" cy="10" r="3"/>
                                </svg>
                            </motion.div>
                            <div>
                                <h4>Endereço</h4>
                                <p>Urbanização Nova Vida, Rua 181 Nº6024, Luanda, Angola</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
                
                <motion.div 
                    className="contact-form-container"
                    variants={formVariants}
                >
                    <motion.form 
                        className="contact-form" 
                        onSubmit={submitForm}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            Solicite seu orçamento
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            Preencha o formulário abaixo e entraremos em contato em breve.
                        </motion.p>
                        
                        <motion.div 
                            className="form-group"
                            variants={inputVariants}
                        >
                            <motion.input 
                                required 
                                ref={nomeRef} 
                                name="nome" 
                                type="text" 
                                placeholder="Nome ou Entidade"
                                whileFocus={{ 
                                    scale: 1.02,
                                    transition: { duration: 0.2 }
                                }}
                            />
                        </motion.div>
                        
                        <motion.div 
                            className="form-group"
                            variants={inputVariants}
                        >
                            <motion.input 
                                required 
                                ref={emailRef} 
                                name="email" 
                                type="email" 
                                placeholder="Email"
                                whileFocus={{ 
                                    scale: 1.02,
                                    transition: { duration: 0.2 }
                                }}
                            />
                        </motion.div>
                        
                        <motion.div 
                            className="form-group"
                            variants={inputVariants}
                        >
                            <motion.input 
                                required 
                                ref={telefoneRef} 
                                name="telefone" 
                                type="tel" 
                                placeholder="Telefone"
                                whileFocus={{ 
                                    scale: 1.02,
                                    transition: { duration: 0.2 }
                                }}
                            />
                        </motion.div>
                        
                        <motion.div 
                            className="form-group"
                            variants={inputVariants}
                        >
                            <motion.textarea 
                                required 
                                ref={mensagemRef} 
                                name="mensagem" 
                                rows="5" 
                                placeholder="Conte-nos sobre seu projeto..."
                                whileFocus={{ 
                                    scale: 1.02,
                                    transition: { duration: 0.2 }
                                }}
                            ></motion.textarea>
                        </motion.div>
                        
                        <motion.button 
                            className={`submit-button ${formPending ? 'pending' : ''}`} 
                            type="submit"
                            disabled={formPending}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            viewport={{ once: true }}
                            whileHover={{ 
                                scale: 1.05,
                                transition: { duration: 0.2 }
                            }}
                            whileTap={{ 
                                scale: 0.95,
                                transition: { duration: 0.1 }
                            }}
                        >
                            {formPending ? (
                                <>
                                    <motion.svg 
                                        className="spinner" 
                                        width="20" 
                                        height="20" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="2"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                    >
                                        <path d="M21 12a9 9 0 11-6.219-8.56"/>
                                    </motion.svg>
                                    Enviando...
                                </>
                            ) : (
                                <>
                                    Enviar mensagem
                                    <motion.svg 
                                        width="20" 
                                        height="20" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="2"
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7"/>
                                    </motion.svg>
                                </>
                            )}
                        </motion.button>
                    </motion.form>
                </motion.div>
            </motion.div>
        </div>
    </motion.section>
  );
}
