import React, { useEffect } from "react";
import AuthLayout from "../../components/AuthLayot";
import RegisterForm from "../../components/RegisterForm";
import { useDispatch } from "react-redux";
import { clearMessage } from "../../redux/actions/auth";


export const Register: React.FC = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;
