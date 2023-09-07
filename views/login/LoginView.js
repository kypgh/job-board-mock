import { PrimaryBtn } from "@/components/Buttons";
import { InputWithError } from "@/components/Inputs";
import { H3 } from "@/components/Typography";
import { Background, Container, Flex } from "@/components/generic";
import { Formik } from "formik";
import React from "react";
import styled from "styled-components";
import * as Yup from "yup";

const Form = styled.form`
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  padding: 20px;
  border-radius: 5px;
  background-color: #ffffff;
  max-width: 500px;
  margin: 0 auto;
`;

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

const LoginView = () => {
  return (
    <Background $color="#fdfdfd">
      <Container
        style={{
          padding: "20px",
        }}
      >
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, handleSubmit, handleChange }) => (
            <Form onSubmit={handleSubmit}>
              <H3 $mb={25}>Login</H3>
              <Flex $direction="column" $gap={20}>
                <InputWithError
                  label="Email"
                  name="email"
                  type="email"
                  error={errors}
                  onChange={handleChange}
                />
                <InputWithError
                  label="Password"
                  name="password"
                  type="password"
                  error={errors}
                  onChange={handleChange}
                />
                <PrimaryBtn type="submit">Login</PrimaryBtn>
              </Flex>
            </Form>
          )}
        </Formik>
      </Container>
    </Background>
  );
};

export default LoginView;
