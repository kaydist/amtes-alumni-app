import React from "react";
import AuthLayout from "~/layout/auth-layout";
import Input from "~/components/input fields/input/input";
import Select from "~/components/input fields/Select/select";
import Button, {
  ButtonColor,
} from "~/components/common/buttons/button";
import Checkbox from "~/components/input fields/checkbox/checkbox";

const SignUpPage = () => {
  return (
    <div>
      <AuthLayout>
        <div className="text-center">
          <h3>
            <span className="text-primary-300">AMTES Alumni</span> Sign up Form
          </h3>
          <p className="text-gray-300">
            Membership is open to individuals who graduated as a member of the
            Association of Mechatronics Engineering Students (AMTES) or are
            present
          </p>
        </div>

        <form className="flex flex-col gap-y-4 mt-8">
          <Input type="number" placeholder="20140000" label="Matric Number" />
          <Input type="email" placeholder="mail@email.com" label="Email" />
          <Select
            label="Gender"
            selectOptions={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
            ]}
          />
          <Input type="date" placeholder="DD/MM/YYYY" label="Date of Birth" />
          <Input
            type="password"
            placeholder="Input Password"
            label="Password"
          />
          <Input
            type="password"
            placeholder="Input Password"
            label="Confirm Password"
          />

          <Checkbox
            name="agreement"
            value="agreement"
            label={
              <>
                By ticking, you agree to the{" "}
                <span className="text-primary-300">Terms of Service</span> and{" "}
                <span className="text-primary-300">Privacy Policy</span>.
              </>
            }
          />

          <Button className="mt-12" colorVariant={ButtonColor.primary}>
            Register
          </Button>
        </form>

        <p className="text-center mt-4">
          Have an account already?{" "}
          <span className="text-primary-300">Log in</span>.
        </p>
      </AuthLayout>
    </div>
  );
};

export default SignUpPage;
