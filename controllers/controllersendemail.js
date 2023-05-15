

import nodemailer from 'nodemailer'

export const enviarEmail = (req, res) => {
  const { name, emailR, message,number } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'zunigahernandario@gmail.com',
      pass: 'hcqtuukjsrzbiogs'
    }
  });

  const mailOptions = {
    from: 'zunigahernandario@gmail.com',
    to: 'zunigahernandario@gmail.com',
    subject: `Nuevo mensaje de ${name}`,
    text: `Mensaje: ${message} 
    . Numero de telefono: ${number}`,
    replyTo: emailR,
    
    
  };


  

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Algo salió mal al enviar el correo electrónico');
    } else {
      console.log('Correo electrónico enviado: ' + info.response);
      res.status(200).send('Correo electrónico enviado correctamente');
    }
   
  });
};

