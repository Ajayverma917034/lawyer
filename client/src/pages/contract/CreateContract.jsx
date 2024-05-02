import React, { useRef, useState } from "react";
import ProgressBar from "../../components/contract/ProgressBar";
import FormStepper from "../../components/contract/FormStepper";
import LeaveContract from "../../components/contract/contracts-type/LeaveContract";
import ReactToPrint, { useReactToPrint } from "react-to-print";

const CreateContract = () => {
  const [formData, setFormData] = useState({});
  const [progress, setProgress] = useState(0);

  const handleFormDataChange = (data) => {
    setFormData(data);
    // Calculate progress based on filled fields
    const filledFieldsCount = Object.values(data).filter(
      (value) => value.trim() !== ""
    ).length;
    setProgress((filledFieldsCount / getTotalFieldsCount()) * 100);
  };

  const getTotalFieldsCount = () => {
    // Sum of all fields in all steps
    return steps.reduce((total, step) => total + step.fields.length, 0);
  };

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  // Define your steps here
  const steps = [
    {
      title: "Basic Information",
      fields: [
        {
          name: "name",
          label: "Full name of the leave requesting person.",
          type: "text",
        },
        {
          name: "address",
          label:
            "What is the full address of the employee who is requesting leave? (Optional)",
          type: "textarea",
          isRequired: false,
        },
        {
          name: "email",
          label:
            "If Employee will be available to contacted by email, enter the email address of the email.  (Optional)",
          type: "email",
          isRequired: false,
        },
        {
          name: "telephone",
          label:
            "If Employee will be available to contacted by telephone, enter the telephone number.  (Optional)",
          type: "tel",
          isRequired: false,
        },
      ],
    },
    {
      title: "Date",
      fields: [
        {
          name: "date",
          label: "What date will this letter be sent?",
          type: "date",
          isRequired: true,
        },
        {
          name: "employerName",
          label: "Employer's Name",
          type: "text",
          isRequired: true,
        },
        {
          name: "employerAddress",
          label: "Enter the employer 's full business address  (Optional)",
          type: "textarea",
          isRequired: false,
        },
        {
          name: "employerEmail",
          label: "Employer's Email Address (Optional)",
          type: "email",
          isRequired: false,
        },
        {
          name: "employerAttention",
          label: "Attention (Optional)",
          type: "text",
          isRequired: false,
        },
      ],
    },
    {
      title: "",
      fields: [
        {
          name: "startDate",
          label:
            "What is the first day the employee requesting leave will take off work?",
          type: "date",
          isRequired: true,
        },
        {
          name: "endDate",
          label:
            "What is the last day of the employee's planned leave from work?",
          type: "date",
          isRequired: true,
        },
        {
          name: "workingDayLeave",
          label: "What is the total duration of leave (in working days)?",
          type: "number",
          isRequired: true,
        },
        {
          name: "returnDate",
          label: "What is the date the employee will return to work?",
          type: "date",
          isRequired: true,
        },
      ],
    },
    {
      title: "",
      fields: [
        {
          name: "totalLeaveAvailable",
          label:
            "How many days of leave is the employee entitled to take during the year in terms of the company policy?",
          type: "number",
          isRequired: true,
        },
        {
          name: "totalLeaveTaken",
          label:
            "How many days of leave have already been taken by the employee in the said year?",
          type: "number",
          isRequired: true,
        },
      ],
    },
    {
      title: "",
      fields: [
        {
          name: "assignedPerson",
          label:
            "Enter the name of the colleague who will be handling the workload while the employee is on leave.",
          type: "text",
          isRequired: true,
        },
        {
          name: "helpfullMatter",
          label:
            " Please enter any information the employee would like to give the employer about the plan to make sure all work is properly completed during the time off.",
          type: "textarea",
          isRequired: true,
        },
      ],
    },
  ];

  return (
    <div className="w-full bg-white-light min-h-screen px-3 md:px-22 lg:px-28 pt-10 grid grid-cols-7">
      <div className="col-span-3">
        <h2 className="text-3xl font-medium">Letter Requesting Leave</h2>
        <div className="min-h-[35rem] shadow-light-shadow mt-2 p-3 bg-white rounded-md relative">
          <FormStepper
            steps={steps}
            onFormDataChange={handleFormDataChange}
            print={handlePrint}
            progress={progress}
            setProgress={setProgress}
          />
        </div>
      </div>
      <div className="pl-8 col-span-4">
        <div>
          <ProgressBar progress={progress} />
        </div>
        <div
          className="mt-3 min-h-[10rem] bg-white rounded-md p-8 pb-6"
          style={{ maxHeight: "calc(100vh - 4rem)", minHeight: "50rem" }}
          ref={componentRef}
        >
          <LeaveContract data={formData} />
        </div>
      </div>
    </div>
  );
};

export default CreateContract;
