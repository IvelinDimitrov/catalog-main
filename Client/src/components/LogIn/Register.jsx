import { Link, useNavigate } from "react-router-dom";
import useScrollToTop from "../Handlerrs/useScrollToTop";
import { userRegister } from "../../hooks/useAuth";
import useForm from "../../hooks/userForms";
import { useState } from "react";
const InitialValues = { email: "", password: "", rePassword: "" };
export default function Register() {
  useScrollToTop();
  const [error, setError] = useState("");
  const register = userRegister();
  const navigate = useNavigate();
  const registerHandler = async ({ email, password, rePassword }) => {
    if (password !== rePassword) {
      return setError("Passwords doesn't match");
    }
    try {
      await register(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  const { values, changeHandler, submitHandler } = useForm(
    InitialValues,
    registerHandler
  );
  return (
    <section className="min-h-screen flex box-border justify-center items-center bg-background-color">
      <div className="bg-[#ddcaba] rounded-2xl flex max-w-3xl p-5 items-center">
        <div className="md:w-1/2 px-8">
          <h2 className="font-bold text-3xl text-green-tx">Sign In</h2>

          <p className="text-sm mt-4 text-green-tx font-semibold">
            Start your adventure now.
          </p>
          {error && (
            <p className="text-sm mt-4 text-[#d02037] font-semibold">{error}</p>
          )}
          <form className="flex flex-col gap-4" onSubmit={submitHandler}>
            <input
              className="p-2 mt-8 rounded-xl bg-navi border-2 border-navi focus:border-green-tx focus:outline-none"
              type="email"
              name="email"
              value={values.email}
              onChange={changeHandler}
              placeholder="Email"
              required
            />
            <div className="relative">
              <input
                className="p-2 rounded-xl w-full bg-navi border-2 border-navi focus:border-green-tx focus:outline-none"
                type="password"
                name="password"
                id="password"
                value={values.password}
                onChange={changeHandler}
                placeholder="Password"
                required
              />
            </div>
            <div className="relative">
              <input
                className="p-2 rounded-xl w-full bg-navi border-2 border-navi focus:border-green-tx focus:outline-none"
                type="password"
                name="rePassword"
                id="rePassword"
                value={values.rePassword}
                onChange={changeHandler}
                placeholder="Confirm Password"
                required
              />
            </div>
            <button
              className="bg-background-color text-green-tx py-2 rounded-xl hover:scale-105 duration-300 hover:bg-green-tx hover:text-navi font-medium"
              type="submit"
            >
              Sign In
            </button>
          </form>
          <div className="mt-6 text-sm flex justify-between items-center container-mr">
            <p className="text-sm text-green-tx font-semibold">
              If you are already a member.
            </p>

            <Link
              to="/logIn "
              className="hover:border register text-green-tx bg-background-color hover:border-gray-400 rounded-xl py-2 px-5 hover:scale-110 hover:bg-green-tx hover:text-navi font-semibold duration-300"
            >
              {" "}
              Log In
            </Link>
          </div>
        </div>
        {/* Image */}
        <div className="md:block hidden w-1/2">
          <img
            className="rounded-2xl max-h-[1000px]"
            src="/images/log/das.jpg"
            alt="login form image"
          />
        </div>
      </div>
    </section>
  );
}
