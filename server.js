import express from 'express';
import cors from 'cors';
import CalculatorService from './src/calculator/calculator.service.ts'; // ใช้ไฟล์ JavaScript ที่คอมไพล์แล้ว

const app = express();
const calculatorService = new CalculatorService();

app.use(cors());
app.use(express.json());

app.post('/calculate', (req, res) => {
  const { items, hasMemberCard } = req.body;
  const totalPrice = calculatorService.calculatePrice(items, hasMemberCard);
  res.json({ totalPrice });
});

app.listen(8000, () => {
  console.log('Server is running on http://localhost:8000');
});
