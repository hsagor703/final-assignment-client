// import { p } from "react-router-dom";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Navbar2 = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

  // user example:
  // user = {
  //   isLoggedIn: true,
  //   role: "employee" || "hr",
  //   photoURL: "https://i.pravatar.cc/40"
  // }

  return (
    <nav className="bg-[#18212F] shadow-md  py-4 ">
      <div className="container mx-auto">
        <div>
          {/* Logo */}
          <p to="/" className="text-2xl font-bold text-[#9435E7]">
            AssetVerse
          </p>
        </div>

        {/* Public ps (ONLY when not logged in) */}
        {!user?.isLoggedIn && (
          <div className="flex items-center gap-6 text-gray-100 font-medium">
            <p to="/">Home</p>
            <p to="/join-employee">Join as Employee</p>
            <p to="/join-hr">Join as HR Manager</p>
          </div>
        )}

        {/* Authenticated User */}
        {user?.isLoggedIn && (
          <div className="relative">
            {/* Profile Image */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2"
            >
              <img
                src={user?.photoURL}
                alt="profile"
                className="w-10 h-10 rounded-full border"
              />
              <ChevronDown size={18} />
            </button>

            {/* Dropdown Menu */}
            {menuOpen && (
              <div className="absolute right-0 mt-2 bg-white shadow-lg border rounded-lg w-48 py-2 z-50">
                {/* Employee Menu */}
                {/* {user.role === "employee" && ( */}
                  <>
                    <p className="dropdown-item" to="/my-assets">
                      My Assets
                    </p>
                    <p className="dropdown-item" to="/my-team">
                      My Team
                    </p>
                    <p className="dropdown-item" to="/request-asset">
                      Request Asset
                    </p>
                    <p className="dropdown-item" to="/profile">
                      Profile
                    </p>
                    <p className="dropdown-item text-red-500" to="/logout">
                      Logout
                    </p>
                  </>
                {/* )} */}

                {/* HR Manager Menu */}
                {/* {user.role === "hr" && ( */}
                  <>
                    <p className="dropdown-item" to="/asset-list">
                      Asset List
                    </p>
                    <p className="dropdown-item" to="/add-asset">
                      Add Asset
                    </p>
                    <p className="dropdown-item" to="/all-requests">
                      All Requests
                    </p>
                    <p className="dropdown-item" to="/employee-list">
                      Employee List
                    </p>
                    <p className="dropdown-item" to="/profile">
                      Profile
                    </p>
                    <p className="dropdown-item text-red-500" to="/logout">
                      Logout
                    </p>
                  </>
                {/* )} */}
              </div>
            )}
          </div>
        )}
      </div>
    </nav>



    //  <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
    //   {/* Logo */}
    //   <h1 className="text-2xl font-bold text-blue-600">AssetVerse</h1>

    //   {/* Public Links */}
    //   <div className="flex items-center gap-6 text-gray-700 font-medium">
    //     <Link to="/">Home</Link>
    //     <Link to="/join-employee">Join as Employee</Link>
    //     <Link to="/join-hr">Join as HR Manager</Link>
    //   </div>

    //   {/* Profile + Dropdown (Static UI) */}
    //   <div className="relative">
    //     <div className="flex items-center gap-2 cursor-pointer">
    //       <img
    //         src="https://i.pravatar.cc/40"
    //         alt="profile"
    //         className="w-10 h-10 rounded-full border"
    //       />
    //     </div>

    //     {/* Static Dropdown */}
    //     <div className="absolute right-0 mt-2 bg-white shadow-lg border rounded-lg w-48 py-2 z-50">
          
    //       <p className="px-4 py-2 text-sm text-gray-500 border-b">
    //         Employee Menu
    //       </p>

    //       <Link className="dropdown-item" to="/my-assets">
    //         My Assets
    //       </Link>
    //       <Link className="dropdown-item" to="/my-team">
    //         My Team
    //       </Link>
    //       <Link className="dropdown-item" to="/request-asset">
    //         Request Asset
    //       </Link>
    //       <Link className="dropdown-item" to="/profile">
    //         Profile
    //       </Link>
    //       <Link className="dropdown-item text-red-500" to="/logout">
    //         Logout
    //       </Link>

    //       <hr className="my-2" />

    //       <p className="px-4 py-2 text-sm text-gray-500 border-b">
    //         HR Manager Menu
    //       </p>

    //       <Link className="dropdown-item" to="/asset-list">
    //         Asset List
    //       </Link>
    //       <Link className="dropdown-item" to="/add-asset">
    //         Add Asset
    //       </Link>
    //       <Link className="dropdown-item" to="/all-requests">
    //         All Requests
    //       </Link>
    //       <Link className="dropdown-item" to="/employee-list">
    //         Employee List
    //       </Link>
    //       <Link className="dropdown-item text-red-500" to="/logout">
    //         Logout
    //       </Link>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Navbar2;
