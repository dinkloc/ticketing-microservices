import { Publisher, Subject, TicketCreatedEvent } from "@dlngtickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subject.TicketCreated = Subject.TicketCreated;
}
