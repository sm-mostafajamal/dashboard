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
          <li>
            <Dashboard />
            <span>Dashboard</span>
          </li>
          <li>
            <PeopleAltOutlined />
            <span>Users</span>
          </li>
          <li>
            <Inventory2Outlined />
            <span>Products</span>
          </li>
          <li>
            <CreditCardOutlined />
            <span>Orders</span>
          </li>
          <li>
            <DeliveryDiningOutlined />
            <span>Delivery</span>
          </li>
          <li>
            <ShowChart />
            <span>Stats</span>
          </li>
          <li>
            <CircleNotificationsOutlined />
            {/* <NotificationsOutlinedIcon /> */}
            <span>Notifications</span>
          </li>
          <li>
            <MonitorHeartOutlined />
            <span>System Health</span>
          </li>
          <li>
            <SettingsOutlined />
            <span>Settings</span>
          </li>
          <li>
            <AccountBoxOutlined />
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlined />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">color</div>
    </div>
  );
};

export default Sidebar;
