export default function Login() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const fromData = new FormData(e.target);
        const data = Object.fromEntries(fromData.entries())
        console.log(data);

    }
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
            <form className="card-body" onSubmit={handleSubmit}>
                <h3 className="text-center font-bold text-xl">Login</h3>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    )
}
