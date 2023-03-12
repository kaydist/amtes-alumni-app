import React from "react";
import AuthLayout from "~/layout/auth-layout";
import Input from "~/components/input fields/input/input";
import Select from "~/components/input fields/Select/select";
import Button, { ButtonColor } from "~/components/common/buttons/button";
import Checkbox from "~/components/input fields/checkbox/checkbox";

const SignInPage = () => {
  return (
    <div>
      <AuthLayout>
        <div className="text-center">
          <h3>
            Welcome back!{" "}
            <span className="text-primary-300">AMTES Alumnus</span>
          </h3>
          <p className="text-gray-300">Input your details to login</p>
        </div>

        <form className="flex flex-col gap-y-4 mt-8">
          <Input type="number" placeholder="20140000" label="Matric Number" />

          <Input
            type="password"
            placeholder="Input Password"
            label="Password"
            inputInfo={<p className="text-right">Forgot Password?</p>}
          />

          <Button className="mt-12" colorVariant={ButtonColor.primary}>
            Log in
          </Button>
        </form>

        <p className="text-center mt-4">
          Have an account already?{" "}
          <span className="text-primary-300">Register</span>.
        </p>
      </AuthLayout>
    </div>
  );
};

export default SignInPage;
