import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h2 className="newUserTitle">New User</h2>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Repit Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Street" />
        </div>
        <div className="newUserItem">
          <label>Address 2</label>
          <input type="text" placeholder="Apartment" />
        </div>
        <div className="newUserItem">
          <label>City</label>
          <input type="text" placeholder="Town" />
        </div>
        <div className="newUserItem">
          <label>State</label>
          <input type="text" placeholder="Province" />
        </div>
        <div className="newUserItem">
          <label>Zip Code</label>
          <input type="text" placeholder="00000" />
        </div>
        
        <div className="newUserItem">
          <label>Country</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="spain">Spain</option>
            <option value="portugal">Portugal</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
