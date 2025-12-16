import React from "react";
import MenuItem from "../MenuItem";
import { RiFileDownloadFill } from "react-icons/ri";
import { GiTeamUpgrade } from "react-icons/gi";
import { RiFolderAddFill } from "react-icons/ri";

const EmployeeBar = () => {
  return (
    <div>
      <h1 className="text-[#9435E7] border text-center">Employee </h1>
      <MenuItem
        icon={RiFileDownloadFill}
        address={"/dashboard/my-asset"}
        label={"My Assets"}
      />
      <MenuItem
        icon={GiTeamUpgrade}
        address={"/dashboard/my-team"}
        label={"My Team"}
      />
      <MenuItem
        icon={RiFolderAddFill}
        address={"/dashboard/request-assets"}
        label={"Request Assets"}
      />
    </div>
  );
};

export default EmployeeBar;
