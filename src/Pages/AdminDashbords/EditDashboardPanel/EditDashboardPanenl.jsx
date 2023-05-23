import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Field, Form } from "formik";
import { Formik } from "formik";
import { EditDataDashbord } from "components/AdminDashboard/Data/Data";

import InputFeildEdit from "Pages/UserDashboard/EditUserAccount/InputFeildEdit/InputFeildEdit";
import { FiUploadCloud } from "react-icons/fi";
import { ConsumeAuthAdState } from "Context/Admin/AuthAdmin/AuthStateAdmin";
import { EditAdminSchema } from "components/LoginSiqnUp/Validation/ValidationAdminSchema/ValidationAdminSchema";
import { updateAdmin } from "Services/Admin";
import { toastifuyErr, toastifuySuccess } from "HelperFunctions/Toastify/Toastify";
import { uploadImage } from "Services/Student";
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const EditDashboardPanel = () => {
  const navigate = useNavigate();
  const { admin, setAdmin } = ConsumeAuthAdState();
  // console.log("admin-edit", admin);

  const [loading, setLoading] = useState(false);

  // intialvalue
  // برای این هست که ماداریم اطلاعات فیلدها روداخلش میبینم
  // ما اینجا اومدیم  اون فیلدها رو از  کانتکس خوندیم
  // یعنی وقتی برای بار اول فچ میشه
  const initialValues = {
    fullName: admin.fullName,
    // isActive: admin.isActive,
    // role: admin.role,
    email: admin.email,
    nationalId: admin.nationalId,
    phoneNumber: admin.phoneNumber,
    birthDate: admin.birthDate,
    address: admin.address,
  };


  const handelUploadImage = async (e, setvalue) => {
    const files = e.target.files[0];
    const formData = new FormData();
    formData.append("image", files);
    try {
      setLoading(true);
      const response = await uploadImage(formData);
      // console.log("response", response);
      if (response.status === 200) {
        setLoading(false);
        setvalue("profile", response.data.result);
        toastifuySuccess("عکس با موفقیت آپلود شد");
      }
    } catch (error) {
      setLoading(false);
      toastifuyErr("مشکلی در آپلود عکس بوجود آمده");
    }
  };


  const submitHandler = async (values) => {
    // console.log("values" ,values)
    // اینجا رو باید با همون 
    // values
    // بفرستیم این کار اشتباه هست
    // زمانی که ما میخوایم
    // دیتای نهایی روارسال کنیم دیگه با کانتکس کاری نداریم
    // کانتکس برای دیتای فعلی مون هست برای دیتای نهایی از
    // values
    // همین قسمت
    // استفاده میکنیم

    // const editAdmin = {
    //   fullName: values.fullName,
    //   // role: admin.role,
    //   email: values.email,
    //   nationalId: values.nationalId,
    //   phoneNumber: values.phoneNumber,
    //   birthDate: values.birthDate,
    //   address: values.address,
    // };

 
    try {
      // console.log("edittt",values)
      setLoading(true);
      const {data,status} = await updateAdmin(admin._id, values);
      // console.log("response" ,response)
      console.log("response" ,data)
      if (status === 200) {
        toastifuySuccess("اطلاعات کارمند بروز شد");
        // setAdmin(data.result)
        setAdmin((prevState)=>{
          const result={...prevState ,...values}
        // console.log("prevState",prevState)
        // console.log("values",values)
          const convertToJson=JSON.stringify(result)
          localStorage.setItem("admin-data" ,convertToJson)
          return result
          
        })
      // const convertToJson=JSON.stringify(data.result)
      // localStorage.setItem("admin-data" ,convertToJson)
      setLoading(false)
      setTimeout(() => {
        navigate("/admindashboard/panel");
      }, 2000);
        
      }
    } catch (error) {
      toastifuyErr("مشکلی در به روز رسانی بوجود آمده");
      setLoading(false);
    }
  };
  return (
    <div className="Da_Edit   ">
      <div className=" mt-16 mx-8 text-[#2d3339]  border-b-4 border-solid border-[#00ffb1] ">
        <h3 className="text-center pb-4 text-base dark:text-white">
          {" "}
          ویرایش پروفایل ادمین
        </h3>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={EditAdminSchema}
        onSubmit={submitHandler}
      >
        {(props) => (
          <div
            className="Da_edit rounded-lg my-8 mx-8 shadow-xl md:px-[40px]  py-[10px] border border-solid border-[#ecf0f4]
        dark:bg-[rgb(27,52,77)]
          dark:!border dark:!border-solid dark:!border-[rgb(66,63,81)]
        "
          >
            <Form className="">
              <div>
                <div
                  className="py-2 lg:py-4 flex flex-col px-4 md:flex md:items-center md:flex-row md:pr-0 w-[150px] h-[150px]
                m-auto
                "
                >
                  <img src={admin.profile} alt="" className="rounded-[50%]" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 items-center">
                {EditDataDashbord.map((item) => {
                  return (
                    <InputFeildEdit
                      id={item.id}
                      label={item.label}
                      key={item.id}
                      name={item.name}
                      type={item.type}
                    />
                  );
                })}
              </div>

              {/* upload image */}
              <div>
                <div className="py-2 w-[400px] lg:py-4 flex flex-col px-4 md:flex md:items-center md:flex-row md:pr-0">
                  <label
                    htmlFor="image"
                    className=" w-[70%]  bg-[#0eb582]  cursor-pointer text-center justify-center flex rounded mt-2 h-10 px-3 py-2 gap-2"
                  >
                    <FiUploadCloud className="text-white " />{" "}
                    <p className="text-white">انتخاب عکس</p>:{" "}
                  </label>
                  <Field
                    type={"file"}
                    id="image"
                    name="image"
                    className="hidden"
                    onChange={(e) =>
                      handelUploadImage(e, props.setFieldValue)
                    }
                  />
                </div>
              </div>

              <div className="flex justify-center mt-8 mb-6">
                  {loading ? (
                    <AiOutlineLoading3Quarters className="text-2xl " />
                  ) : (
                    <button
                      type="submit"
                      className="btn text-[#fff] bg-[#00ffb1] py-[0.5rem] px-4 rounded-lg"
                    >
                      ویرایش تغییرات
                    </button>
                  )}

                  <Link
                    to="/"
                    className="btn text-[#fff] bg-[#ff2929] py-[0.5rem] px-4 rounded-lg mr-4"
                  >
                    انصراف
                  </Link>
                </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default EditDashboardPanel;










