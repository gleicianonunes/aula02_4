import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
   name: {
      type: String,
      required: true,
   },
   subject: {
      type: String,
      required: true,
   },
   type: {
      type: String,
      required: true,
   },
   value: {
      type: Number,
      required: true,
      validate(value) {
         if (value < 0) throw new Error('Valor negativo para a nota');
      },
   },
   lastModified: {
      type: Date,
      requird: true,
      default: Date.now,
   },
});

// definindo o modelo da coleção
const studentModel = mongoose.model('student', studentSchema, 'student'); // 3° parametro é o nome da coleção

export { studentModel };
