import "./user.css"
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import LocationSearchingIcon from '@mui/icons-material/LocationSearching'
import PublishIcon from '@mui/icons-material/Publish'
import { Link, useLocation } from "react-router-dom"
import TopBar from "../../componets/topbar/TopBar"
import SideBar from "../../componets/sidebar/SideBar"
import {useSelector} from "react-redux"

export default function User() {
    const location = useLocation()
    const userId = location.pathname.split('/')[2]

    const user = useSelector(state => 
        state.user.users.find((user1) => user1._id === userId))


    console.log(user)    
    return (
        <div>
            <TopBar/>
            <div className="container">
                <SideBar/>
                <div className="user">
                    <div className="userTitleContainer">
                        <h1 className="userTitle">Edit User</h1>
                        <Link to="/newUser">
                            <button className="userAddButton">Create</button>
                        </Link>
                    </div>
                    <div className="userContainer">
                        <div className="userShow">
                            <div className="userShowTop">
                                <img
                                    src={user.img||"https://hottopic.scene7.com/is/image/HotTopic/14783952_hi?$productMainDesktop$"}
                                    alt=""
                                    className="userShowImg"
                                />
                                <div className="userShowTopTitle">
                                    <span className="userShowUsername">{user.username}</span>
                                </div>
                            </div>
                            <div className="userShowBottom">
                                <span className="userShowTitle">Account Details</span>
                                <div className="userShowInfo">
                                    <PermIdentityIcon className="userShowIcon" />
                                    <span className="userShowInfoTitle">{user.username}</span>
                                </div>
                                <div className="userShowInfo">
                                    <CalendarTodayIcon className="userShowIcon" />
                                    <span className="userShowInfoTitle">1.1.2001</span>
                                </div>
                                <span className="userShowTitle">Contact Details</span>
                                <div className="userShowInfo">
                                    <PhoneAndroidIcon className="userShowIcon" />
                                    <span className="userShowInfoTitle">+1 123 456 67</span>
                                </div>
                                <div className="userShowInfo">
                                    <MailOutlineIcon className="userShowIcon" />
                                    <span className="userShowInfoTitle">{user.email}</span>
                                </div>
                                <div className="userShowInfo">
                                    <LocationSearchingIcon className="userShowIcon" />
                                    <span className="userShowInfoTitle">Ninh Bình | VN</span>
                                </div>
                            </div>
                        </div>
                        <div className="userUpdate">
                            <span className="userUpdateTitle">Edit</span>
                            <form className="userUpdateForm">
                                <div className="userUpdateLeft">
                                    <div className="userUpdateItem">
                                        <label>Username</label>
                                        <input
                                            type="text"
                                            placeholder={user.username}
                                            className="userUpdateInput"
                                        />
                                    </div>
                                    <div className="userUpdateItem">
                                        <label>Email</label>
                                        <input
                                            type="text"
                                            placeholder={user.email}
                                            className="userUpdateInput"
                                        />
                                    </div>
                                    <div className="userUpdateItem">
                                        <label>Phone</label>
                                        <input
                                            type="text"
                                            placeholder="+1 123 456 67"
                                            className="userUpdateInput"
                                        />
                                    </div>
                                    <div className="userUpdateItem">
                                        <label>Address</label>
                                        <input
                                            type="text"
                                            placeholder="Ninh Bình | VN"
                                            className="userUpdateInput"
                                        />
                                    </div>
                                </div>
                                <div className="userUpdateRight">
                                    <div className="userUpdateUpload">
                                        <img
                                            className="userUpdateImg"
                                            src={user.img||"https://hottopic.scene7.com/is/image/HotTopic/14783952_hi?$productMainDesktop$"}
                                            alt=""
                                        />
                                        <label htmlFor="file">
                                            <PublishIcon className="userUpdateIcon" />
                                        </label>
                                        <input type="file" id="file" style={{ display: "none" }} />
                                    </div>
                                    <button className="userUpdateButton">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
