import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../redux/apiCalls'
import { useEffect } from 'react'

export default function Logout() {
    const dispatch = useDispatch()
    let navigate = useNavigate()
    logout(dispatch)
    useEffect(() => {
        navigate('/login')
    }, [navigate])
    return (
        <div>
            
        </div>
    )
}
