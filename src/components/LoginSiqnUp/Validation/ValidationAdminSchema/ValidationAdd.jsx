import * as Yup from "yup";


export const addCourseSchema = Yup.object({
    title: Yup.string("نام دوره باید رشته باشد")
      .min(5, "نام دوره حداقل 5 کاراکتر")
      .required("نام دوره الزامیست"),
    cost: Yup.number()
      .typeError("قیمت باید عدد باشد")
      .min(0, "قیمت نمیتواند منفی باشد")
      .required("قیمت الزامیست"),
    teacher: Yup.string().required("استاد را انتخاب کنید"),
    lesson: Yup.string().required("درس را انتخاب کنید"),
    capacity: Yup.number()
      .typeError("ظرفیت باید عدد باشد")
      .min(0, "ظرفیت نمیتواند منفی باشد")
      .required("قیمت الزامیست"),
  });


export const addLesonSchema = Yup.object({
  lessonName: Yup.string("نام درس باید رشته باشد")
      .required("نام درس الزامیست"),
      topics: Yup.string()
      .required("عنوان  درس الزامیست"),
      category: Yup.number().required("دسته بندی درس  الزامی می باشد"),
      description: Yup.string().required("توضیحات درس  الزامی می باشد"),
  });


