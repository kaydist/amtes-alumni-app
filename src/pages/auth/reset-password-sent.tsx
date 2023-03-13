import React from "react";
import CardAuthLayout from "~/layout/card-auth-layout";
import { ReactComponent as BackIcon } from "~/assets/icons/arrow-back.svg";
import { ReactComponent as MailIcon } from "~/assets/icons/sms.svg";

export default function ResetPasswordSent() {
  return (
    <CardAuthLayout>
      <button className="mb-5 p-2 rounded-md bg-other-light-blue">
        <BackIcon />
      </button>

      <div className="px-20 mb-20 text-center">
        <div className="mb-5 w-fit mx-auto text-primary-400 p-2 rounded-full bg-other-light-blue">
          <MailIcon />
        </div>

        <div className="">
          <h3>Check your Mail</h3>
          <p className="text-gray-400">
            We’ve sent a password recovery instruction to your email address.
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
