import styled from "styled-components";
import { CardElement } from "@stripe/react-stripe-js";

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;
  margin: auto 10px;
`;

export const CardInput = styled.div`
  padding: 10px;
  background-color: #eeeeee;
  margin-bottom: 10px;
`;
