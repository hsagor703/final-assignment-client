import React from "react";
import MenuItem from "../MenuItem";
import { FaList } from "react-icons/fa";
import { MdOutlineInstallMobile, MdPersonAddAlt1 } from "react-icons/md";
import { MdAssignmentAdd } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
const HrManagerBar = () => {
  return (
    <div>
      <h1 className="text-[#9435E7] border text-center">HR Manager </h1>
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
        label={"My Employee List"}
      />
      <MenuItem
        icon={MdPersonAddAlt1}
        address={"/dashboard/employee-add"}
        label={"Add Employee"}
      />
    </div>
  );
};

export default HrManagerBar;
