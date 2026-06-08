import { useState } from 'react'

export function useSigninForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email && password) {
      alert("Sign In Successfully");
    } else {
      alert("All Fields are Mandatory");
    }
  };

  return {
    email, setEmail,
    password, setPassword,
    handleSubmit
  };
}