import "./userOrders.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
//import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
    LocationOn,
    Store,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
    Payment,
  } from "@material-ui/icons";

export default function UserOrders() {
//  const [data, setData] = useState(productRows);

const [data, setData] = useState([]);

  useEffect(() =>{
    const fetchProducts = async () => {
      const res = await axios.get("../products")
      setData(res.data);
    };
    fetchProducts();
  }, []);




  const handleDelete = (_id) => {
    setData(data.filter((item) => item._id !== _id));
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
    <div className="userOrders">
    <div className="userOrdersTitleContainer">
      <h2 className="userOrdersTitle">User Orders</h2>
    </div>
    <div className="userOrdersContainer">
      <div className="userOrdersShow">
        <div className="userOrdersShowTop">
          <img
            src="http://www.lmblackberry.com/assets/img/me.png"
            alt=""
            className="userOrdersShowImg"
          />
          <div className="userOrdersShowTopTitle">
            <span className="userOrdersShowUsername">Luis Miguel Mora</span>
            <span className="userOrdersShowUserTitle">Spain</span>
          </div>
        </div>
        <div className="userOrdersShowBottom">
        <span className="userOrdersShowTitle">Your USA Address</span>
        <div className="userOrdersShowInfoAddress">
            <Store className="userOrdersShowIcon" />
            <span className="userOrdersShowInfoTitle">2021 SW 3rd Ave</span>
          </div>
          <div className="userOrdersShowInfoAddress2">
            <span className="userOrdersShowInfoTitle">#1103 Suite: ES-0001</span>
          </div>
          <div className="userOrdersShowInfoCity">
            <span className="userOrdersShowInfoTitle">Miami</span>
            <span className="userOrdersShowInfoTitle">FL</span>
          </div>
          <div className="userOrdersShowInfoZipcode">
            <span className="userOrdersShowInfoTitle">33129</span>
            <span className="userOrdersShowInfoTitle">USA</span>
          </div>
          <span className="userOrdersShowTitle">Account Details</span>
          <div className="userOrdersShowInfo">
            <PermIdentity className="userOrdersShowIcon" />
            <span className="userOrdersShowInfoTitle">luismichismi</span>
          </div>
          <span className="userOrdersShowTitle">Contact Details</span>
          <div className="userOrdersShowInfo">
            <PhoneAndroid className="userOrdersShowIcon" />
            <span className="userOrdersShowInfoTitle">+1 832 270 5400</span>
          </div>
          <div className="userOrdersShowInfo">
            <MailOutline className="userOrdersShowIcon" />
            <span className="userOrdersShowInfoTitle">luismichismi@gmail.com</span>
          </div>
          <div className="userOrdersShowInfoAddress">
            <LocationOn className="userOrdersShowIcon" />
            <span className="userOrdersShowInfoTitle">2021 SW 3rd Ave</span>
          </div>
          <div className="userOrdersShowInfoAddress2">
            <span className="userOrdersShowInfoTitle">Apt. 1103</span>
          </div>
          <div className="userOrdersShowInfoCity">
            <span className="userOrdersShowInfoTitle">Miami</span>
            <span className="userOrdersShowInfoTitle">FL</span>
          </div>
          <div className="userOrdersShowInfoZipcode">
            <span className="userOrdersShowInfoTitle">33129</span>
            <span className="userOrdersShowInfoTitle">USA</span>
          </div>
          <span className="userOrdersShowTitle">Payment Method</span>
          <div className="userOrdersShowInfo">
            <Payment className="userOrdersShowIcon" />
            <span className="userOrdersShowInfoTitle">VISA</span>
            <span className="userOrdersShowInfoTitle">****1983</span>
          </div>
            

        </div>
      </div>
      <div className="userOrdersUpdate">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
      </div>
    </div>
  </div>

  );
}
