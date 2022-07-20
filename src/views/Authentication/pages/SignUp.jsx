import React from "react";

//components
import Input from "../../../components/Input";
import Button from "../../../components/Button";

export default function SignUp({ signUpForm, setSignUpForm, setPage }) {
  return (
    <div className="flex-1 flex flex-col justify-between items-center px-[6vw] py-[5vh]">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full flex flex-col items-center gap-[3vh]"
      >
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-3xl text-backgroundText">Sign Up</h1>
          <p className="text-sm text-backgroundText">
            Add your details to sign up
          </p>
        </div>
        <Input
          name="name"
          value={signUpForm.name}
          onChange={(name, value) =>
            setSignUpForm({ ...signUpForm, [name]: value })
          }
          placeholder="Name"
          type="text"
          inputMode="text"
        />
        <Input
          name="email"
          value={signUpForm.email}
          onChange={(name, value) =>
            setSignUpForm({ ...signUpForm, [name]: value })
          }
          placeholder="Email"
          type="email"
          inputMode="email"
        />
        <Input
          name="mobileNo"
          value={signUpForm.mobileNo}
          onChange={(name, value) =>
            setSignUpForm({ ...signUpForm, [name]: value })
          }
          placeholder="Mobile No"
          type="text"
          inputMode="numeric"
        />
        <Input
          name=" address"
          value={signUpForm.address}
          onChange={(name, value) =>
            setSignUpForm({ ...signUpForm, [name]: value })
          }
          placeholder="Address"
          type="text"
          inputMode="text"
        />
        <Input
          name="password"
          value={signUpForm.password}
          onChange={(name, value) =>
            setSignUpForm({ ...signUpForm, [name]: value })
          }
          placeholder="Password"
          type="password"
          inputMode="text"
        />
        <Input
          name="confirmPassword"
          value={signUpForm.confirmPassword}
          onChange={(name, value) =>
            setSignUpForm({ ...signUpForm, [name]: value })
          }
          placeholder="Confirm Password"
          type="password"
          inputMode="text"
        />
        <div className="flex flex-col items-center mt-[3vh] gap-[3vh] w-full">
          <Button
            title="Sign Up"
            variant="contained"
            round="rounded-full"
            color="primary"
            padding="py-[2vh]"
            action={() => {}}
          />
          <p className="text-sm font-[300] text-backgroundText mt-[4vh]">
            Don't have an accout?
            <span
              className="text-sm text-primary font-[500]"
              onClick={() => setPage("login")}
            >
              {" "}
              Login
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}
