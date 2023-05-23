import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import react from "../../../Assets/images/course/reeact.png";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { RiArrowGoBackFill } from "react-icons/ri";
import { ConsumeAllDataState } from "Context/AllData/AllData";
import { EditNewsSchema } from "components/LoginSiqnUp/Validation/ValidationAdminSchema/ValidationAdminSchema";
import { FiUploadCloud } from "react-icons/fi";
import { uploadImage } from "Services/Student";
import { toastifuyErr, toastifuySuccess } from "HelperFunctions/Toastify/Toastify";
import { updateArticle } from "Services/Public";

const EditNews = () => {
  const { shId } = useParams();
  // console.log("params",params)
  const [loading, setLoading] = useState(false);

  const { data } = ConsumeAllDataState();
  // console.log("lesson", data.article);
  const newsItem = data.article.find((course) => course._id === shId);
  console.log("newsItem", newsItem);

  const initialValues = {
    title: newsItem.title,
    category: newsItem.category,
    text: newsItem.text,
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


  const submitHandler=async(values)=>{
    console.log("values" ,values)
    try {
      const response = await updateArticle(shId, values);
      console.log("response-update-news", response);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="Da_Edit ">
      <div className=" mt-16 mx-8 text-[#2d3339]  border-b-4 border-solid border-[#00ffb1] ">
        <div className="flex  items-center justify-between">
          <div></div>
          <div>
            <h3 className="text-center pb-4 text-base dark:text-white">
              {" "}
              ویرایش خبر
            </h3>
          </div>

          <div>
            <Link to={"/admindashboard/pages/news"}>
              <RiArrowGoBackFill className="text-2xl text-red-500" />
            </Link>
          </div>
        </div>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={EditNewsSchema}
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
              {/* img */}
              <div className="py-2 lg:py-4 flex  px-4 flex-row items-center justify-center gap-8  md:pr-0">
                <div>
                  <img src={react} alt="react" />
                </div>
                <div className="py-2 lg:py-4 flex flex-col px-4 md:flex md:items-center md:flex-row md:pr-0">
                  <label
                    htmlFor="image"
                    className=" bg-[#0eb582]  cursor-pointer text-center justify-center flex rounded mt-2 h-10 px-3 py-2 gap-2"
                  >
                    <FiUploadCloud className="text-white " />{" "}
                    <p className="text-white">انتخاب عکس</p>:{" "}
                  </label>
                  <Field
                    type={"file"}
                    id="image"
                    name="image"
                    className="hidden"
                    // onChange={handelUploadImage}
                    onChange={(e) => handelUploadImage(e, props.setFieldValue)}
                  />
                
                </div>
              </div>

              <div className="grid md:grid-cols-2 items-center">
                {/* title */}
                <div className="py-2 lg:py-4 flex flex-col px-4  md:pr-0">
                  <div className="flex flex-row  items-baseline">
                    <label htmlFor="title" className="dark:text-gray-300">
                      {" "}
                      عنوان خبر :
                    </label>
                    <Field
                      type="text"
                      id="title"
                      name="title"
                      className="Input dark:bg-[rgb(27,49,76)] dark:text-white"
                    />
                  </div>

                  <div className="my-1 w-full md:w-[80%]">
                    <ErrorMessage
                      render={(msg) => (
                        <div className="text-red-400 text-[0.8rem]">{msg}</div>
                      )}
                      name="title"
                    />
                  </div>
                </div>
                {/* category */}
                <div className="py-2 lg:py-4 flex flex-col px-4  md:pr-0">
                  <div className="flex flex-row  items-baseline">
                    <label htmlFor="category" className="dark:text-gray-300">
                      {" "}
                      دسته بندی:
                    </label>
                    <Field
                      type="text"
                      id="category"
                      name="category"
                      className="Input dark:bg-[rgb(27,49,76)] dark:text-white"
                    />
                  </div>

                  <div className="my-1 w-full md:w-[80%]">
                    <ErrorMessage
                      render={(msg) => (
                        <div className="text-red-400 text-[0.8rem]">{msg}</div>
                      )}
                      name="category"
                    />
                  </div>
                </div>
                {/* desc */}
                <div className="py-2 lg:py-4 flex flex-col px-4 md:pr-0">
                  <div className="flex flex-row  items-baseline">
                    <label htmlFor="description" className="dark:text-gray-300">
                      {" "}
                      توضیحات:
                    </label>

                    <Field
                    type="textarea"
                      id="text"
                      name="text"
                      rows="4"
                      cols="50"
                      className=" w-full rounded min-h-20 mt-2 
                      border border-solid border-red-900
                    focus:outline-teal-700  
                    placeholder:text-gray-600 pt-2 px-4"
                      placeholder=" توضیحات در مورد خبر مورد نظر"
                    ></Field>
                  </div>

                  <div className="my-1 w-full md:w-[80%]">
                    <ErrorMessage
                      render={(msg) => (
                        <div className="text-red-400 text-[0.8rem]">{msg}</div>
                      )}
                      name="text"
                    />
                  </div>
                </div>
              </div>

              {/* btn */}
              <div className="flex justify-center mt-8 mb-6">
                <button
                  type="submit"
                  className="btn text-[#fff] bg-[#00ffb1] py-[0.5rem] px-4 rounded-lg"
                >
                  ویرایش تغییرات
                </button>

                <Link
                  to={"/admindashboard/pages/courses"}
                  className="btn text-[#fff] bg-[#ff2929] py-[0.5rem] px-4 rounded-lg mr-4"
                >
                  انصراف از تغییر
                </Link>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default EditNews;
