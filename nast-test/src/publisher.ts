import nats from "node-nats-streaming";
import { TicketCreatedPublisher } from "./event/ticket-created-publisher";

console.clear();
const client = nats.connect("ticketing", "abc", {
  url: "http://localhost:4222",
});

client.on("connect", async () => {
  console.log("Publisher connected to NATS");
  const publisher = new TicketCreatedPublisher(client);
  try {
    await publisher.publish({
      id: "0505",
      title: "concert",
      price: 20,
    });
  } catch (err) {
    console.log(err);
  }
});
