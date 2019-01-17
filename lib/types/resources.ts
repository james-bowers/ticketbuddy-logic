export type EventAdmission = {
  decodeTicketPassword: string;
  admission_staff: string[];
};

export type Event = {
  id: string;
  owner: string;
  title: string;
  description: string;
  tickets: string[];
  active: boolean;
};

export type TicketOrder = {
  parent: string | any;
  quantity: number;
};

export type TicketList = TicketOrder[];

export type Order = {
  userId: string;
  eventId: string;
  items: TicketList;
  amount: number;
  ticketbuddy_fee: number;
  refunded: number;
  currency: "gbp" | string;
  email_at_time_of_order: string;
  paid: boolean;
};

export type Address = {
  city: string;
  country: string;
  line1: string;
  line2: string;
  postal_code: string;
  state: string;
};

export type Dob = {
  day: string;
  month: string;
  year: string;
};

export type BankInformation = {
  accountHolderName: string;
  accountNumber: string;
  sortCode: string;
  country: string;
  currency: string;
};

export type LegalEntity = {
  business_name?: string;
  business_tax_id?: string;
  address?: Address;
  first_name?: string;
  last_name?: string;
  dob?: Dob;
};

export type Ticket = {
  owner: string;
  id: string;
  title: string;
  quantity: number;
  price: number;
  active: boolean;
};

export type User = {
  uid: string;
  email: string;
  tickets: string[];
  events: string[];
  orders: string[];
  stripeAccount?: string;
};

export type Promoter = User & {
  stripeAccount: string;
};
