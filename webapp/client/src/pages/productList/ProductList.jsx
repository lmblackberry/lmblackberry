import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
//import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductList() {
//  const [data, setData] = useState(productRows);
const [data, setData] = useState([]);

  useEffect(() =>{
    const fetchProducts = async () => {
      const res = await axios.get("products/")
      setData(res.data);
    };
    fetchProducts();
  }, []);


  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "units", headerName: "Units", width: 120 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
          <Link to={"/product/" + params.row.id} className="productListLink">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
            </Link>
          </div>
                
        );
      },
    },
    
    { field: "from", headerName: "Store", width: 120 },
    { field: "SKU", headerName: "SKU", width: 120 },
    { field: "user_id", headerName: "User ID", width: 120 },
    { field: "invoice", headerName: "Invoice", width: 120 },
    { field: "in_tracking", headerName: "Tracking", width: 120 },
    { field: "in_shipper", headerName: "Shipper", width: 120 },
    { field: "purchased_date", headerName: "Pucharse Date", width: 120 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/productEdit/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <div className="productTitleContainer">
      <h2 className="userTitle">Orders</h2>
              <Link to="/newproduct">
          <button className="productAddButton">Create</button>
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
