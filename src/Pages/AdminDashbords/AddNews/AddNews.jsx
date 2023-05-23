import React ,{useState} from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { ErrorMessage, Field, Form, Formik } from "formik";
import {
  toastifuyErr,
  toastifuySuccess,
} from "HelperFunctions/Toastify/Toastify";
import { uploadImage } from "Services/Student";
import { FiUploadCloud } from "react-icons/fi";
import { createNews } from './../../../Services/Admin';

const initialValues = {
  title: "",
  image: "",
  text: "",
  category: "",
};

const AddNews = () => {
  const [loading, setLoading] = useState(false);

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
  const submiteHandler =async (values) => {
    console.log("values-addNews", values);
      try {
        setLoading(true)
        const response = await createNews(values);
        // console.log("response", response);
      } catch (error) {
        console.log(error);
      }


  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        // validationSchema={addLesonSchema}
        onSubmit={submiteHandler}
      >
        {(props) => (
          <Form>
            <div className="bg-blue-100 p-5 mt-12 mx-8 rounded-md dark:bg-rose-50/25">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8  ">
                <li className="">
                  <label htmlFor="lessonName" className="text-gray-600">
                    عنوان خبر
                  </label>
                  <Field
                    name="title"
                    label="title"
                    id="title"
                    className=' w-full rounded mt-2 h-10 focus:outline-rose-400  text-gray-500 px-4"'
                  />

                  <div className="my-1 w-full md:w-[80%]">
                    <ErrorMessage
                      render={(msg) => (
                        <div className="text-red-400 text-[0.8rem]">{msg}</div>
                      )}
                      name="title"
                    />
                  </div>
                </li>
                <li className="">
                  <label className="text-gray-600"> دسته بندی</label>
                  <Field
                    name="category"
                    id="category"
                    label="category"
                    className=' w-full rounded mt-2 h-10 focus:outline-rose-400  text-gray-500 px-4"'
                  />

                  <div className="my-1 w-full md:w-[80%]">
                    <ErrorMessage
                      render={(msg) => (
                        <div className="text-red-400 text-[0.8rem]">{msg}</div>
                      )}
                      name="category"
                    />
                  </div>
                </li>

                <li>
                  <label htmlFor="text" className="text-gray-600">
                    متن مقاله
                  </label>
                  <Field
                    type="textarea"
                    id="text"
                    name="text"
                    placeholder=" توضیحات در مورد خبر مورد نظر"
                    className=" w-full rounded min-h-20 mt-2 focus:outline-rose-400   placeholder:text-gray-600 pt-2 px-4"
                  />

                  <div className="my-1 w-full md:w-[80%]">
                    <ErrorMessage
                      render={(msg) => (
                        <div className="text-red-400 text-[0.8rem]">{msg}</div>
                      )}
                      name="text"
                    />
                  </div>
                </li>

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
                      onChange={(e) =>
                        handelUploadImage(e, props.setFieldValue)
                      }
                    />
                    {/* {console.log("nnnn", props.values)} */}
                    {/* {console.log("nnnn", props.errors)} */}
                  </div>
                </div>
              </ul>

              <div className="mt-16 text-center text-white ">
                <button className="bg-teal-600 px-6 py-3 rounded-lg ml-4 ">
                  ساخت خبر جدید
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
    </>
  );
};

export default AddNews;
