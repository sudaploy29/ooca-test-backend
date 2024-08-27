import { Controller, Post, Body } from '@nestjs/common';
import { CalculatorService } from './calculator.service';

@Controller('calculate')
export class CalculatorController {
  constructor(private readonly calculatorService: CalculatorService) {}

  @Post()
  calculate(
    @Body()
    body: {
      items: { id: number; total: number }[];
      hasMemberCard: boolean;
    },
  ) {
    const totalPrice = this.calculatorService.calculatePrice(
      body.items,
      body.hasMemberCard,
    );
    return { totalPrice };
  }
}
