"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculatorService = void 0;
const common_1 = require("@nestjs/common");
let CalculatorService = class CalculatorService {
    constructor() {
        this.itemPrices = {
            'Red set': 50,
            'Green set': 40,
            'Blue set': 30,
            'Yellow set': 50,
            'Pink set': 80,
            'Purple set': 90,
            'Orange set': 120,
        };
    }
    calculatePrice(items, hasMemberCard) {
        let totalPrice = 0;
        const itemCounts = new Map();
        const itemIdToName = {
            1: 'Red set',
            2: 'Green set',
            3: 'Blue set',
            4: 'Yellow set',
            5: 'Pink set',
            6: 'Purple set',
            7: 'Orange set',
        };
        console.log('Item prices:', this.itemPrices);
        console.log('Item ID to Name map:', itemIdToName);
        for (const item of items) {
            const itemName = itemIdToName[item.id];
            if (itemName) {
                const itemPrice = this.itemPrices[itemName] || 0;
                const itemTotalPrice = itemPrice * item.total;
                totalPrice += itemTotalPrice;
                itemCounts.set(itemName, (itemCounts.get(itemName) || 0) + item.total);
                console.log(`Item: ${itemName}`);
                console.log(`Price per unit: ${itemPrice}`);
                console.log(`Quantity: ${item.total}`);
                console.log(`Total price for this item: ${itemTotalPrice}`);
            }
        }
        console.log('Item counts:', Array.from(itemCounts.entries()));
        console.log('Total price before membership discount:', totalPrice);
        if (hasMemberCard) {
            totalPrice *= 0.9;
            console.log('Applied membership discount. New total price:', totalPrice);
        }
        if (itemCounts.get('Pink set') >= 2 ||
            itemCounts.get('Green set') >= 2 ||
            itemCounts.get('Orange set') >= 2) {
            totalPrice *= 0.95;
            console.log('Applied additional discount. New total price:', totalPrice);
        }
        return totalPrice;
    }
};
exports.CalculatorService = CalculatorService;
exports.CalculatorService = CalculatorService = __decorate([
    (0, common_1.Injectable)()
], CalculatorService);
//# sourceMappingURL=calculator.service.js.map