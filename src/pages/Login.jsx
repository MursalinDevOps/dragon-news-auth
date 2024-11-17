import { Link } from "react-router-dom";

const Login = () => {
    const handleSubmit = (e) =>{
        e.preventDefault();

        const form = new FormData(e.target);
        const email = form.get("email")
        const password = form.get("password");
        console.log({email, password})
    }
  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div className="card bg-base-100 w-full max-w-xl shrink-0 rounded-none p-10">
        <h2 className="text-3xl font-semibold text-center">
          Login your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered rounded-none"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered rounded-none"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Login</button>
          </div>
        </form>
        <p className="text-center">
          Dont’t Have An Account ?{" "}
          <Link className="text-pink-800" to="/auth/register">
            Register
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
