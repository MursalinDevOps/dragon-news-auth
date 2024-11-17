import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {

    const {createNewUser, setUser} = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        // get form data
        const form = new FormData(e.target);
        const name = form.get("name");
        const email = form.get("email");
        const password = form.get("password");
        const photo = form.get("photo");
        console.log({ name, email, photo, password })
        createNewUser(email, password)
        .then((res)=>{
            const user = res.user;
            setUser(user)
        })
        .catch((err)=>{
            console.log("ERROR", err)
        })
    };
    return (
        <div className="min-h-screen flex justify-center items-center ">
            <div className="card bg-base-100 w-full max-w-xl shrink-0 rounded-none p-10">
                <h2 className="text-3xl font-semibold text-center">
                    Register your account
                </h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="your name"
                            className="input input-bordered rounded-none"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            name="photo"
                            placeholder="photo-url"
                            className="input input-bordered rounded-none"
                            required
                        />
                    </div>

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
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Register</button>
                    </div>
                </form>
                <p className="text-center">
                    Already Have An Account ?{" "}
                    <Link className="text-green-800" to="/auth/login">
                        Login
                    </Link>{" "}
                </p>
            </div>
        </div>
    );
};

export default Register;
