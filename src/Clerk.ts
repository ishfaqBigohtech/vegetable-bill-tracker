import { ClerkConfigs } from "./interface/ClerkConfigs";

export class Clerk {
  clerk: ClerkConfigs;

  constructor(clerk: ClerkConfigs) {
    this.clerk = clerk;
  }

  getClerk() {
    return this.clerk;
  }
}
