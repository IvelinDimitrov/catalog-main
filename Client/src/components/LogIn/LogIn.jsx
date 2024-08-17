import { Link, useNavigate } from "react-router-dom";
import useScrollToTop from "../Handlerrs/useScrollToTop";
import { userLogin } from "../../hooks/useAuth";
import useForm from "../../hooks/userForms";
import { useState } from "react";

const InitialValues = { email: "", password: "" };
export default function LogIn() {
  useScrollToTop();
  const login = userLogin();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const logInHandler = async ({ email, password }) => {
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  const { values, changeHandler, submitHandler } = useForm(
    InitialValues,
    logInHandler
  );
  return (
    <section className="min-h-screen flex box-border justify-center items-center bg-background-color">
      <div className="bg-[#ddcaba] rounded-2xl flex max-w-3xl p-5 items-center">
        <div className="md:w-1/2 px-8">
          <h2 className="font-bold text-3xl text-green-tx">Login</h2>
          <p className="text-sm mt-4 text-green-tx">
            If you are already a member, easily log in now.
          </p>
          {error && (
            <p className="text-sm mt-4 text-[#d02037] font-semibold">{error}</p>
          )}
          <form className="flex flex-col gap-4" onSubmit={submitHandler}>
            <input
              className="p-2 mt-8 rounded-xl bg-navi border-2 border-navi focus:border-green-tx focus:outline-none"
              type="email"
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={changeHandler}
              required
            />
            <div className="relative">
              <input
                className="p-2 rounded-xl w-full bg-navi border-2 border-navi focus:border-green-tx focus:outline-none"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={values.password}
                onChange={changeHandler}
                required
              />
            </div>
            <button
              className="bg-background-color text-green-tx py-2 rounded-xl hover:scale-105 duration-300 hover:bg-green-tx hover:text-navi font-medium"
              type="submit"
            >
              Login
            </button>
          </form>
          <div className="mt-10 text-sm border-b border-gray-500 py-5 playfair tooltip">
            Forget password?
          </div>
          <div className="mt-4 text-sm flex justify-between items-center container-mr">
            <p className="mr-3 md:mr-0 text-green-tx">
              If you don't have an account..
            </p>
            <Link to="/register">
              <button className="hover:border register text-green-tx bg-background-color hover:border-gray-400 rounded-xl py-2 px-5 hover:scale-110 hover:bg-green-tx hover:text-navi font-semibold duration-300">
                {" "}
                Register
              </button>
            </Link>
          </div>
        </div>
        {/* Image */}
        <div className="md:block hidden w-1/2">
          <img
            className="rounded-2xl max-h-[1000px]"
            src="/images/log/3449a6ae7feec0d04980f02cd1450a7e.jpg"
            alt="login form image"
          />
        </div>
      </div>
    </section>
  );
}
