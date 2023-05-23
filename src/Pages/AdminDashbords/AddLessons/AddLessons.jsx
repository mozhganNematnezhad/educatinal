import React, { useState, useEffect } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { addLesonSchema } from "components/LoginSiqnUp/Validation/ValidationAdminSchema/ValidationAdd";
import { getCategory } from "Services/Public";
import { FiUploadCloud } from "react-icons/fi";
import { uploadImage } from "Services/Student";
import {
  toastifuyErr,
  toastifuySuccess,
} from "HelperFunctions/Toastify/Toastify";
import { createLesson } from "Services/Admin";

const initialValues = {
  lessonName: "",
  topics: [],
  description: "",
  category: 0,
  image:" "
};

const AddLessons = () => {
  // category
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    const fetchAllCategory = async () => {
      try {
        const { data } = await getCategory();
        // console.log("response-category", data);
        setCategory(data.result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllCategory();
  }, []);

  // image
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
        setvalue("image", response.data.result);
        // console.log("first",response.data.result)
        // console.log("first",setvalue)
        
        toastifuySuccess("عکس با موفقیت آپلود شد");

      }
    } catch (error) {
      setLoading(false);
      toastifuyErr("مشکلی در آپلود عکس بوجود آمده");
    }
  };

  const submiteHandler = async (values) => {
    console.log("values-addlessons", values.image);
  const topics=values.topics.toString().split(",")
  //  console.log("99",values.topics.toString().split(","))
  values.topics = topics

    try {
      
      const response = await createLesson(values);
      // console.log("response", response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={addLesonSchema}
      onSubmit={submiteHandler}
    >
      {(props) => (
        <Form>
          <div className="bg-cyan-100 p-5 mt-12 mx-8 rounded-md dark:bg-rose-50/25">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8  ">
              <li>
                <label htmlFor="lessonName" className="text-gray-600">
                  نام درس
                </label>
                <Field
                  name="lessonName"
                  label="lessonName"
                  id="lessonName"
                  className=' w-full rounded mt-2 h-10 focus:outline-rose-400  text-gray-500 px-4"'
                />

                <div className="my-1 w-full md:w-[80%]">
                  <ErrorMessage
                    render={(msg) => (
                      <div className="text-red-400 text-[0.8rem]">{msg}</div>
                    )}
                    name="lessonName"
                  />
                </div>
              </li>

              <li>
                <label className="text-gray-600"> موضوع درس</label>
                <Field
                  name="topics"
                  id="topics"
                  label="topics"
                  className=' w-full rounded mt-2 h-10 focus:outline-rose-400  text-gray-500 px-4"'
                />

                <div className="my-1 w-full md:w-[80%]">
                  <ErrorMessage
                    render={(msg) => (
                      <div className="text-red-400 text-[0.8rem]">{msg}</div>
                    )}
                    name="topics"
                  />
                </div>
              </li>
              {/* category */}
              <li className="  p-5 rounded-lg  text-gray-700">
                <label for="category"> دسته بندی : </label>
                {/* <Field
                  id="category"
                  name="category"
                  className=" w-full rounded min-h-20 mt-2 focus:outline-teal-700  placeholder:text-gray-600 py-2 px-4"
                  type={"number"}
                /> */}

                <select
                  as="select"
                  id="category"
                  name="category"
                  className="InputAdmin
                  w-full rounded min-h-20 mt-2 focus:outline-teal-700  placeholder:text-gray-600 py-2 px-4
                  
                  "
                >
                  {category.length > 0 ? (
                    category.map((ca) => (
                      <option
                        value={ca["id"]}
                        key={ca["id"]}
                        className="cursor-pointer bg-white"
                      >
                        {ca.name}
                        {/* { console.log(th._id)} */}
                      </option>
                    ))
                  ) : (
                    <option value={""} className="  cursor-pointer">
                      دسته بندی وجود ندارد
                    </option>
                  )}
                </select>
              </li>

              <li>
                <label htmlFor="lessonName" className="text-gray-600">
                  توضیحات:{" "}
                </label>
                <Field
                  type="textarea "
                  id="description"
                  name="description"
                  placeholder=" توضیحات در مورد درس مورد نظر"
                  className=" w-full rounded min-h-20 mt-2 focus:outline-rose-400 placeholder:text-gray-600 pt-2 px-4"
                />

                <div className="my-1 w-full md:w-[80%]">
                  <ErrorMessage
                    render={(msg) => (
                      <div className="text-red-400 text-[0.8rem]">{msg}</div>
                    )}
                    name="description"
                  />
                </div>
              </li>

              {/* image */}
              <div>
                <div className="py-2 lg:py-4 flex flex-col px-4 md:flex md:items-center md:flex-row md:pr-0">
                  <label
                    htmlFor="image"
                    className=" w-[70%]  bg-[#0eb582]  cursor-pointer text-center justify-center flex rounded mt-2 h-10 px-3 py-2 gap-2"
                  >
                    <FiUploadCloud className="text-white " />{" "}
                    <p className="text-white">انتخاب عکس</p>{" "}
                  </label>
                  <Field
                    type={"file"}
                    id="image"
                    name="image"
                    className="hidden"
                    onChange={(e) => handelUploadImage(e, props.setFieldValue)}
                  />
                  {/* {console.log("nnnn", props.values)} */}
                  {/* {console.log("nnnn", props.errors)} */}
                </div>
              </div>
            </ul>

            {console.log("add-values", props.values)}
            {console.log("add-errors", props.errors)}

            <div className="mt-16 text-center text-white ">
              <button
                type="submit"
                className="bg-teal-600 px-6 py-3 rounded-lg ml-4 "
              >
                ساخت درس جدید
              </button>
              <button className="bg-red-500 px-6 py-3 rounded-lg">
                {" "}
                انصراف ازساخت
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddLessons;
