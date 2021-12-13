import "./widgetSm.css"
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState, useEffect } from "react";
import { userRequest } from "../../requestMethods";
import { Link } from "react-router-dom"

export default function WidgetSm() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUsers = async()=>{
            try {
                const res = await userRequest.get("users/?new=true")
                setUsers(res.data)
                console.log(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getUsers()
    }, [])
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
                <ul className="widgetSmList">
                    {users.map(user=>(
                        <li className="widgetSmListItem" key={user._id}>
                            <img
                                src={user.img || "https://hottopic.scene7.com/is/image/HotTopic/14783952_hi?$productMainDesktop$"}
                                alt=""
                                className="widgetSmImg"
                                />
                            <div className="widgetSmUser">
                                <span className="widgetSmUsername">{user.username}</span>
                            </div>
                            <button className="widgetSmButton">
                                <Link style={{color:'white', textDecoration:'none'}} to = {"/user/"+ user._id}>
                                    <VisibilityIcon className="widgetSmIcon" />
                                    Display
                                </Link>
                            </button>
                        </li>
                    ))}
                </ul>
        </div>
    )
}
