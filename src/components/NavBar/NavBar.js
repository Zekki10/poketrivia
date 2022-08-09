import { Rounds } from "../Rounds/Rounds"
import { Score } from "../Score/Score"
import "./NavBar.css"

export const NavBar = (props) => {

    const { mode } = props

    return(
        <div className="nav_container">
            <Score />
            <Rounds mode={mode} />
        </div>
    )
}