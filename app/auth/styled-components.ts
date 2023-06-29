import { styled } from "styled-components";

export const AuthLayoutWrapper = styled.div`
  background-color: #f2f2f2;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AuthContainer = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 60% 40%;
  width: 90%;
  height: 90%;
  align-items: center;
  justify-content: space-around;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const AuthContentWrapper = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
`;

export const AuthTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const WelcomeMessage = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const SignUpPrompt = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
`;

export const MarketingContent = styled.div`
  text-align: center;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f3f5f9;
`;

export const MarketingHeading = styled.h3`
  font-size: 64px;
  margin-bottom: 10px;
`;

export const MarketingText = styled.p`
  font-size: 28px;
  margin-bottom: 10px;
  color: var(--black-color);
`;
export const SignUpTextWrapper = styled.div`
  font-size: 14px;
  color: var(--light-font-color);
  display: flex;
  gap: 4px;
  margin-top: 10px;
`;
export const SignUpButton = styled.button`
  border: none;
  background-color: transparent;
  color: blue;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const ErrorMessageWrapper = styled.div`
  margin-top: 10px;
  color: red;
`;
