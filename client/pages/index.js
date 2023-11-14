import Link from "next/link";
import styled from "styled-components";
const H1 = styled.h1`
  color: black;
  text-align: center;
`;

const Item = styled.div`
  margin: 10px 0 10px 0;
`;

const View = styled.h6`
  margin-top: 70px;
  padding: 20px;
`;

const Event = styled.h5`
  fontsize: 15px;
  padding: 10px;
`;

const Price = styled.h6`
  padding: 10px;
`;

const Button = styled.button`
  color: black;
  float: right;
  fontsize: 20px;
  border: none;
  padding: 10px 30px 10px 30px;
  border-radius: 10px;
  &:hover {
    background-color: #105b72c2;
  }
`;

const LandingPage = ({ currentUser, tickets }) => {
  const ticketList = tickets.map((ticket) => {
    return (
      <Item className="col-xl-4" key={ticket.id}>
        <div
          style={{
            borderRadius: "10px",
            border: "1px solid black",
            padding: "30px 0 30px 0",
          }}
        >
          <Event>{ticket.title}</Event>
          <Price>Price: {ticket.price} VND</Price>
          <View>
            <Link
              style={{
                textDecoration: "none",
                textAlign: "center",
              }}
              href="/tickets/[ticketId]"
              as={`/tickets/${ticket.id}`}
            >
              <Button>View</Button>
            </Link>
          </View>
        </div>
      </Item>
    );
  });

  return (
    <div className="container">
      {tickets.length > 0 ? (
        <div className="row">{ticketList}</div>
      ) : (
        <H1>No Event Is Coming </H1>
      )}
    </div>
  );
};

LandingPage.getInitialProps = async (context, client, currentUser) => {
  const { data } = await client.get("/api/tickets");
  return { tickets: data };
};

export default LandingPage;
