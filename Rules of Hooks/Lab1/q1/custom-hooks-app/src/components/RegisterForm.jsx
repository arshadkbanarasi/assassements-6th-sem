import React from "react";
import { Input, Button, VStack } from "@chakra-ui/react";
import useForm from "../hooks/useForm";

const RegisterForm = () => {
  const { formData, handleChange, resetForm } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={4}>
        <Input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <Button type="submit" colorScheme="blue">
          Register
        </Button>
      </VStack>
    </form>
  );
};

export default RegisterForm;
