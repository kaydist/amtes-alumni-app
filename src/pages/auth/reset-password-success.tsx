import React from "react";
import CardAuthLayout from "~/layout/card-auth-layout";
import { ReactComponent as BackIcon } from "~/assets/icons/arrow-back.svg";
import { ReactComponent as MailIcon } from "~/assets/icons/sms.svg";

export default function ResetPasswordSuccess() {
  return (
    <CardAuthLayout>
      <button className="mb-5 p-2 rounded-md bg-other-light-blue">
        <BackIcon />
      </button>

      <div className="px-20 mb-20 text-center">
        <div className="mb-5 w-fit mx-auto text-other-green p-2 rounded-full bg-other-light-green">
          <MailIcon />
        </div>

        <div className="">
          <h3>Password Reset</h3>
          <p className="text-gray-400">
            Your new password has been set successfully. Click the button below
            to magically login.
          </p>
        </div>

        <div className="mt-8">
          Didn’t receive any email?{" "}
          <span className="text-primary-300">Resend link</span>.
        </div>
      </div>
    </CardAuthLayout>
  );
}
