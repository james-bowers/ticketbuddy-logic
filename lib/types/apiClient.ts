import { TicketList } from "./resources";
import { LegalEntity } from "./resources";

export type LegalEntityRequest = LegalEntity;

export type AdmissionStaffRequest = {
  eventId: string;
};

export type NewEventRequest = {
  title: string;
};

export type NewTicketRequest = {
  title: string;
  eventId: string;
};

export type UpdateTicketQuantityRequest = {
  ticketId: string;
  quantity: number;
};

export type RemoveTicketRequest = {
  ticketId: string;
  eventId: string;
};

export type UpdateTicketActiveStatusRequest = {
  ticketId: string;
};

export type QueryOrdersRequest = {
  start: string;
  end: string;
  after?: string;
  before?: string;
};

export type GetTicketRequest = {
  eventId: string;
  ticketId: string;
};

export type GetOrderRequest = {
  orderId: string;
};

export type StoreOrderRequest = {
  eventId: string;
  ticketList: TicketList;
};

export type PayOrderRequest = {
  orderId: string;
  source: string;
};

export type GetEventRequest = {
  eventId: string;
};

export type CreateUserRequest = {
  email: string;
  plainTextPassword: string;
};

export type UpdateEventDescriptionRequest = {
  eventId: string;
  description: string;
};

export type ActiveStatusChangeEventRequest = {
  eventId: string;
};
