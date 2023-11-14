import Router from "next/router";
import useRequest from "../../hooks/use-request";
import styled from "styled-components";
const H1 = styled.h1`
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  text-align: center;
`;

const LabelEmail = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: #111827;
  text-align: right;
  width: 28%;
`;

const LabelPassword = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: #111827;
  text-align: right;
  width: 28%;
`;

const Input = styled.input`
  display: inline-block;
  padding: 0.7rem;
  width: 300px;
  border-radius: 0.5rem;
  border-width: 1px;
  border-color: #d1d5db;
  width: 50%;
  color: #111827;
  background-color: #f9fafb;
`;

const DivButton = styled.div`
  display: block;
  text-align: right;
  display: block;
  width: 75%;
`;
const Button = styled.button``;
import { useState } from "react";
const NewTicket = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const { doRequest, errors } = useRequest({
    url: "/api/tickets",
    method: "post",
    body: {
      title,
      price,
    },
    onSuccess: () => Router.push("/"),
  });

  const onBlur = () => {
    const value = parseFloat(price);

    if (isNaN(value)) {
      return;
    }

    setPrice(value.toFixed(2));
  };
  const onSubmit = (event) => {
    event.preventDefault();
    doRequest();
  };
  return (
    <div>
      <H1>Selling Your Ticket</H1>
      <form onSubmit={onSubmit}>
        <FormGroup>
          <LabelEmail className="form-group">Title</LabelEmail>
          <Input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <LabelPassword className="form-group">Price</LabelPassword>
          <Input
            value={price}
            onBlur={onBlur}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </FormGroup>
        {errors}
        <DivButton>
          <Button className="btn btn-primary">Submit</Button>
        </DivButton>
      </form>
    </div>
  );
};

export default NewTicket;
