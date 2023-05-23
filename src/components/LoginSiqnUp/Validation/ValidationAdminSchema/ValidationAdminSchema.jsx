import * as Yup from "yup";

export const addCourseSchema = Yup.object().shape({
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

// const fullNameRegExp =
//   "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$";
const fullNameRegExp = "^[آ-یa-zA-Z0-9 ]+$";

const phoneRegExp = "^09(1[0-9]|3[1-9]|2[1-9]|0[1-9])-?[0-9]{3}-?[0-9]{4}";

const nationalIdRegEx = "^[0-9]{10}$";

const password =
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$";

// register
export const employeschema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, "نام کاربری حداقل 3 کاراکتر")
    .matches(
      fullNameRegExp,
      "فقط حروف فارسی، انگلیسی ، اعداد وکاراکتر خاص وارد شود"
    )
    .required("نام کاربری الزامی است"),
  email: Yup.string()
    .email("ایمیل مورد نظر نامعتبر یا موجود میباشد")
    .required("ایمیل الزامی میباشد"),
  // role: Yup.string()
  // .required("  انتخاب یک فیلد الزامی هست "),

  // birthdate:Yup.required("تاریخ تولد الزامی میباشد"),
  password: Yup.string()
    .min(8, "حداقل 8 کاراکتر")
    .matches(password, " پسورد شامل حروف بزرگ و کوچک و اعداد میباشد ")
    .required("رمز عبور الزامی میباشد"),
  phoneNumber: Yup.string()
    .length(11, "تلفن صحیح نمیباشد")
    .matches(phoneRegExp, " شماره ملی صحیح نمیباشد")
    .required("تلفن الزامی میباشد"),
  nationalId: Yup.string()
    .matches(nationalIdRegEx, " شماره ملی صحیح نمیباشد")
    .required("شماره ملی الزامی میباشد "),
  address: Yup.string()
    .min(5, "آدرس باید حداقل 5 کاراکتر باشد")
    .required(" آدرس الزامی میباشد "),
});

// login
export const employeloginschema = Yup.object().shape({
  email: Yup.string()
    .email("ایمیل مورد نظر نامعتبر یا موجود میباشد")
    .required("ایمیل الزامی میباشد"),
  password: Yup.string()
    .min(8, "حداقل 8 کاراکتر")
    .matches(password, " پسورد شامل حروف بزرگ و کوچک و اعداد میباشد ")
    .required("رمز عبور الزامی میباشد"),
});

// edit
export const EditAdminSchema = Yup.object({
  fullName: Yup.string()
    .min(3, "نام کاربری حداقل 3 کاراکتر")
    .matches(
      fullNameRegExp,
      "فقط حروف فارسی، انگلیسی ، اعداد وکاراکتر خاص وارد شود"
    )
    .required("نام کاربری الزامی است"),

  email: Yup.string()
    .email("ادرس ایمیل معتبر نیست")
    .min(5)
    .max(25)
    .required("ایمیل الزامی می باشد"),

  // role: Yup.string().required("   نفش ضروری است"),
  phoneNumber: Yup.string()
    .required("شماره موبایل ضروری است")
    .length(11, "تلفن صحیح نمیباشد")
    .matches(phoneRegExp, " شماره  تلفن صحیح نمیباشد")
    .nullable(),
});


// edit course
export const EditCourseSchema = Yup.object({
  title: Yup.string().required(" عنوان الزامی است"),
  cost: Yup.string().required("هزینه الزامی می باشد"),
  teacher: Yup.string().required("معلم الزامی می باشد"),
  lesson: Yup.string().required("درس الزامی می باشد"),
  startDate: Yup.string().required(" شروع ترم الزامی می باشد"),
  endDate: Yup.string().required("پایان ترم الزامی می باشد"),
  capacity: Yup.string().required("ظرفیت  الزامی می باشد"),
});




// editlessons
export const EditLessonSchema = Yup.object({
  lessonName: Yup.string().required(" نام درس الزامی است"),
  topics: Yup.string().required("موضوع درس الزامی می باشد"),
  category: Yup.string().required("دسته بندی درس  الزامی می باشد"),
  description: Yup.string().required("توضیحات درس  الزامی می باشد"),
});


// editNewd
export const EditNewsSchema = Yup.object({
  title: Yup.string().min(5, "نام کاربری حداقل 5 کاراکتر").required(" نام درس الزامی است"),
  category: Yup.string().required("دسته بندی درس  الزامی می باشد"),
  text: Yup.string().required("توضیحات درس  الزامی می باشد"),
});
