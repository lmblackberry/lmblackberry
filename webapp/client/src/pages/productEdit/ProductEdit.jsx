import { Link } from "react-router-dom";
import "./productEdit.css";
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import { Publish } from "@material-ui/icons";

export default function ProductEdit() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Order</h1>

      </div>
      <div className="productTop">
      <div className="productTopLeft">
              <div className="productInfoTop">
                  <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productInfoImg" />
                  <div className="productInfoTitle">
                  <span className="productName">Apple Airpods</span>
                  <div className="productInfoDescription">
                  <span className="productInfoKey">Apple airpods, new set with bluetooth, color white</span>
                  </div>
                  </div>
  </div>
  <div className="productInfoBottom">
              <div className="productInfoBottomLeft">
                  <div className="productInfoItem">
                      <span className="productInfoKey">Id:</span>
                   
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">User ID:</span>
  
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Units:</span>
  
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">SKU:</span>
                      
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Weight:</span>
                      
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Dimentions:</span>
  
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Price:</span>
  
                  </div>
              </div>
              <div className="productInfoBottomRight">
              <div className="productInfoItem">
                      <span className="productInfoValue">1</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoValue">ES-0001</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoValue">1</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoValue">3435455</span>
                  </div>
                  
                  <div className="productInfoItem">
                      <span className="productInfoValue">1.5 Lb</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoValue">12</span>
                      <span className="productInfoValue">X</span>
                      <span className="productInfoValue">12</span>
                      <span className="productInfoValue">X</span>
                      <span className="productInfoValue">12</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoValue">120.00$</span>
                  </div>
                  
                  
                  </div>
                  <div className="productInfoBottomLeft">
                  <div className="productInfoItem">
                  <div className="productInfoItemSubLeft">
                      <span className="productInfoKey">Store:</span>
                    </div>
                    <div className="productInfoItemSubRight">
                      <span className="productInfoValue">Apple Store</span>
                  </div>
                  </div>
                  <div className="productInfoItem">
                  <div className="productInfoItemSubLeft">
                      <span className="productInfoKey">Website URL:</span>
                    </div>
                    <div className="productInfoItem">
                      <span className="productInfoTextarea">http://lmblackberry.com/product/1/</span>
                  </div>
                  </div>
                  <div className="productInfoItem">
                  <div className="productInfoItemSubLeft">
                      <span className="productInfoKey">Product URL:</span>
                    </div>
                    <div className="productInfoItem">
                      <span className="productInfoTextarea">http://lmblackberry.com/product/1/dfdssdf/sfsfsdf/43536547/dfgfvxbd/4564564ter/345345rf/45433/</span>
                  </div>
                      
                  </div>
                  <div className="productInfoItem">
                  <div className="productInfoItemSubLeft">
                      <span className="productInfoKey">Spec.:</span>
                    </div>
                    <div className="productInfoItemSubRight">
                      <span className="productInfoValue">XL</span>
                  </div>
                      
                  </div>
                  <div className="productInfoItem">
                  <div className="productInfoItemSubLeft">
                      <span className="productInfoKey">Invoice:</span>
                    </div>
                    <div className="productInfoItemSubRight">
                      <span className="productInfoValue">8264528</span>
                  </div>
  
                  </div>
                  <div className="productInfoItem">
                  <div className="productInfoItemSubLeft">
                      <span className="productInfoKey">Purchased by:</span>
                    </div>
                    <div className="productInfoItemSubRight">
                      <span className="productInfoValue">Client</span>
                  </div>
                  
  
                  </div>
                  <div className="productInfoItem">
                  <div className="productInfoItemSubLeft">
                      <span className="productInfoKey">Purchased date:</span>
                    </div>
                    <div className="productInfoItemSubRight">
                      <span className="productInfoValue">08/09/2021</span>
                  </div>
                  </div>
              </div>

                  </div>
                  <div className="productInfoNoteKey">
                      <span className="productInfoKey">Notes:</span>
                      <div className="productInfoNoteValue"> 
                      <span className="productInfoKey">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                      </div>
                  </div>

          </div>
          
          <div className="productTopRight">
              
              <h3>Product Status</h3>
              <div className="productInfoItem">
                  <div className="productInfoItemSubLeft">
                      <span className="productInfoKey">Prod. Location:</span>
                    </div>
                    <div className="productInfoItemSubRight">
                      <span className="productInfoValue">In Transit</span>
                  </div>
                  </div> 

              <div className="productInfoStatus">
        
              <div>
            

                  
                  
              <div className="productInfoItem">
                  <div className="productInfoItemSubLeft">
                      <span className="productInfoKey">Purchased date:</span>
                    </div>
                    <div className="productInfoItemSubRight">
                      <span className="productInfoValue">08/09/2021</span>
                  </div>
                  </div>
                  <div className="productInfoItem">
                  <div className="productInfoItemSubLeft">
                      <span className="productInfoKey">Carrier:</span>
                    </div>
                    <div className="productInfoItemSubRight">
                      <span className="productInfoValue">UPS</span>
                  </div>
                  </div>
                  <div className="productInfoItem">
                  <div className="productInfoItemSubLeft">
                      <span className="productInfoKey">Tracking:</span>
                    </div>
                    <div className="productInfoItemSubRight">
                      <span className="productInfoValue">1Z584376587657</span>
                  </div>
                  </div>
                 
                    <div className="productCombined">
                    <h3>Product Process</h3>
                  <div className="productInfoItem">
                  <div className="productInfoItemSubLeft">
                      <span className="productInfoKey">Arrived Date:</span>
                    </div>
                    <div className="productInfoItemSubRight">
                      <span className="productInfoValue">08/11/2021</span>
                  </div>
                  </div>
                  <div className="productInfoItem">
                  <div className="productInfoItemSubLeft">
                      <span className="productInfoKey">Combined Package:</span>
                    </div>
                    <div className="productInfoItemSubRight">
                      <span className="productInfoValue">ES-0001-C-001</span>
                  </div>
                  </div>
                  <br></br>
                  <div className="productInfoItem">
                  <div className="productInfoItemSubLeft">
                      <span className="productInfoKey">Shipped on:</span>
                    </div>
                    <div className="productInfoItemSubRight">
                      <span className="productInfoValue">08/11/2021</span>
                  </div>
                  </div>
                  <div className="productInfoItem">
                  <div className="productInfoItemSubLeft">
                      <span className="productInfoKey">Carrier:</span>
                    </div>
                    <div className="productInfoItemSubRight">
                      <span className="productInfoValue">DHL</span>
                  </div>
                  </div>
                  <div className="productInfoItem">
                  <div className="productInfoItemSubLeft">
                      <span className="productInfoKey">Tracking:</span>
                    </div>
                    <div className="productInfoItemSubRight">
                      <span className="productInfoValue">934758734683</span>
                  </div>
                  </div>
                  <div className="packageInfoImg">
                  <img src="https://www.theupsstore.com/Image%20Library/theupsstore/general-content/gc1/gc1_college-move-in-out.jpg" alt="" className="productInfoImg" />
                  </div>
                  </div>
              </div>
              


              </div>

          </div>
          

      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
              <label>Title</label>
                  <input type="text" placeholder="Apple AirPod" />
                  <label>Description</label>
                  <input type="text" placeholder="Apple airpods, new set with bluetooth, color white" />
                  <label>User ID</label>
                  <input type="text" placeholder="ES-0001" />
                  <label>SKU</label>
                  <input type="text" placeholder="3435455" />
                  <label>Weight</label>
                  <input type="number" placeholder="1.5 Lb" />
                  <label>Dimentions (L x W x H)</label>
                  <div className="productInfoItemEdit">
                  <input type="number" style={{width: "50px"}} placeholder="12" />
                  <label> X </label>
                  <input type="number" style={{width: "50px"}} placeholder="12" />
                  <label> X </label>
                  <input type="number" style={{width: "50px"}} placeholder="12" />
                  </div>
                  <label>Price</label>
                  <input type="number" placeholder="120.00$" />
                  
                  
                  
                  
                  
                  
                  
              </div>

              <div className="productFormCenter">
              <label>Store</label>
                  <input type="text" placeholder="Apple Store" />
                  <label>Store URL</label>
                  <input type="text" placeholder="http://lmblackberry.com/product/1/" />
                  <label>Product URL</label>
                  <input type="text" placeholder="http://lmblackberry.com/product/1/dfdssdf/sfsfsdf/43536547/dfgfvxbd/4564564ter/345345rf/45433/" />

                  
              <label>Size or Specification</label>
              <input type="text" placeholder="XL" />
              <label>Invoice</label>
                  <input type="text" placeholder="8264528" />
                  <label>Purchased by</label>
                  <select name="active" id="active">
                      <option value="client">Client</option>
                      <option value="inHouse">In House</option>
                  </select>
                  <label>Purchased Date</label>
                  <input type="date" placeholder="08/09/2021" />
                 
              </div>
              <div className="productFormRight">
                  
              <label>Product Location</label>
              <select name="inStock" id="idStock">
                      <option value="inTransit">In Transit</option>
                      <option value="warehouse">Warehouse</option>
                      <option value="processing">Procesing</option>
                      <option value="combined">Combined</option>
                      <option value="shipped">Shipped</option>
                  </select>
                  <label>Carrier</label>
                  <input type="text" placeholder="UPS" />
                  <label>Tracking Number</label>
                  <input type="text" placeholder="1Z584376587657" />
                  <label>Product Arrived Date</label>
                  <input type="date" placeholder="08/11/2021" />
                  <label>Combined Package Reference</label>
                  <input type="text" placeholder="ES-0001-C-001" />
 




              <label>Product Picture</label>
                  <div className="productUpload">
                      <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  
                  <button className="productButton">Update</button>
              </div>
              
          </form>

      </div>
      
    </div>
  );
}
