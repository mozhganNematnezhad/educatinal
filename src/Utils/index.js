import * as shamsi from "shamsi-date-converter";

// pagination
export const _range  = (end, start = 0) => {
  // console.log("111",end)
  // console.log("222",start)
  // const temp =new Array(end - start).fill().map((_, idx) => start + idx + 1)
  // console.log("temp" ,temp)
 return new Array(end - start).fill().map((_, idx) => start + idx + 1);

};



 export const changeDate = (event) => {
    // console.log(object)
    const setDate = event.target.value
      // get and change date
      const date = shamsi.gregorianToJalali(setDate);
      // console.log("date",date) //[1401, 7, 26]
    
      const finalDate = `${date[0]}/${date[1] < 10 ? `0${date[1]}` : date[1]}/${
        date[2] < 10 ? `0${date[2]}` : date[2]
      }`;
      //  console.log("finalDate",finalDate)  //1401/07/26
      return finalDate
  };
    


  // get date and change miladi to shamsi
export const handelDate = (CDa) => {
  //console.log("bbbbbbb",CDa); //1401-08-09T20:34:16.000
  const splitArray = CDa.split("-");
  //console.log("splitArray",splitArray) // ['1401', '11', '24T20:34:16.000Z']

  const year = splitArray[0];
  const month = splitArray[1];
  const day = splitArray[2].substring(0, 2);
  //console.log(year, month, day);

  const finalDate = `${year}/${month}/${day}`;

  return finalDate;
};


















// *****************************
// *****************************
// *****************************
// *****************************

// end
// اول گزاشتم که وقتی میخوایم بسازیم اگر یه دونه مقدار دادیم بهش نیاز به مقداردوم نداشته باشه از 1 
// شروع کنه

// (end-start)= 5-1=4 //5-0=5
// 4 
// تا برای ما میسازه

// ******
//  idx+1
// الان ما صفر و یک رو نمیخوایم چون 
// pages =0,1
//برای همین ما باید یه دونه زیاد کنیم  
