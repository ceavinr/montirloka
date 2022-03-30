import React, { useState } from "react";
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from "./SigninElements";
import "./../../firebase";
import firebase from "firebase/compat/app";

import { getDatabase, ref, set } from "firebase/database";

const db = getDatabase();

const SignIn = () => {
  const firebaseApp = firebase.apps[0];
  console.log("firebaseApp.options");
  console.log(firebaseApp.options);

  const [email, setEmail] = useState("asdf@gmail.com");
  const [password, setPassword] = useState("asdf");
  const handleSubmit = async (e) => {
    //add data to firebase
    e.preventDefault();
    console.log("email, password");

    console.log(email, password);
    const newUser = {
      email,
      password,
    };

    console.log("newUser");
    console.log(newUser);
    set(ref(db, "users/1"), newUser);
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/"></Icon>
          <FormContent>
            <Form action="#" onSubmit={handleSubmit}>
              <FormH1>Sign In</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></FormInput>
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput
                type="password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></FormInput>
              <FormButton type="submit">Next</FormButton>
              <Text>Forgot password</Text>
              <Text>Already have account?</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>{" "}
    </>
  );
};

export default SignIn;
