// iniciar a aplicação com dotenv
//node -r dotenv/config  --experimental-modules index.js
import express from 'express';
import mongoose from 'mongoose';
import { studentRouter } from './routes/studentRouter.js';

// conectar ao mongodb atlas pelo mongoose
(async () => {
   try {
      // se fosse local mongoose.connect('mongodb://localhost/grades', {...});
      await mongoose.connect(
         'mongodb+srv://' +
            process.env.USERDB +
            ':' +
            process.env.PWDDB +
            '@cluster0.puuvl.mongodb.net/grades?retryWrites=true&w=majority',
         {
            useNewUrlParser: true,
            useUnifiedTopology: true,
         }
      );
   } catch (error) {
      console.log('Erro ao conectar ao MongoDB Atlas.');
   }
})();

const app = express();

app.use(express.json());
app.use(studentRouter);

app.listen(3000, () => console.log('API Iniciada na porta 3000'));
