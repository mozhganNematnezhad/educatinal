import * as Yup from "yup";

const fullNameRegExp = "^[آ-یa-zA-Z0-9 ]+$";
const phoneRegExp = "^09(1[0-9]|3[1-9]|2[1-9]|0[1-9])-?[0-9]{3}-?[0-9]{4}";

const nationalIdRegEx = "^[0-9]{10}$";

// register
export const registerSchema = Yup.object({
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

  password: Yup.string()
    .required("پسورد ضروری است  ")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "شامل 8 کاراکتر ...یک حروف بزرگ و یک حروف کوچک و یک عدد و  یک کاراکتر خاص باشد"
    ),

  phoneNumber: Yup.string()
    .required("شماره موبایل ضروری است")
    .length(11, "تلفن صحیح نمیباشد")
    .matches(phoneRegExp, " شماره  تلفن صحیح نمیباشد")
    .nullable(),

  nationalId: Yup.string()
    .required("کد ملی  الزامی می باشد")
    .matches(nationalIdRegEx, " شماره ملی صحیح نمیباشد"),
});

// login
export const loginSchema = Yup.object({
  email: Yup.string()
    .email("ایمیل مورد نظر نامعتبر یا موجود میباشد")
    .min(5)
    .max(25)
    .required("ایمیل الزامی می باشد"),

  password: Yup.string()
    .required("پسورد ضروری است  ")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "شامل 8 کاراکتر ...یک حروف بزرگ و یک حروف کوچک و یک عدد و  یک کاراکتر خاص باشد"
    ),
});

// forgetpass
export const forgetPassSchema = Yup.object({
  email: Yup.string()
    .email("ایمیل مورد نظر نامعتبر یا موجود میباشد")
    .required("ایمیل الزامی میباشد"),
});

// EditSchema
export const EditSchema = Yup.object({
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

  phoneNumber: Yup.string()
    .required("شماره موبایل ضروری است")
    .length(11, "تلفن صحیح نمیباشد")
    .matches(phoneRegExp, " شماره  تلفن صحیح نمیباشد")
    .nullable(),
});


// admin create  employ
// register
export const createEmploySchema = Yup.object({
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

  password: Yup.string()
    .required("پسورد ضروری است  ")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "شامل 8 کاراکتر ...یک حروف بزرگ و یک حروف کوچک و یک عدد و  یک کاراکتر خاص باشد"
    ),

  phoneNumber: Yup.string()
    .required("شماره موبایل ضروری است")
    .length(11, "تلفن صحیح نمیباشد")
    .matches(phoneRegExp, " شماره  تلفن صحیح نمیباشد")
    .nullable(),

  nationalId: Yup.string()
    .required("کد ملی  الزامی می باشد")
    .matches(nationalIdRegEx, " شماره ملی صحیح نمیباشد"),

   address:
   Yup.string()
    .required("آدرس الزامی است")

});

