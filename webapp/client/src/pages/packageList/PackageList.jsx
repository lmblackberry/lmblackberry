import "./packageList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { packageRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function PackageList() {
  const [data, setData] = useState(packageRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "total_units", headerName: "Total Units", width: 120 },
    {
      field: "package",
      headerName: "package",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="packageListItem">
             <Link to={"/package/" + params.row.id} className="packageListLink">
            <img className="packageListImg" src={params.row.img} alt="" />
            {params.row.name}
            </Link>
          </div>
        );
      },
    },
    
    { field: "user_id", headerName: "User ID", width: 120 },
    { field: "out_tracking", headerName: "Tracking", width: 120 },
    { field: "out_carrier", headerName: "Carrier", width: 120 },
    { field: "shipped_date", headerName: "Shipped Date", width: 120 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "total_price",
      headerName: "Total Price",
      width: 160,
    },
    {
        field: "shipping_cost",
        headerName: "Shipping Cost",
        width: 160,
      },
      {
        field: "shipping_insurance",
        headerName: "Shipping Insurance",
        width: 160,
      },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/package/" + params.row.id}>
              <button className="packageListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="packageListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="packageList">
      <div className="packageTitleContainer">
      <h2 className="userTitle">Packages</h2>
              <Link to="/newpackage">
          <button className="packageAddButton">Create</button>
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
