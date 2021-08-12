import {
  LocationOn,
  Store,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
  Payment,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.css";
import axios from "axios";
import { useState, useEffect} from "react";

export default function User() {



  return (
    <div className="user">
      <div className="userTitleContainer">
        <h2 className="userTitle">Edit User</h2>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="http://www.lmblackberry.com/assets/img/me.png"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Luis Miguel Mora</span>
              <span className="userShowUserTitle">Spain</span>
            </div>
          </div>
          <div className="userShowBottom">
          <span className="userShowTitle">Your USA Address</span>
          <div className="userShowInfoAddress">
              <Store className="userShowIcon" />
              <span className="userShowInfoTitle">2021 SW 3rd Ave</span>
            </div>
            <div className="userShowInfoAddress2">
              <span className="userShowInfoTitle">#1103 Suite: ES-0001</span>
            </div>
            <div className="userShowInfoCity">
              <span className="userShowInfoTitle">Miami</span>
              <span className="userShowInfoTitle">FL</span>
            </div>
            <div className="userShowInfoZipcode">
              <span className="userShowInfoTitle">33129</span>
              <span className="userShowInfoTitle">USA</span>
            </div>
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">luismichismi</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+1 832 270 5400</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">luismichismi@gmail.com</span>
            </div>
            <div className="userShowInfoAddress">
              <LocationOn className="userShowIcon" />
              <span className="userShowInfoTitle">2021 SW 3rd Ave</span>
            </div>
            <div className="userShowInfoAddress2">
              <span className="userShowInfoTitle">Apt. 1103</span>
            </div>
            <div className="userShowInfoCity">
              <span className="userShowInfoTitle">Miami</span>
              <span className="userShowInfoTitle">FL</span>
            </div>
            <div className="userShowInfoZipcode">
              <span className="userShowInfoTitle">33129</span>
              <span className="userShowInfoTitle">USA</span>
            </div>
            <span className="userShowTitle">Payment Method</span>
            <div className="userShowInfo">
              <Payment className="userShowIcon" />
              <span className="userShowInfoTitle">VISA</span>
              <span className="userShowInfoTitle">****1983</span>
            </div>
              

          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="luismichismi"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Luis Miguel Mora"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="luismichismi@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+1 832 270 5400"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Shipping Address</label>
                <input
                  type="text"
                  placeholder="2021 SW 3rd Ave"
                  className="userUpdateInput"
                />
                  <input
                  type="text"
                  placeholder="Apt. 1103"
                  className="userUpdateInput"
                />
                  <input
                  type="text"
                  placeholder="Miami"
                  className="userUpdateInput"
                />
                  <input
                  type="text"
                  placeholder="FL"
                  className="userUpdateInputState"
                />
                  <input
                  type="text"
                  placeholder="33129"
                  className="userUpdateInput"
                />
                  <input
                  type="text"
                  placeholder="USA"
                  className="userUpdateInputCountry"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>

              <button className="userUpdateButton">Update</button>
             

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
