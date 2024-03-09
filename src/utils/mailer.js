import emailjs from "@emailjs/browser";

export async function emailSolicitacao(nome, email, telefone, mensagem) {
  emailjs.init({
    publicKey: import.meta.env.VITE_MAILER_PUBLIC_KEY,
  });

  const response = await emailjs.send(
    import.meta.env.VITE_MAILER_SERVICE_ID,
    import.meta.env.VITE_MAILER_TEMPLATE_ID,
    {
      nome,
      email,
      telefone,
      mensagem,
    }
  );

  if(response.status == 200)  return true;
  return false;
}
