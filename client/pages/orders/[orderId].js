import { useEffect, useState } from "react";
import Router from "next/router";
import useRequest from "../../hooks/use-request";
const OrderShow = ({ order }) => {
  const [timeLeft, setTimeLeft] = useState("");
  const [numberCard, setNumberCard] = useState("");
  console.log(order.id);
  const { doRequest, errors } = useRequest({
    url: "/api/payments",
    method: "post",
    body: {
      orderId: order.id,
      numberCard,
    },
    onSuccess: () => Router.push("/"),
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(numberCard);
    await doRequest();
  };

  useEffect(() => {
    const findTimeLeft = () => {
      const msLeft = new Date(order.expiresAt) - new Date();
      setTimeLeft(Math.round(msLeft / 1000));
    };
    findTimeLeft();
    const timerId = setInterval(findTimeLeft, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [order]);

  if (timeLeft < 0) {
    return <div>Order expired</div>;
  }
  return (
    <div>
      Time left to pay: {timeLeft}
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Number Card</label>
          <input
            className="form-control"
            value={numberCard}
            onChange={(event) => {
              setNumberCard(event.target.value);
            }}
            style={{ margin: "3px 0 0 0", width: "300px" }}
          />
          <button style={{ margin: "10px 0 0 0" }} className="btn btn-primary">
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

OrderShow.getInitialProps = async (context, client) => {
  const { orderId } = context.query;
  const { data } = await client.get(`/api/orders/${orderId}`);

  return { order: data };
};

export default OrderShow;
