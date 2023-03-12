import React from "react";
import Button, { ButtonColor } from "~/components/common/buttons/button";
import Input from "~/components/input fields/input/input";
import CardAuthLayout from "~/layout/card-auth-layout";

export default function ForgotPassword() {
  return (
    <CardAuthLayout>
      <button className="mb-5">Back</button>

      <div className="px-20 mb-20">
        <div className="text-center">
          <h3>Forgot Password?</h3>
          <p className="text-gray-400">
            Input the email address associated with your account and we’ll send
            you a link to reset password.
          </p>
        </div>

        <form className="flex flex-col gap-y-4 mt-8">
          <Input type="email" placeholder="yourmail@email.com" label="Email" />

          <Button className="mt-12" colorVariant={ButtonColor.primary}>
            Continue
          </Button>
        </form>
      </div>
    </CardAuthLayout>
  );
}
