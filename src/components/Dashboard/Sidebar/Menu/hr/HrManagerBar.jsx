import React from "react";
import MenuItem from "../MenuItem";
import { FaList } from "react-icons/fa";
import { MdOutlineInstallMobile } from "react-icons/md";
import { MdAssignmentAdd } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
const HrManagerBar = () => {
  return (
    <div>
      <MenuItem
        icon={FaList}
        address={"/dashboard/asset-list"}
        label={"Asset List"}
      />
      <MenuItem
        icon={MdAssignmentAdd}
        address={"/dashboard/add-asset"}
        label={"Add Asset"}
      />
      <MenuItem
        icon={MdOutlineInstallMobile}
        address={"/dashboard/all-request"}
        label={"All Requests"}
      />
      <MenuItem
        icon={FaPeopleGroup}
        address={"/dashboard/employee-list"}
        label={"Employee List"}
      />
    </div>
  );
};

export default HrManagerBar;
