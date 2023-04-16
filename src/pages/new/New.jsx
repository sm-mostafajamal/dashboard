import { DriveFolderUpload } from "@mui/icons-material";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./style.scss";

const New = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-0.png"
              alt=""
            />
          </div>
          <div className="right">
            <form action="">
              <div className="formInput">
                <label htmlFor="file">
                  Upload Image: <DriveFolderUpload className="icon" />
                </label>
                <input
                  type="file"
                  name=""
                  id="file"
                  style={{ display: "none" }}
                />
              </div>
              <div className="formInput">
                <label htmlFor="">Username</label>
                <input type="text" placeholder="username" name="" id="" />
              </div>
              <div className="formInput">
                <label htmlFor="">Name</label>
                <input type="text" placeholder="name" name="" id="" />
              </div>
              <div className="formInput">
                <label htmlFor="">Email</label>
                <input type="email" placeholder="email" name="" id="" />
              </div>
              <div className="formInput">
                <label htmlFor="">Phone</label>
                <input type="text" placeholder="phone" name="" id="" />
              </div>
              <div className="formInput">
                <label htmlFor="">Password</label>
                <input type="password" name="" id="" />
              </div>
              <div className="formInput">
                <label htmlFor="">Address</label>
                <input type="text" placeholder="address" name="" id="" />
              </div>
              <div className="formInput">
                <label htmlFor="">Country</label>
                <input type="text" placeholder="country name" name="" id="" />
              </div>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
