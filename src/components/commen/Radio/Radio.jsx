import React, { useState } from "react";

const Radio = () => {
  const [item, setItem] = useState("");
  return (
    <div className=" md:mr-3.5 lg:mr-0 ">
      <div className="xl:mr-1 ">
        <label
          htmlFor="درگاه پرداخت آنلاین "
          className="md:mr-1 text-[#1e2f38] font-semibold dark:text-white "
        >
          درگاه پرداخت آنلاین
        </label>
        <input
          type="radio"
          className="mr-[0.5rem]"
          checked={item === "درگاه پرداخت آنلاین"}
          value="درگاه پرداخت آنلاین"
          id="درگاه پرداخت آنلاین"
          onChange={(e) => setItem(e.target.value)}
        />
      </div>
      <div className="pt-4">
        <label htmlFor="کیف پول" className="mr-1 text-[#1e2f38] font-semibold dark:text-white">
          کیف پول
        </label>
        <input
          type="radio"
          className="mr-[0.5rem]"
          checked={item === "کیف پول"}
          value="کیف پول"
          id="کیف پول"
          onChange={(e) => setItem(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Radio;
