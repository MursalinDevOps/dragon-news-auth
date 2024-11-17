import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {

    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState({});
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        // get form data
        const form = new FormData(e.target);
        const name = form.get("name");
        if (name.length < 3) {
            setError({ ...error, name: "Name must contain 3 or more characters!" });
            return;
        } else (
            setError("")
        )
        const email = form.get("email");
        const password = form.get("password");
        const photo = form.get("photo");
        console.log({ name, email, photo, password })
        createNewUser(email, password)
            .then((res) => {
                const user = res.user;
                setUser(user)
                updateUserProfile({displayName:name, photoURL:photo})
                .then(()=>{
                    navigate('/')
                })
                .catch((err)=>{
                    console.log(err)
                })
            })
            .catch((err) => {
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
                    {
                        error.name && (
                            <label className="label">
                                <span className="label-text text-xs text-red-600">{error.name}</span>
                            </label>
                        )
                    }
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
