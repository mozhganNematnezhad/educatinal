import React from "react";
import EmailPhoneContact from "./EmailPhoneContact/EmailPhoneContact";

import FormContactUs from "./FormContactUs/FormContactUs";

const Contact = () => {
  return (
    <div className="container mx-auto my-8  ">
      <div className="grid lg:grid-cols-12 gap-4">
        <div className="lg:col-span-4 emailPhoneContact">
          <EmailPhoneContact />
        </div>
        <div className="lg:col-span-8 formContactUs">
          <FormContactUs />
        </div>
      </div>
    </div>
  );
};

export default Contact;
