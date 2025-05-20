import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const path = import.meta.env.VITE_BASE_PATH;

const NavBar = () => {

  const getUser = useSelector((state) => state.user);
  console.log("getuser", getUser)
  const handleLogout = async () => {
    try {
      const response = await fetch(`${path}/logout`, {
        method: 'POST',
        credentials: "include"
      })

      if (!response.ok) {
        alert("Logout failed!");
        return;
      }

      window.location.href="/login"
    } catch (error) {
      console.log(error.message)
    }
  }


  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Tinder
        </Link>
      </div>
      {getUser && getUser?.length !== 0 ? (
        <div className="flex flex-row gap-4 items-center">
          <div>{getUser?.data?.name}</div>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              {getUser && getUser?.length !== 0 ? (
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              ) : null}
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                </Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NavBar;
