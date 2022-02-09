import { CustomerConfigs } from "./CustomerConfigs";

export interface ClerkConfigs {
  id: number;
  name: string;
  customer: CustomerConfigs;
}
