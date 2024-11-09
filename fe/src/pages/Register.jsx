import { Form, redirect, Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, FormRowSelect, Logo, SubmitBtn } from "../components";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { USER_TYPE } from "../utils/constants";
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // Log toàn bộ dữ liệu form
  
  try {
    await customFetch.post("/user/register", data);
    toast.success("Registration successful");
    return redirect("/login");
  } catch (error) {
    toast.error(error?.response?.data?.message);

    return error;
  }
};
const Register = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="fullName" />
        <FormRow type="email" name="email" labelText="Email" />
        <FormRow
          type="phoneNumber"
          name="phoneNumber"
          labelText="Phone Number"
        />

        <FormRowSelect
          labelText="Role"
          name="role"
          defaultValue={USER_TYPE.Student}
          list={Object.values(USER_TYPE)}
        />
        <FormRow type="password" name="password" />
        <FormRow type="address" name="address" />
        <FormRow type="text" name="universityName" labelText="University" />
        <SubmitBtn />
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Register;
