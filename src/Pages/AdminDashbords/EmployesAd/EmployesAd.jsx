import React, { useState, useEffect } from "react";
import HeaderPage from "components/AdminDashboard/Commen/HeaderPage/HeaderPage";
import EmployAd from "components/AdminDashboard/EmployAd/EmployAd";
import TitleEmploy from "components/AdminDashboard/EmployAd/TitleEmploy/TitleEmploy";
import { getEmployes } from "./../../../Services/Admin";
import PaginationAdmin from "components/AdminDashboard/PaginationAdmin/PaginationAdmin";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const PAGE_SIZE = 10;

const EmployesAd = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const [employesData, setEmployes] = useState({
    employees: [],
    count: 37,
  });

  // console.log("nnn",lessonData.lesson)
  useEffect(() => {
    const EmployData = async () => {
      try {
        setLoading(true);
        const { data } = await getEmployes(PAGE_SIZE, pageNumber);
        // console.log("response-employs", data);
        // console.log("response-lessons", data.result);
        setEmployes({
          employees: data.result.employees,
          count: data.result.count,
        });
        setLoading(false);
      } catch (error) {}
    };
    EmployData();
  }, [pageNumber]);

  return (
    <div className="p-2 md:p-4 lg:p-8">
      <HeaderPage
        btn={"افزودن کارمندان"}
        title={"کارمندان"}
        link="/admindashboard/adddata/employees"
      />

      <div className="border-dashed border-t-2 w-full my-7 border-teal-700/20"></div>

      <div className="relative overflow-x-auto cssScrolAdmin">
        {!loading ? (
          employesData.employees.length > 0 ? (
            <table className="w-full ">
              <TitleEmploy />

              {employesData.employees.map((employe) => {
                return (
                  <React.Fragment key={employe._id}>
                    <EmployAd employe={employe} setEmployes={setEmployes} />
                  </React.Fragment>
                );
              })}
            </table>
          ) : (
            <>ادمینی وجود ندارد</>
          )
        ) : (
          <>
            {" "}
            <AiOutlineLoading3Quarters />
          </>
        )}
      </div>

      {employesData.employees.length > 0 ? (
        <PaginationAdmin
          count={employesData.count}
          pageSize={PAGE_SIZE}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default EmployesAd;
