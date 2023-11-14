import Router from "next/router";
import useRequest from "../../hooks/use-request";
import styled from "styled-components";
import { useState } from "react";

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
  width: 29%;
`;

const LabelPassword = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: #111827;
  text-align: right;
  width: 31%;
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

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { doRequest, errors } = useRequest({
    url: "/api/users/signup",
    method: "post",
    body: {
      email,
      password,
    },
    onSuccess: () => Router.push("/"),
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    await doRequest();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <H1>Sign Up</H1>
        <FormGroup className="form-group">
          <LabelEmail>Email</LabelEmail>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </FormGroup>
        <FormGroup className="form-group">
          <LabelPassword>Password</LabelPassword>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
          />
        </FormGroup>
        {errors}
        <DivButton>
          <Button className="btn btn-primary">Sign Up</Button>
        </DivButton>
      </form>
    </div>
  );
};

export default SignUp;
