import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  LocalShipping,
  Home,
  BarChart,
  DynamicFeed,
  AddCircle,
  WorkOutline,
  Report,
  Queue,
  PersonAdd,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Home className="sidebarIcon" />
                Orders
              </li>
            </Link>
            <Link to="/packages" className="link">
            <li className="sidebarListItem">
              <LocalShipping className="sidebarIcon" />
              Packages
            </li>
            </Link>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Add</h3>
          <ul className="sidebarList">
          <Link to="/newUser" className="link">
            <li className="sidebarListItem">
              <PersonAdd className="sidebarIcon" />
              New User
            </li>
            </Link>
            <Link to="/newProduct" className="link">
            <li className="sidebarListItem">
              <AddCircle className="sidebarIcon" />
              New Order
            </li>
            </Link>
            <Link to="/newPackage" className="link">
            <li className="sidebarListItem">
              <Queue className="sidebarIcon" />
              New Package
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
