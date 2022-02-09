/***
 * 
 Define a class DiscountBill that extends VegetableBill to compute discounts for preferred customers. The constructor for DiscountBill accepts a parameter for whether the customer should get the discount.
   
 *
 */

import { ClerkConfigs } from "./interface/ClerkConfigs";
import { ItemConfigs } from "./interface/ItemConfigs";
import { VegetableBill } from "./VegetableBill";

export class DiscountBill extends VegetableBill {
  clerkDetails: ClerkConfigs;
  isPreferred: boolean;
  discountedItemCount: number = 0;
  discountedAmout: number = 0;

  constructor(clerk: ClerkConfigs, preferred: boolean) {
    super(clerk);
    this.clerkDetails = clerk;
    this.isPreferred = preferred;
  }

  add(item: ItemConfigs): void {
    super.add(item);
  }

  availDiscount() {
    super.items;

    if (this.isPreferred) {
      for (let i = 0; i <= this.items.length; i++) {
        if (this.items[i]?.discount > 0) {
          this.discountedItemCount++;
          this.discountedAmout += this.items[i].discount;
        }
      }
    }
  }

  /**
   * @returns  The number of items that were discounted, if any.
   */
  getDiscountCount() {
    this.availDiscount();
    console.log(`Number of Discounted Items: ${this.discountedItemCount}`);
  }

  /**
   *  @returns Returns the total discount for this list of items, if any.
   */
  getDiscountAmount() {
    let totalAmountAfterDiscount = this.getTotal() - this.discountedAmout;
    console.log(`Total Discounted Amount: ${totalAmountAfterDiscount}`);
  }

  /**
   * @returns The percent of the total discount as a percent of what the total would have been otherwise.
   */

  getDiscountPercent() {
    let convertIntoPercentage = (this.discountedAmout * 100) / this.getTotal();
    console.log(`Total Discounted Percentage: ${convertIntoPercentage}%`);
  }
}
