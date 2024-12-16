import { useContext } from "react"
import AuthContext from "../Context/AuthContext"
import { Navigate } from "react-router-dom"
import PropTypes from "prop-types"

export default function PrivateRoute({ children }) {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <div className="flex items-center justify-center min-h-screen">
            <span className="loading loading-spinner text-primary"></span>
        </div>
    }
    if (user) {
        return children
    }
    return (
        <Navigate to={'/login'}></Navigate>
    )
}

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
}