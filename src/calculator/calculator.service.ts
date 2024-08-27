import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculatorService {
  private readonly itemPrices = {
    'Red set': 50,
    'Green set': 40,
    'Blue set': 30,
    'Yellow set': 50,
    'Pink set': 80,
    'Purple set': 90,
    'Orange set': 120,
  };

  calculatePrice(
    items: { id: number; total: number }[],
    hasMemberCard: boolean,
  ): number {
    let totalPrice = 0;
    const itemCounts = new Map<string, number>();

    const itemIdToName: { [key: number]: string } = {
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

    // 1. คำนวณราคาและจำนวนสินค้า
    for (const item of items) {
      const itemName = itemIdToName[item.id];
      if (itemName) {
        const itemPrice = this.itemPrices[itemName] || 0;
        const itemTotalPrice = itemPrice * item.total;

        totalPrice += itemTotalPrice;

        // อัพเดตจำนวนสินค้าสำหรับแต่ละชนิด
        itemCounts.set(itemName, (itemCounts.get(itemName) || 0) + item.total);

        console.log(`Item: ${itemName}`);
        console.log(`Price per unit: ${itemPrice}`);
        console.log(`Quantity: ${item.total}`);
        console.log(`Total price for this item: ${itemTotalPrice}`);
      }
    }

    console.log('Item counts:', Array.from(itemCounts.entries()));
    console.log('Total price before membership discount:', totalPrice);

    // 2. ใช้ส่วนลดสมาชิก
    if (hasMemberCard) {
      totalPrice *= 0.9;
      console.log('Applied membership discount. New total price:', totalPrice);
    }

    // 3. ใช้ส่วนลดเพิ่มเติม
    if (
      itemCounts.get('Pink set') >= 2 ||
      itemCounts.get('Green set') >= 2 ||
      itemCounts.get('Orange set') >= 2
    ) {
      totalPrice *= 0.95;
      console.log('Applied additional discount. New total price:', totalPrice);
    }

    return totalPrice;
  }
}
