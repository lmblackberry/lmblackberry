import "./widgetSm.css";
import { DataGrid } from "@material-ui/data-grid";
//import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function WidgetSm() {
//  const [data, setData] = useState(userRows);

  const [data, setData] = useState([]);

  useEffect(() =>{
    const fetchUsers = async () => {
      const res = await axios.get("users/")
      setData(res.data);
    };
    fetchUsers();
  }, []);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    {field: "id",
  headerName: "ID",
width: 20,
},
    {
      field: "user",
      headerName: "User",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <Link to={"/userOrders/" + params.row.id} className="userLinkOrders">
            <img className="userListImg" src={params.row.profilePicture} alt="" />
            {params.row.username}
            </Link>
          </div>
        );
      },
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
    
  ];

  return (

    <div className="widgetSm">
            <div className="widgetSmTitle">
        <h4 className="userTitle">New Users</h4>
        </div>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={4}
        checkboxSelection
        autoHeight={true}
      />
    </div>
  );

}
