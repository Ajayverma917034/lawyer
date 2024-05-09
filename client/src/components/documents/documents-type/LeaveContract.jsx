import React from "react";

const LeaveContract = ({ data }) => {
  const blankSpace = "____________";
  return (
    <div className="p-4">
      <p
        className={`text-[18px] font-medium ${
          data.name ? "font-poppins" : "font-serif"
        }`}
      >
        {data.name || blankSpace}
      </p>

      <p className={`${data.address && "font-normal text-base"}`}>
        {data.address}
      </p>
      <p className={`${data.email ? "font-normal text-base" : "hidden"}`}>
        Email: {data.email}
      </p>
      <p className={`${data.telephone ? "font-normal text-base" : "hidden"}`}>
        Telephone: {data.telephone}
      </p>

      <p className="mt-6 font-normal text-xl">
        Date:{" "}
        <span className={`text ${data.date ? "font-poppins" : "font-serif"}`}>
          {data.date || blankSpace}
        </span>
      </p>

      <p
        className={`text-[18px] font-medium mt-6 ${
          data.employerName ? "font-poppins" : "font-serif"
        }`}
      >
        {data.employerName || blankSpace}
      </p>

      <p className="font-normal text-xl">
        <span
          className={`text ${
            data.employerAddress ? "font-poppins" : "font-serif"
          }`}
        >
          {data.employerAddress || blankSpace}
        </span>
      </p>
      <p className={`${data.employerEmail ? "text-base" : "hidden"}`}>
        Email: {data.employerEmail}
      </p>
      <p className={`${data.employerAttention ? "text-base" : "hidden"}`}>
        Attention: {data.employerAttention}
      </p>
      <p className="mt-3">
        I hereby submit a request for leave from{" "}
        <span className={`${data.startDate ? "font-poppins" : "font-serif"}`}>
          {data.startDate || blankSpace}{" "}
        </span>{" "}
        till{" "}
        <span className={`${data.endDate ? "font-poppins" : "font-serif"}`}>
          {data.endDate || blankSpace}{" "}
        </span>{" "}
        being a total of
        <span
          className={`${data.workingDayLeave ? "font-poppins" : "font-serif"}`}
        >
          {" "}
          {data.workingDayLeave || blankSpace}{" "}
        </span>{" "}
        working days. I will return to work on{" "}
        <span className={`${data.returnDate ? "font-poppins" : "font-serif"}`}>
          {data.returnDate || blankSpace}{" "}
        </span>{" "}
        . I understand that in accordance with the company policy I have a total
        leave entitlement of{" "}
        <span
          className={`${
            data.totalLeaveAvailable ? "font-poppins" : "font-serif"
          }`}
        >
          {data.totalLeaveAvailable || blankSpace}{" "}
        </span>{" "}
        days in the year and have already taken{" "}
        <span
          className={`${data.totalLeaveTaken ? "font-poppins" : "font-serif"}`}
        >
          {data.totalLeaveTaken || blankSpace}{" "}
        </span>{" "}
        days of leave in this year.{" "}
      </p>
      <p className="mt-3">
        I understand that my request is within the company policy.
      </p>
      <p className="mt-4">
        The existing work assigned to me shall be completed before the
        commencement of my leave. During my absence{" "}
        <span
          className={`${data.assignedPerson ? "font-poppins" : "font-serif"}`}
        >
          {data.assignedPerson || blankSpace}{" "}
        </span>{" "}
        will be handling all the matters currently assigned to me.
      </p>

      <p className="mt-3">
        The following information would be helpful for{" "}
        <span
          className={`${data.assignedPerson ? "font-poppins" : "font-serif"}`}
        >
          {data.assignedPerson || blankSpace}{" "}
        </span>{" "}
        to enable them to handle the matters:{" "}
      </p>
      <p className={`${data.helpfullMatter && "mt-3 mb-2"}`}>
        <span
          className={`${data.helpfullMatter ? "font-poppins" : "font-serif"}`}
        >
          {data.helpfullMatter || blankSpace}{" "}
        </span>{" "}
      </p>
      {data.telephone && data.email && (
        <p className="mt-4">
          I will be available for contact on my contact number being:{" "}
          <span className={`${data.telephone ? "font-poppins" : "font-serif"}`}>
            {data.telephone || blankSpace}{" "}
          </span>{" "}
          and will also be contactable on my email being:{" "}
          <span className={`${data.email ? "font-poppins" : "font-serif"}`}>
            {data.email || blankSpace}{" "}
          </span>{" "}
          .
        </p>
      )}
      {data.telephone && !data.email && (
        <p className="mt-4">
          I will be available for contact on my contact number being:{" "}
          <span className={`${data.telephone ? "font-poppins" : "font-serif"}`}>
            {data.telephone || blankSpace}{" "}
          </span>{" "}
          .
        </p>
      )}
      {!data.telephone && data.email && (
        <p className="mt-4">
          I will be available for contact on my email being:{" "}
          <span className={`${data.email ? "font-poppins" : "font-serif"}`}>
            {data.email || blankSpace}{" "}
          </span>{" "}
          .
        </p>
      )}

      <p className="mt-6">Yours sincerely</p>
      <p className="mt-7">
        <span className={`mt-6 ${data.name ? "font-poppins" : "font-serif"}`}>
          {data.name || blankSpace}{" "}
        </span>{" "}
      </p>
    </div>
  );
};

export default LeaveContract;
