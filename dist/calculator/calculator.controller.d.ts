import { CalculatorService } from './calculator.service';
export declare class CalculatorController {
    private readonly calculatorService;
    constructor(calculatorService: CalculatorService);
    calculate(body: {
        items: {
            id: number;
            total: number;
        }[];
        hasMemberCard: boolean;
    }): {
        totalPrice: number;
    };
}
