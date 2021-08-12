import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
//import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function UserList() {
//    const [data, setData] = useState(userRows);

  const [data, setData] = useState([]);

  useEffect(() =>{
    const fetchUsers = async () => {
      const res = await axios.get("users/")
      setData(res.data);
    };
    fetchUsers();
  }, []);


  const handleDelete = (_id) => {
    setData(data.filter((item) => item._id !== _id));
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 20 },
    { field: "suite", headerName: "Suite #", width: 120 },
    {
      field: "user",
      headerName: "User",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <Link to={"/users/" + params.row._id} className="userLinkOrders">
            <img className="userListImg" src={params.row.profilePicture} alt="" />
            {params.row.username}
            </Link>
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "premium",
      headerName: "Premium",
      width: 10,
    },
    {
      field: "country",
      headerName: "Country",
      width: 150,
    }, 
    {
      field: "updatedAt",
      headerName: "Latest Transaction",
      width: 150,
    },
    {
      field: "createdAt",
      headerName: "Signed Up",
      width: 150,
    },   
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/users/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (

    <div className="userList">
            <div className="userTitleContainer">
        <h2 className="userTitle">Users</h2>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
        </div>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
