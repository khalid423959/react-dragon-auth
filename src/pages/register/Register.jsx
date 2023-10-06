import { Link } from "react-router-dom";
import Navber from "../sheare/Navber/Navber";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Result } from "postcss";

const Register = () => {
    const { createUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, photo, email, password)

        // create User
        createUser(email, password)
            .then(Result => {
                console.log(Result)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div>
            <Navber></Navber>
            <div>
                <h2 className="text-3xl  text-center">Please Register</h2>


                <form onSubmit={handleRegister} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" className="input input-bordered" required name="name" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo" className="input input-bordered" required name="photo" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required name="email" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required name="password" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-center">Allready Have an account <Link className="text-blue-600" to='/login'>Login</Link></p>

            </div>
        </div>
    );
};

export default Register;