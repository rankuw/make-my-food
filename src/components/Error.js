import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError()
    console.log(useRouteError())
    return <h1>Error {error.status + " : " + error.statusText}</h1>
}

export default Error;