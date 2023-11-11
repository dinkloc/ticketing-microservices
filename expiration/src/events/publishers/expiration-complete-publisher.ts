import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from "@dlngtickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
