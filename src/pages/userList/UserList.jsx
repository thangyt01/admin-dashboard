import "./userList.css"
import { DataGrid } from '@mui/x-data-grid'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import {Link} from 'react-router-dom'
import { useEffect } from "react"
import TopBar from "../../componets/topbar/TopBar"
import SideBar from "../../componets/sidebar/SideBar"
import {useDispatch, useSelector} from "react-redux"
import { deleteUser, getUsers } from "../../redux/apiCalls"

export default function UserList() {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.user.users)
    
    useEffect(() => {
      getUsers(dispatch)
    }, [dispatch])

    const handleDelete = (id) => {
        deleteUser(id, dispatch)
    };

    const columns = [
        { field: '_id', headerName: 'ID', width: 200 },
        { field: 'user', headerName: 'User', width: 200, renderCell: (params)=>{
            return (
                <div className="userListUser">
                    <img className="userListImg" src={params.row.img||"https://hottopic.scene7.com/is/image/HotTopic/14783952_hi?$productMainDesktop$"} alt="" />
                    {params.row.username}
                </div>
            )
        }},
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'createdAt',
          headerName: 'Created At',
          width: 200,
        },
        {
          field: 'updatedAt',
          headerName: 'Updated At',
          width: 200,
        },
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            return (
              <>
                <Link to={"/user/" + params.row._id}>
                  <button className="userListEdit">Edit</button>
                </Link>
                <DeleteOutlineIcon
                  className="userListDelete"
                  onClick={() => handleDelete(params.row._id)}
                />
              </>
            );
          },
        },
    ];
      

    return (
        <div>
            <TopBar/>
            <div className="container">
                <SideBar/>
                <div className="userList">
                  <DataGrid
                    rows={users}
                    disableSelectionOnClick
                    getRowId={row => row._id}
                    columns={columns}
                    pageSize={10}
                    checkboxSelection
                  />
                </div>
            </div>
        </div>
      
    )
}
