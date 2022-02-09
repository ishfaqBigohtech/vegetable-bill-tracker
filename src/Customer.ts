import { CustomerConfigs } from "./interface/CustomerConfigs";

export class Customer {
  customer: CustomerConfigs;

  constructor(customer: CustomerConfigs) {
    this.customer = customer;
  }

  getCustomer() {
    return this.customer;
  }
}
