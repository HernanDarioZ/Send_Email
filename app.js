import express from 'express';
import cors from 'cors';
import { enviarEmail } from './controllers/controllersendemail.js';



const app = express();
const router = express.Router();


router.post('/send-email', enviarEmail);

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});