"use client";
import styled from "styled-components";

const AuthLayoutWrapper = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
`;

const AuthContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const AuthContentWrapper = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const EmailInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const PasswordInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export default function AuthComponent() {
  return (
    <AuthLayoutWrapper>
      <AuthContainer>
        <AuthContentWrapper>
          <h2>Welcome to the Restaurant List</h2>
          <p>Please sign in to access the list of restaurants.</p>
        </AuthContentWrapper>
        <EmailInput type="text" placeholder="Enter your email" />
        <PasswordInput type="password" placeholder="Enter your password" />
      </AuthContainer>
    </AuthLayoutWrapper>
  );
}
