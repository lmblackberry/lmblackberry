import "./newPackage.css";
import { Publish } from "@material-ui/icons";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function NewPackage() {
    const [data, setData] = useState(productRows);

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
    <div className="newPackage">
        <div className="packageTitleContainer">
      <h3 className="addPackageTitle">New Package</h3>
      <button className="packageButton">Create</button>
      </div>
      <div className="newPackageInfo">
      <form className="packageForm">
              <div className="packageFormLeft">
              <label>Title</label>
                  <input type="text" placeholder="Title" />
                  <label>Description</label>
                  <input type="text" placeholder="Description" />
                  <label>User ID</label>
                  <input type="text" placeholder="User ID" />
                  <label>Total Items</label>
                  <input type="text" placeholder="Total Items" />
                  <label>Weight</label>
                  <input type="number" placeholder="Weight" />
                  <label>Dimentions (L x W x H)</label>
                  <div className="packageInfoItemEdit">
                  <input type="number" style={{width: "50px"}} placeholder="L" />
                  <label> X </label>
                  <input type="number" style={{width: "50px"}} placeholder="W" />
                  <label> X </label>
                  <input type="number" style={{width: "50px"}} placeholder="H" />
                  </div>
                  <label>Total Price</label>
                  <input type="number" placeholder="USD" />
                  
                  
                  
                  
                  
                  
                  
              </div>

              <div className="packageFormCenter">
              <label>Packing Cost</label>
                  <input type="text" placeholder="USD" />
                  <label>Shipping Cost</label>
                  <input type="text" placeholder="USD" />
                  <label>Packing Insurance</label>
                  <input type="text" placeholder="USD" />

                  
              <label>Payment Status</label>
              <select name="active" id="active">
                      <option value="Paid">Paid</option>
                      <option value="unPaid">Unpaid</option>
                  </select>
              <label>Invoice</label>
                  <input type="text" placeholder="Invoice Number" />
                  <label>Payment Date</label>
                  <input type="date" placeholder="08/09/2021" />
                 
              </div>
              <div className="packageFormRight">
                  
              <label>Package Location</label>
              <select name="inStock" id="idStock">
                      
                      <option value="warehouse">Warehouse</option>
                      <option value="shipped">Shipped</option>
                  </select>
                  <label>Carrier</label>
                  <input type="text" placeholder="Carrier" />
                  <label>Tracking Number</label>
                  <input type="text" placeholder="Tracking Number" />
                  <label>Package Shipped Date</label>
                  <input type="date" placeholder="08/11/2021" />
                  <label>Address</label>
                  <input type="text" placeholder="Address" />
                  <label>Address 2</label>
                  <input type="text" placeholder="Address 2" />
                  <label>City</label>
                  <input type="text" placeholder="City" />
                  <label>State</label>
                  <input type="text" placeholder="Province" />
                  <label>Zip Code</label>
                  <input type="text" placeholder="00000" />
                  <label>Country</label>
                  <input type="text" placeholder="Country" />
                




              <label>Package Picture</label>
                  <div className="packageUpload">
                      <img src="data:image/png;base64,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" alt="" className="packageUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  
                
              </div>
              
          </form>
       
          </div>
          <div className="packageList">
     <DataGrid
       rows={data}
       disableSelectionOnClick
       columns={columns}
       pageSize={8}
       checkboxSelection
     />
     </div>
    </div>

    
  );
}
