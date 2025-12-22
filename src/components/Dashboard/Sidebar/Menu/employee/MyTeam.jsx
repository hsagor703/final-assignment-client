import { useEffect, useState } from "react";
import useAuth from "../../../../../hooks/useAuth";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import MenuItem from "../MenuItem";
import { GiTeamUpgrade } from "react-icons/gi";
import NoCompanyAffiliation from "../../../../Shared/NoCompanyAffiliation";

const MyTeam = () => {
  const { user } = useAuth();
  const axiosInstance = useAxiosSecure();
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [team, setTeam] = useState([]);
  const [birthdays, setBirthdays] = useState([]);

  useEffect(() => {
    axiosInstance.get(`/employee/companies/${user.email}`).then((res) => {
      setCompanies(res.data);
      setSelectedCompany(res.data[0]);
    });
  }, [user.email]);

  useEffect(() => {
    if (!selectedCompany) return;

    axiosInstance
      .get(`/team/${selectedCompany.HRManagerUid}`)
      .then((res) => setTeam(res.data));

    axiosInstance
      .get(`/team/birthdays/${selectedCompany.HRManagerUid}`)
      .then((res) => setBirthdays(res.data));
  }, [selectedCompany]);

  return (
    <>
      {companies.length === 0 ? (
        <NoCompanyAffiliation />
      ) : (
        <div className="bg-[#18212F] border border-[#9435E7] rounded-xl">
          <MenuItem
            icon={GiTeamUpgrade}
            address={"/dashboard/my-team"}
            label={"My Team"}
          />

          <div className="px-4">
            {/* Company Selector */}
            <select
              className="w-64 border rounded-md px-3 py-2 text-gray-500 border-[#9435E7]"
              onChange={(e) =>
                setSelectedCompany(
                  companies.find((c) => c.HRManagerUid === e.target.value)
                )
              }
            >
              {companies.map((company) => (
                <option key={company.HRManagerUid} value={company.HRManagerUid}>
                  {company.hrCompanyName}
                </option>
              ))}
            </select>

            {/* Team Members */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {team.map((member) => (
                <div
                  key={member._id}
                  className="border rounded-lg p-4 text-center shadow-sm border-[#9435E7]"
                >
                  <img
                    src={member.photoURL}
                    alt=""
                    className="w-20 h-20 rounded-full mx-auto mb-2"
                  />
                  <h3 className="font-semibold text-[#9435E7]">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500">{member.email}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    {member.position || "Employee"}
                  </p>
                </div>
              ))}
            </div>

            {/* Upcoming Birthdays */}
            <div className="my-4">
              <h3 className="text-xl font-semibold mb-3 text-[#9435E7]">
                🎂 Upcoming Birthdays (This Month)
              </h3>

              {birthdays.length === 0 && (
                <p className="text-gray-500">No birthdays this month</p>
              )}

              <ul className="space-y-2">
                {birthdays.map((b) => (
                  <li key={b._id} className="flex items-center gap-3">
                    <img src={b.photoURL} className="w-8 h-8 rounded-full" />
                    <span>{b.name}</span>
                    <span className="text-gray-500 text-sm">
                      {new Date(b.dateOfBirth).toLocaleDateString("en-GB")}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyTeam;
