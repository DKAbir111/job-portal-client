import axios from "axios";

export default function AddJob() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const newJob = { title, description }

        // save new job to database
        axios.post('http://localhost:5001/api/jobs', {
            ...newJob
        }).then(res => console.log(res.data))

    }
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
            <form className="card-body" onSubmit={handleSubmit}>
                <h3 className="text-center font-bold text-xl">Post a new Job</h3>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <input type="text" name="title" placeholder="Job Title" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Description</span>
                    </label>
                    <textarea name="description" className="textarea textarea-bordered" placeholder="Add job Description"></textarea>

                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}
