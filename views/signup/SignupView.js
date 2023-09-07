import React from "react";
import { InputWithError } from "@/components/Inputs";
import { Formik } from "formik";
import * as Yup from "yup";
import { Background, Container, Flex } from "@/components/generic";
import { PrimaryBtn } from "@/components/Buttons";
import { H3 } from "@/components/Typography";
import styled from "styled-components";

const Form = styled.form`
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  padding: 20px;
  border-radius: 5px;
  background-color: #ffffff;
  max-width: 500px;
  margin: 0 auto;
`;

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const SignupView = () => {
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
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, handleSubmit, handleChange }) => (
            <Form onSubmit={handleSubmit}>
              <H3 $mb={25}>Signup</H3>
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
                  error={errors.password}
                  onChange={handleChange}
                />
                <PrimaryBtn type="submit">Submit</PrimaryBtn>
              </Flex>
            </Form>
          )}
        </Formik>
      </Container>
    </Background>
  );
};

export default SignupView;
