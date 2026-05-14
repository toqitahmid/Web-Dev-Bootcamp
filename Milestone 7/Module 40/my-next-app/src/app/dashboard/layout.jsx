import Link from "next/link";

const DashBoardlayout = ({ children }) => {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer-1" className="btn drawer-button">
            Open drawer
          </label>
          {children}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-1"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <Link href="/dashboard">DashBoard</Link>
            </li>
            <li>
              <Link href="/dashboard/profile">Profile</Link>
            </li>
            
            <li>
              <Link href="/dashboard/history">History</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashBoardlayout;
