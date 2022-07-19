import React from "react";

//components
import Button from "../../../components/Button";

export default function UserLoginMethodPicker({ setPage }) {
  return (
    <div className="flex flex-col flex-1">
      <div
        className="h-[47%] flex items-end justify-center rounded-br-[8%] rounded-bl-[8%] bg-primary"
        style={{
          backgroundImage: `url('/assets/images/user-login-method-picker-bg.svg')`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="w-[50vw] h-[50vw] flex justify-center items-center rounded-full bg-background transform translate-y-1/2">
          <img
            src="/assets/images/monkey-logo.svg"
            alt="logo"
            className="w-[60%] transform -translate-y-[15%]"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-between z-10 transform translate-y-[15vw] px-4 pb-[18vw]">
        <div className="flex flex-col items-center w-full">
          <h1 className="text-4xl font-[600]">
            <span className="text-primary">Meal </span>
            <span className="text-backgroundText">Monkey</span>
          </h1>
          <p className="text-[0.7rem] font-[300] text-backgroundText mt-2">
            FOOD DELIVERY
          </p>
          <p className="text-sm text-center font-[300] text-backgroundText mt-[3vh]">
            Discover the best foods from over 1,000
            <br />
            restaurants and fast delivery to your doorstep
          </p>
        </div>
        <div className="flex flex-col gap-5 w-full">
          <Button
            title="Login"
            variant="contained"
            round="rounded-full"
            color="primary"
            padding="py-4"
            action={() => setPage("login")}
          />
          <Button
            title="Create an account"
            variant="outlined"
            round="rounded-full"
            color="primary"
            padding="py-4"
            action={() => setPage("signup")}
          />
        </div>
      </div>
    </div>
  );
}
