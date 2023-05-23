import { Navigate, useRoutes } from "react-router-dom";

// admin-dashboards
import {
  DashBoardPanel,
  EditDashboardPanel,
  CoursesAd,
  LessonsAd,
  StudentsAd,
  LoginAd,
  RegisterAd,
  AcountAd,
  EmployesAd,
  NewsAd,
  AddCourses,
  AddLessons,
  AddNews,
  AddEmployee,
  AddStudent,
  StudentToCourse,
  ShowCourse,
  EditCourse,
  ShowLessons,
  EditLesson,
  ShowEmploye,
  ShowStudent,
  ShowNews,
  EditNews,
} from "Pages/AdminDashbords";
import LayoutAdmin from "Layout/Admin/LayoutAdmin";
import PrivateRouteAd from "./PrivateRouteAdmin";

const RouterAdmin = () => {
  let element = useRoutes([
    // pages admind dashboard

    {
      path: "/admindashboard",
      element: (
        <PrivateRouteAd>
          <LayoutAdmin />
        </PrivateRouteAd>
      ),

      children: [

        {
          path: "/admindashboard",
          element: <Navigate replace to="/admindashboard/panel" />,
        },
        {
          path: "panel",
          index: true,
          element: <DashBoardPanel />,
        },

        {
          path: "editdashboardpanel",
          element: <EditDashboardPanel />,
        },
        // course
        {
          path: "pages/courses",
          children: [
            { index: true, element: <CoursesAd /> },

            {
              //  admindashboard/pages/courses/showcourse/:shId
              path: "showcourse/:shId",
              element: <ShowCourse />,
            },
            {
              path: "editcourse/:shId",
              element: <EditCourse />,
            },
          ],
        },
        // lessons
        {
          path: "pages/lessons",
          children: [
            { index: true, element: <LessonsAd /> },
            {
              //admindashboard/pages/lessons/showlessons/:shId
              path: "showlesson/:shId",
              element: <ShowLessons />,
            },
            {
              //admindashboard/pages/lessons/editlesson/:shId
              path: "editlesson/:shId",
              element: <EditLesson />,
            },
          ],
        },

        // employs
        {
          path: "pages/employes",
          children: [
            { index: true, element: <EmployesAd /> },
            {
              path: "showemploye/:shId",
              element: <ShowEmploye />,
            },
          ],
        },

        // student
        {
          path: "pages/students",
          children: [
            { index: true, element: <StudentsAd /> },
            {
              path: "showstudent/:shId",
              element: <ShowStudent />,
            },
          ],
        },
        // shownews

        {
          path: "pages/news",
          children: [
            { index: true, element: <NewsAd /> },
            {
              path: "shownews/:shId",
              element: <ShowNews />,
            },
            {
              path: "editnews/:shId",
              element: <EditNews />,
            },
          ],
        },

        // addData
        {
          path: "adddata/courses",
          element: <AddCourses />,
        },
        {
          path: "adddata/lessons",
          element: <AddLessons />,
        },
        {
          path: "adddata/news",
          element: <AddNews />,
        },
        {
          path: "adddata/employees",
          element: <AddEmployee />,
        },
        {
          path: "adddata/students",
          element: <AddStudent />,
        },
        {
          path: "adddata/studenttocourse",
          element: <StudentToCourse />,
        },

        {
          path: "acount",
          element: <AcountAd />,
        },

        // {/* admin-auth dashboard */}
      ],
    },

    {
      path: "admindashboard/login",
      element: <LoginAd />,
    },

    {
      path: "admindashboard/Register",
      element: <RegisterAd />,
    },
  ]);

  return element;
};

export default RouterAdmin;
