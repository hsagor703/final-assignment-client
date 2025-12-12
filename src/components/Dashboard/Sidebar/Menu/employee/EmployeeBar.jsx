import React from "react";
import MenuItem from "../MenuItem";
import { RiFileDownloadFill } from "react-icons/ri";
import { GiTeamUpgrade } from "react-icons/gi";
import { RiFolderAddFill } from "react-icons/ri";

const EmployeeBar = () => {
  return (
    <div>
      {/* My Assets, My Team, Request Asset */}
      <MenuItem icon={RiFileDownloadFill} address={"/dashboard/my-asset"} label={"My Assets"} />
      <MenuItem icon={GiTeamUpgrade} address={"/dashboard/my-team"} label={"My Team"} />
      <MenuItem icon={RiFolderAddFill} address={"/dashboard/request-assets"} label={"Request Assets"} />
    </div>
  );
};

export default EmployeeBar;
