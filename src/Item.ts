/****
 * 
 * 
VegetableBill objects interact with Item objects. An Item has the following public methods:

Method/Constructor             Description
public double getPrice()       returns the price for this item
public double getDiscount()    returns the discount for this item
 * 
 */

import { ItemConfigs } from "./interface/ItemConfigs";

export class Item {
  id!: number;
  name!: string;
  price!: number;
  discount!: number;
  quantity!: number;

  constructor(item: ItemConfigs) {
    this.id = item.id;
    this.name = item.name;
    this.price = item.price;
    this.discount = item.discount;
    this.quantity = item.quantity;
  }

  /**
   * @returns The price for this item.
   */
  getPrice() {
    return this.price;
  }

  /**
   * @returns The discount for this item.
   */
  getDiscount() {
    return this.discount;
  }
}
