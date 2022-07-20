import React from "react";

//pages
import UserLoginMethodPicker from "./pages/UserLoginMethodPicker";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ResetSendEmailPhase from "./pages/ResetSendEmailPhase";
import NewPassword from "./pages/NewPassword";
import Introduction from "./pages/Introduction";

export default function Authentication() {
  const [loginForm, setLoginForm] = React.useState({ email: "", password: "" });
  const [resetPasswordForm, setResetPasswordForm] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [signUpForm, setSignUpForm] = React.useState({
    name: "",
    email: "",
    mobileNo: "",
    address: "",
    password: "",
    confirmPassword: "",
  });
  const [page, setPage] = React.useState("introduction");

  const pages = {
    userLoginMethodPicker: <UserLoginMethodPicker setPage={setPage} />,
    login: (
      <Login
        loginForm={loginForm}
        setLoginForm={setLoginForm}
        setPage={setPage}
      />
    ),
    signup: (
      <SignUp
        signUpForm={signUpForm}
        setSignUpForm={setSignUpForm}
        setPage={setPage}
      />
    ),
    resetSendEmailPhase: (
      <ResetSendEmailPhase
        resetPasswordForm={resetPasswordForm}
        setResetPasswordForm={setResetPasswordForm}
        setPage={setPage}
      />
    ),
    newPassword: (
      <NewPassword
        setPage={setPage}
        resetPasswordForm={resetPasswordForm}
        setResetPasswordForm={setResetPasswordForm}
      />
    ),
    introduction: (
      <Introduction setPage={setPage} />
    )
  };
  return <div className="flex-1 flex overflow-hidden">{pages[page]}</div>;
}
