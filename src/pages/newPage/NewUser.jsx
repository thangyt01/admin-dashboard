import SideBar from '../../componets/sidebar/SideBar'
import TopBar from '../../componets/topbar/TopBar'
import './newUser.css'
import { addUser } from "../../redux/apiCalls"
import { useDispatch } from "react-redux"
import { useState } from 'react'

export default function NewUser() {
    const [input, setInput] = useState({})
    const dispatch = useDispatch()
    const handleChange = (e)=>{
        setInput(prev=>{
            return {...prev, [e.target.name]:e.target.value}
        })
    }

    console.log(input)

    const handleClick = (e)=>{
        e.preventDefault()
        addUser(input, dispatch)
    }
    return (
        <div>
            <TopBar/>
            <div className="container">
                <SideBar/>
                <div className='newUser'>
                    <h1 className="newUserTitle">New User</h1>
                    <form className="newUserForm">
                        <div className="newUserItem">
                            <label>Username</label>
                            <input name="username" type="text" placeholder="username" onChange={handleChange}/>
                        </div>
                        <div className="newUserItem">
                            <label>Email</label>
                            <input name="email" type="text" placeholder="example@gmail.com" onChange={handleChange}/>
                        </div>
                        <div className="newUserItem">
                            <label>Password</label>
                            <input name="password" type="text" placeholder="password" onChange={handleChange}/>
                        </div>
                        <div className="newUserItem">
                            <label>Confirm Password</label>
                            <input type="text" placeholder="confirm password"/>
                        </div>
                        <div className="newUserItem">
                            <label>Is Admin</label>
                            <select className="newUserSelect" name="isAdmin" id="isAdmin" onChange={handleChange}>
                                <option value="false">No</option>
                                <option value="true">Yes</option>
                            </select>
                        </div>
                        <button className="newUserButton" onClick={handleClick}>Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
