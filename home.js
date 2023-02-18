import ProjectList from "../ProjectList"
import { projectsFake } from "../../data"
import Header from "../header"


const home = () =>
{
    return (
        `
        ${ Header() }
        <h1> home </h1>
        ${ ProjectList( { projects: projectsFake } ) };
        `

    )
}

export default home