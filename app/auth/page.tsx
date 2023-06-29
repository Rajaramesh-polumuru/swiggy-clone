"use client";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  AuthLayoutWrapper,
  AuthContainer,
  MarketingContent,
  MarketingHeading,
  MarketingText,
  FormWrapper,
  AuthContentWrapper,
  AuthTitle,
  WelcomeMessage,
  SignUpPrompt,
  Form,
  Input,
  Button,
  SignUpTextWrapper,
  SignUpButton,
  ErrorMessageWrapper,
} from "@/app/auth/styled-components";
import { useEffect, useState } from "react";
import { auth } from "@/firebase/app";
import { useRouter } from "next/navigation";

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const formTitle = isSignUp ? "Sign Up" : "Sign In";
  const buttonLabel = isSignUp ? "Create Account" : "Sign In";
  const welcomeMessage = "Welcome to Restaurants";
  const signupPrompt = isSignUp ? "Sign up to continue" : "Sign in to continue";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    if (isSignUp) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setIsSignUp(false);
        })
        .catch((error) => {
          const message = error.message;
          setErrorMessage(message);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log({ user });
          router.push("/");
        })
        .catch((error) => {
          const message = error.message;
          setErrorMessage(message);
        });
    }
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        router.push("/");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [router]);

  useEffect(() => {
    console.log({ errorMessage });
  }, [errorMessage]);

  return (
    <AuthLayoutWrapper>
      <AuthContainer>
        <MarketingContent>
          <MarketingHeading>Discover the Best Restaurants</MarketingHeading>
          <MarketingText>
            Find amazing dining experiences near you.
          </MarketingText>
          <MarketingText>Explore diverse cuisines and flavors.</MarketingText>
          <MarketingText>Get personalized recommendations.</MarketingText>
        </MarketingContent>
        <FormWrapper>
          <AuthContentWrapper>
            <AuthTitle>{formTitle}</AuthTitle>
            <WelcomeMessage>{welcomeMessage}</WelcomeMessage>
            <SignUpPrompt>{signupPrompt}</SignUpPrompt>
          </AuthContentWrapper>
          <Form onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
            />
            <Button type="submit">{buttonLabel}</Button>
          </Form>
          {isSignUp ? (
            <SignUpTextWrapper>
              {`Already have an account? `}
              <SignUpButton onClick={() => setIsSignUp(false)}>
                Sign in
              </SignUpButton>
            </SignUpTextWrapper>
          ) : (
            <SignUpTextWrapper>
              {`Didn't have an account? `}
              <SignUpButton onClick={() => setIsSignUp(true)}>
                Sign up
              </SignUpButton>
            </SignUpTextWrapper>
          )}
          {errorMessage ? (
            <ErrorMessageWrapper>{errorMessage}</ErrorMessageWrapper>
          ) : (
            <> </>
          )}
        </FormWrapper>
      </AuthContainer>
    </AuthLayoutWrapper>
  );
}
