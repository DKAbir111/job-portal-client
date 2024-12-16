import { useContext } from "react"
import AuthContext from "../Context/AuthContext"
import { Navigate } from "react-router-dom"
import PropTypes from "prop-types"

export default function PrivateRoute({ children }) {
    const { user } = useContext(AuthContext)
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