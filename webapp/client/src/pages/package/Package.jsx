import { Link } from "react-router-dom";
import "./package.css";
import Chart from "../../components/chart/Chart"
import { Publish } from "@material-ui/icons";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows_filter} from "../../dummyData";
import { useState } from "react";



export default function Package() {
    const [data, setData] = useState(productRows_filter);

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
    <div className="package">
      <div className="packageTitleContainer">
        <h1 className="packageTitle">Package</h1>

      </div>
      <div className="packageTop">
      <div className="packageTopLeft">
              <div className="packageInfoTop">
                  <img src="https://www.theupsstore.com/Image%20Library/theupsstore/general-content/gc1/gc1_college-move-in-out.jpg" alt="" className="productInfoImg" alt="" className="packageInfoImg" />
                  <div className="packageInfoTitle">
                  <span className="packageName">Airpods, Case, Cables</span>
                  <div className="packageInfoDescription">
                  <span className="packageInfoKey">Apple airpods, new set with bluetooth, color white</span>
                  </div>
                  </div>
  </div>
  <div className="packageInfoBottom">
              <div className="packageInfoBottomLeft">
                  <div className="packageInfoItem">
                      <span className="packageInfoKey">Package ID:</span>
                   
                  </div>
                  <div className="packageInfoItem">
                      <span className="packageInfoKey">User ID:</span>
  
                  </div>
                  <div className="packageInfoItem">
                      <span className="packageInfoKey">Items:</span>
  
                  </div>
                  
                  <div className="packageInfoItem">
                      <span className="packageInfoKey">Weight:</span>
                      
                  </div>
                  <div className="packageInfoItem">
                      <span className="packageInfoKey">Dimentions:</span>
  
                  </div>
                  <div className="packageInfoItem">
                      <span className="packageInfoKey">Price:</span>
  
                  </div>
              </div>
              <div className="packageInfoBottomRight">
              <div className="packageInfoItem">
                      <span className="packageInfoValue">1</span>
                  </div>
                  <div className="packageInfoItem">
                      <span className="packageInfoValue">ES-0001</span>
                  </div>
                  <div className="packageInfoItem">
                      <span className="packageInfoValue">3</span>
                  </div>
               
                  
                  <div className="packageInfoItem">
                      <span className="packageInfoValue">1.5 Lb</span>
                  </div>
                  <div className="packageInfoItem">
                      <span className="packageInfoValue">12</span>
                      <span className="packageInfoValue">X</span>
                      <span className="packageInfoValue">12</span>
                      <span className="packageInfoValue">X</span>
                      <span className="packageInfoValue">12</span>
                  </div>
                  <div className="packageInfoItem">
                      <span className="packageInfoValue">120.00$</span>
                  </div>
                  
                  
                  </div>
                  <div className="packageInfoBottomLeft">
                  <div className="packageInfoItem">
                  <div className="packageInfoItemSubLeft">
                      <span className="packageInfoKey">Packaging Cost:</span>
                    </div>
                    <div className="packageInfoItemSubRight">
                      <span className="packageInfoValue">10$</span>
                  </div>
                  </div>
                  <div className="packageInfoItem">
                  <div className="packageInfoItemSubLeft">
                      <span className="packageInfoKey">Shipping Cost:</span>
                    </div>
                    <div className="packageInfoItem">
                      <span className="packageInfoValue">46.43$</span>
                  </div>
                  </div>
                  <div className="packageInfoItem">
                  <div className="packageInfoItemSubLeft">
                      <span className="packageInfoKey">Insurance:</span>
                    </div>
                    <div className="packageInfoItem">
                      <span className="packageInfoValue">100$</span>
                  </div>
                      
                  </div>
                  <div className="packageInfoItem">
                  <div className="packageInfoItemSubLeft">
                      <span className="packageInfoKey">Payment Status:</span>
                    </div>
                    <div className="packageInfoItemSubRight">
                      <span className="packageInfoValue">Paid</span>
                  </div>
                      
                  </div>
                  <div className="packageInfoItem">
                  <div className="packageInfoItemSubLeft">
                      <span className="packageInfoKey">Invoice:</span>
                    </div>
                    <div className="packageInfoItemSubRight">
                      <span className="packageInfoValue">8264528</span>
                  </div>
  
                
                  
  
                  </div>
                  <div className="packageInfoItem">
                  <div className="packageInfoItemSubLeft">
                      <span className="packageInfoKey">Payment Date:</span>
                    </div>
                    <div className="packageInfoItemSubRight">
                      <span className="packageInfoValue">08/09/2021</span>
                  </div>
                  </div>
              </div>

                  </div>
                  <div className="packageInfoNoteKey">
                      <span className="packageInfoKey">Notes:</span>
                      <div className="packageInfoNoteValue"> 
                      <span className="packageInfoKey">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                      </div>
                  </div>

          </div>
          
          <div className="packageTopRight">
              
              <h3>Package Status</h3>
              <div className="packageInfoItem">
                  <div className="packageInfoItemSubLeft">
                      <span className="packageInfoKey">Prod. Location:</span>
                    </div>
                    <div className="packageInfoItemSubRight">
                      <span className="packageInfoValue">Shipped </span>
                  </div>
                  </div> 

              <div className="packageInfoStatus">
        
              <div>
            

                  
                  
              <div className="packageInfoItem">
                  <div className="packageInfoItemSubLeft">
                      <span className="packageInfoKey">Shipped date:</span>
                    </div>
                    <div className="packageInfoItemSubRight">
                      <span className="packageInfoValue">08/09/2021</span>
                  </div>
                  </div>
                  <div className="packageInfoItem">
                  <div className="packageInfoItemSubLeft">
                      <span className="packageInfoKey">Carrier:</span>
                    </div>
                    <div className="packageInfoItemSubRight">
                      <span className="packageInfoValue">UPS</span>
                  </div>
                  </div>
                  <div className="packageInfoItem">
                  <div className="packageInfoItemSubLeft">
                      <span className="packageInfoKey">Tracking:</span>
                    </div>
                    <div className="packageInfoItemSubRight">
                      <span className="packageInfoValue">1Z584376587657</span>
                  </div>
                  </div>
                 
                    <div className="packageCombined">
                    <h3>Forwarding</h3>
                  <div className="packageInfoItem">
                  <div className="packageInfoItemSubLeft">
                      <span className="packageInfoKey">Address:</span>
                    </div>
                    <div className="packageInfoItemSubRight">
                      <span className="packageInfoValue">Andreu Perpinya, 5</span>
                  </div>
                  </div>
                  <div className="packageInfoItem">
                  <div className="packageInfoItemSubLeft">
                      <span className="packageInfoKey">Address 2:</span>
                    </div>
                    <div className="packageInfoItemSubRight">
                      <span className="packageInfoValue">4 - 2</span>
                  </div>
                  </div>
           
                  <div className="packageInfoItem">
                  <div className="packageInfoItemSubLeft">
                      <span className="packageInfoKey">City:</span>
                    </div>
                    <div className="packageInfoItemSubRight">
                      <span className="packageInfoValue">Elche</span>
                  </div>
                  </div>
                  <div className="packageInfoItem">
                  <div className="packageInfoItemSubLeft">
                      <span className="packageInfoKey">State:</span>
                    </div>
                    <div className="packageInfoItemSubRight">
                      <span className="packageInfoValue">Alicante</span>
                  </div>
                  </div>
                  <div className="packageInfoItem">
                  <div className="packageInfoItemSubLeft">
                      <span className="packageInfoKey">Zip Code:</span>
                    </div>
                    <div className="packageInfoItemSubRight">
                      <span className="packageInfoValue">03203</span>
                  </div>
    
                  </div>
                  <div className="packageInfoItem">
                  <div className="packageInfoItemSubLeft">
                      <span className="packageInfoKey">Country:</span>
                    </div>
                    <div className="packageInfoItemSubRight">
                      <span className="packageInfoValue">Spain</span>
                  </div>
                  </div>
                  <div className="packageInfoImg">
                  <img src="https://www.fedex.com/content/dam/fedex/us-united-states/Testing/images/2018/Q2/MVP1_PODS_694x463_EC_Video_op1_Create_Label_776534746.jpg" alt="" className="packageInfoImg" />
                  </div>
                  </div>
              </div>
              


              </div>

          </div>
          

      </div>
      <div className="packageList">
      <div className="packageTitleContainer">
      <h2 className="userTitle">Items</h2>
        
        </div>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={4}
        checkboxSelection
      />
    </div>
 </div>
                  
                  
                  
            
              
               
              
       

     
 
  );
}
