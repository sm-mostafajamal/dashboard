import {
  AccountBoxOutlined,
  CircleNotificationsOutlined,
  CreditCardOutlined,
  Dashboard,
  DeliveryDiningOutlined,
  Inventory2Outlined,
  LogoutOutlined,
  MonitorHeartOutlined,
  PeopleAltOutlined,
  SettingsOutlined,
  ShowChart,
} from "@mui/icons-material";
import "./style.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Admin Panel</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Dashboard className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>

          <li>
            <PeopleAltOutlined className="icon" />
            <span>Users</span>
          </li>
          <li>
            <Inventory2Outlined className="icon" />
            <span>Products</span>
          </li>
          <li>
            <CreditCardOutlined className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <DeliveryDiningOutlined className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <ShowChart className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <CircleNotificationsOutlined className="icon" />
            {/* <NotificationsOutlinedIcon /> */}
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>

          <li>
            <MonitorHeartOutlined className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <SettingsOutlined className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountBoxOutlined className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlined className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
