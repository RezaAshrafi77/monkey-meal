import React from "react";

//components
import Input from "../../../components/Input";
import Button from "../../../components/Button";

export default function Login({ loginForm, setLoginForm, setPage }) {
  return (
    <div className="flex-1 flex flex-col justify-between items-center px-[6vw] py-[5vh]">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full flex flex-col items-center gap-[3vh]"
      >
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-3xl text-backgroundText">Login</h1>
          <p className="text-sm text-backgroundText">
            Add your details to login
          </p>
        </div>
        <Input
          name="email"
          value={loginForm.email}
          onChange={(name, value) =>
            setLoginForm({ ...loginForm, [name]: value })
          }
          placeholder="Your Email"
          type="email"
          inputMode="email"
        />
        <Input
          name="password"
          value={loginForm.password}
          onChange={(name, value) =>
            setLoginForm({ ...loginForm, [name]: value })
          }
          placeholder="Your Password"
          type="password"
          inputMode="text"
        />
        <Button
          title="Login"
          variant="contained"
          round="rounded-full"
          color="primary"
          padding="py-[2vh]"
          action={() => {}}
        />
        <Button
          title="Forgot your password?"
          variant="text"
          color="backgroundText"
          padding="py-[2vh]"
          action={() => setPage("reset-send-email-phase")}
        />
      </form>
      <div className="flex flex-col items-center mt-[3vh] gap-[3vh] w-full">
        <p className="text-sm font-[300] text-backgroundText">or Login with</p>
        <Button
          title="Login with Facebook"
          variant="contained"
          round="rounded-full"
          color="info"
          padding="py-[2vh]"
          icon="/assets/icons/facebook.svg"
          action={() => {}}
        />
        <Button
          title="Login with Google"
          variant="contained"
          round="rounded-full"
          color="error"
          padding="py-[2vh]"
          icon="/assets/icons/google.svg"
          action={() => {}}
        />
        <p className="text-sm font-[300] text-backgroundText mt-[4vh]">
          Don't have an accout?
          <span
            className="text-sm text-primary font-[500]"
            onClick={() => setPage("signup")}
          >
            {" "}
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
