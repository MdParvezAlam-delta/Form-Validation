
import { useState } from 'react'

export function useSignupForm() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPass, setConfirmPass] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && email && password && confirmPass) {
      if (password === confirmPass) {
        alert("Sign Up Successfully");
      } else {
        alert("ERR : Password & ConfirmPassword Must be SAME !");
      }
    } else {
      alert("All Fields are Mandatory");
    }
  };

  return {
    name, setName,
    email, setEmail,
    password, setPassword,
    confirmPass, setConfirmPass,
    handleSubmit
  };
}