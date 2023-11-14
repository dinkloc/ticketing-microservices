import { use } from "react";
import styled from "styled-components";

const UL = styled.ul`
  border-top-width: 1px;
  border-color: #f3f4f6;
`;

const LI = styled.li`
  display: flex;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  column-gap: 1.5rem;
  justify-content: space-between;
`;

const EVENT = styled.div`
  display: flex;
  column-gap: 1rem;
  min-width: 0;
`;

const EVENTCONTENT = styled.div`
  flex: 1 1 auto;
  min-width: 0;
`;

const EVENTNAME = styled.p`
  font-size: 1.5rem;
  line-height: 1.25rem;
  font-weight: 600;
  line-height: 1.5rem;
  color: #111827;
`;

const EVENTSTATUS = styled.div`
  display: none;
  shrink: 0;

  @media (min-width: 640px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;

const STATUS = styled.p`
  font-size: 1.5rem;
  line-height: 1.25rem;
  line-height: 1.5rem;
  font-weight: 600;
  color: #111827;
  text-transform: uppercase;
  width: 350px;
`;

const OrderIndex = ({ orders, currentUser }) => {
  return (
    <div currentUser={currentUser} className="container">
      <h5>Email User: {currentUser.email} </h5>
      <UL>
        {orders.map((order) => {
          return (
            <LI key={order.id}>
              <EVENT>
                <EVENTCONTENT>
                  <EVENTNAME>{order.ticket.title}</EVENTNAME>
                  <EVENTNAME>{order.ticket.price} VND</EVENTNAME>
                </EVENTCONTENT>
              </EVENT>
              <EVENTSTATUS>
                <STATUS>{order.status}</STATUS>
              </EVENTSTATUS>
            </LI>
          );
        })}
      </UL>
    </div>
  );
};

OrderIndex.getInitialProps = async (context, client) => {
  const { data } = await client.get("/api/orders");
  return { orders: data };
};

export default OrderIndex;
