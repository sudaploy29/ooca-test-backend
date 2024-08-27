export declare class CalculatorService {
    private readonly itemPrices;
    calculatePrice(items: {
        id: number;
        total: number;
    }[], hasMemberCard: boolean): number;
}
