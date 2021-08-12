import "./newProduct.css";
import { Publish } from "@material-ui/icons";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h3 className="addProductTitle">New Order</h3>
      <div className="newProductInfo">
      <form className="productForm">
              <div className="productFormLeft">
              <label>Title</label>
                  <input type="text" placeholder="Title" />
                  <label>Description</label>
                  <input type="text" placeholder="Description" />
                  <label>User ID</label>
                  <input type="text" placeholder="User ID" />
                  <label>SKU</label>
                  <input type="text" placeholder="SKU" />
                  <label>Weight</label>
                  <input type="number" placeholder="Weight" />
                  <label>Dimentions (L x W x H)</label>
                  <div className="productInfoItemEdit">
                  <input type="number" style={{width: "50px"}} placeholder="L" />
                  <label> X </label>
                  <input type="number" style={{width: "50px"}} placeholder="W" />
                  <label> X </label>
                  <input type="number" style={{width: "50px"}} placeholder="H" />
                  </div>
                  <label>Price</label>
                  <input type="number" placeholder="USD" />
                  
                  
                  
                  
                  
                  
                  
              </div>

              <div className="productFormCenter">
              <label>Store</label>
                  <input type="text" placeholder="Store" />
                  <label>Store URL</label>
                  <input type="text" placeholder="http://..." />
                  <label>Product URL</label>
                  <input type="text" placeholder="http://..." />

                  
              <label>Size or Specification</label>
              <input type="text" placeholder="Size" />
              <label>Invoice</label>
                  <input type="text" placeholder="Invoice Number" />
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
                  <input type="text" placeholder="Carrier" />
                  <label>Tracking Number</label>
                  <input type="text" placeholder="Tracking Number" />
                  <label>Product Arrived Date</label>
                  <input type="date" placeholder="08/11/2021" />
                  <label>Combined Package Reference</label>
                  <input type="text" placeholder="Package" />
 




              <label>Product Picture</label>
                  <div className="productUpload">
                      <img src="data:image/png;base64,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" alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  
                  <button className="productButton">Create</button>
              </div>
              
          </form>
       
          </div>
    </div>
  );
}
