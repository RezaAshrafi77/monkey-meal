import React from "react";

//components
import Input from "../../../components/Input";
import Button from "../../../components/Button";

export default function SignUp({
  resetPasswordForm,
  setResetPasswordForm,
  setPage,
}) {
  return (
    <div className="flex-1 flex flex-col items-center px-[6vw] py-[5vh]">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full flex flex-col items-center gap-[3vh]"
      >
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-3xl text-backgroundText">New Password</h1>
          <p className="text-sm text-backgroundText w-3/4 mb-[5vh]">
            Please enter your email to receive a link to create a new password
            via email{" "}
          </p>
        </div>
        <Input
          name="email"
          value={resetPasswordForm.name}
          onChange={(name, value) =>
            setResetPasswordForm({ ...resetPasswordForm, [name]: value })
          }
          placeholder="Email"
          type="email"
          inputMode="email"
        />
        <Button
          title="Send"
          variant="contained"
          round="rounded-full"
          color="primary"
          padding="py-[2vh]"
          action={() => setPage("newPassword")}
        />
      </form>
    </div>
  );
}
