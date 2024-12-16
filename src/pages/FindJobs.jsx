import axios from "axios"
import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

export default function FindJobs() {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5001/api/jobs', {
            withCredentials: true
        })
            .then(res => setJobs(res.data))
    }, [])

    return (
        <div className="container mx-auto grid grid-cols-3 gap-7">
            {
                jobs.map(job => <div key={job._id} className="card bg-base-200">
                    <div className="card-body">
                        <h2 className="card-title">{job.title}</h2>
                        <p className="text-gray-600">{job.description}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Apply Now</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}
