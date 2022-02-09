/****
 * 
Suppose a class VegetableBill keeps track of a list of vegetables being purchased at a market:

Method/Constructor    Description
public VegetableBill(Employee clerk)    constructs a VegetableBill object for the given clerk
public void add(Item i)    adds I to this bill's total
public double getTotal()   returns the cost of these items
public void printReceipt() prints a list of items

 */

import { ClerkConfigs } from "./interface/ClerkConfigs";
import { ItemConfigs } from "./interface/ItemConfigs";

export class VegetableBill {
  items: ItemConfigs[] = [];
  clerkDetails: ClerkConfigs;
  /**
   *
   * @param clerk Constructs a VegetableBill object for the given clerk.
   */
  constructor(clerk: ClerkConfigs) {
    this.clerkDetails = clerk;
  }

  /**
   * Adds item to this bill's total.
   */
  add(item: ItemConfigs): void {
    this.items.push(item);
  }

  /**
   * @returns The cost of these items.
   */
  getTotal(): number {
    let totalItemsCost = 0;
    for (let i = 0; i < this.items.length; i++) {
      totalItemsCost += this.items[i].price;
    }
    // console.log("Total Item Cost: ", totalItemsCost);
    return totalItemsCost;
  }

  /**
   * @returns Prints a list of items.
   */
  printReceipt() {
    let orderNumber: number = 1000;

    console.log("<-----  Bill  ----->");
    console.log(`Order Number: ${orderNumber}`);
    console.log(`Clerk Name: ${this.clerkDetails?.name}`);
    console.log(`Customer Name: ${this.clerkDetails?.customer?.name}`);
    console.log("\n");
    console.log("Id ---- Name ---- Cost/Rs");

    for (let i = 0; i < this.items.length; i++) {
      console.log(
        `${this.items[i].id} ---- ${this.items[i].name} ---- ${this.items[i].price}`
      );
    }
    console.log("\n");
    console.log(`Total --------- ${this.getTotal()} Rupees only!!`);
    console.log("\n");
  }
}
