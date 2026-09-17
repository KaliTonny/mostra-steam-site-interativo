const nodemailer = require('nodemailer');

function getEmailConfig() {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const destino = process.env.EMAIL_DESTINO || 'turismocandeias360@gmail.com';
  if (!user || !pass) {
    const error = new Error('E-mail do servidor ainda não foi configurado.');
    error.code = 'EMAIL_NOT_CONFIGURED';
    throw error;
  }
  return { user, pass, destino };
}

function transporter() {
  const { user, pass } = getEmailConfig();
  return nodemailer.createTransport({ service: 'gmail', auth: { user, pass } });
}

async function enviarMensagemContato({ nome, email, mensagem }) {
  const { user, destino } = getEmailConfig();
  return transporter().sendMail({
    from: `"Turismo 360°" <${user}>`, to: destino, replyTo: email,
    subject: `Nova mensagem de contato - ${nome}`,
    text: ['Nova mensagem recebida pelo Turismo 360°','',`Nome: ${nome}`,`E-mail: ${email}`,'','Mensagem:',mensagem].join('\n')
  });
}

async function enviarCodigoVerificacao({ nome, email, codigo }) {
  const { user } = getEmailConfig();
  return transporter().sendMail({
    from: `"Turismo 360°" <${user}>`, to: email,
    subject: 'Seu código de verificação - Turismo 360°',
    text: [`Olá, ${nome}!`,'','Use este código para confirmar seu e-mail no Turismo 360°:', '', codigo, '', 'O código expira em 10 minutos.', 'Se você não solicitou este cadastro, ignore esta mensagem.'].join('\n')
  });
}

module.exports = { enviarMensagemContato, enviarCodigoVerificacao };
