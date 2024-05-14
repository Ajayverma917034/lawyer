import { Fragment } from "react";
import { HtmlTooltip } from "../../common/ToolTip";
import { format24hour } from "../../common/time-formater";

export const TaskCard = ({ item }) => {
  return (
    <div className="border-b border-gray w-full flex items-center p-2 px-4 justify-between">
      <div>
        <HtmlTooltip
          title={
            <Fragment>
              <p className="text-blue text-xl">
                <span className="text-black text-xl font-semibold">
                  Assign To:{" "}
                </span>{" "}
                {item?.assignTo}
              </p>
              <p className="text-blue text-xl">
                <span className="text-black text-xl font-semibold">
                  Assign By:{" "}
                </span>{" "}
                {item?.assignBy}
              </p>
              <p className="text-blue text-xl">
                <span className="text-black text-xl font-semibold">
                  Due Date:{" "}
                </span>{" "}
                {item?.dueDate}
              </p>
              <p className="text-blue text-xl">
                <span className="text-black text-xl font-semibold">
                  Status:{" "}
                </span>{" "}
                {item?.status}
              </p>
            </Fragment>
          }
        >
          <p className="text-[18px] text-black line-clamp-1 cursor-pointer">
            {item?.ID}: {item?.Title}
          </p>
        </HtmlTooltip>
        <span className="text-xl font-semibold text-black">{item?.Type}</span>
      </div>
      <div className="flex justify-center items-center flex-col">
        <p className="text-2xl text-blue font-medium">Open</p>
        <p className="text-[17px] text-red font-medium">Priority: High</p>
      </div>
    </div>
  );
};

export const MeetingCard = ({ item }) => {
  return (
    <div className="border-b border-gray w-full flex items-center py-4 px-4 justify-between ">
      <HtmlTooltip
        title={
          <Fragment>
            <p className="text-blue text-xl">
              <span className="text-black text-xl font-semibold">Time: </span>{" "}
              {format24hour(item?.startTime)}
            </p>
            <p className="text-blue text-xl">
              <span className="text-black text-xl font-semibold">
                Meeting Type:{" "}
              </span>{" "}
              {item?.meetingType}
            </p>
            <p className="text-blue text-xl">
              <span className="text-black text-xl font-semibold">
                Location:{" "}
              </span>{" "}
              {item?.location}
            </p>
          </Fragment>
        }
      >
        <h4 className="text-black text-[18px] cursor-pointer">{item?.title}</h4>
      </HtmlTooltip>
      <p className="text-black text-[17px]">{format24hour(item?.startTime)}</p>
    </div>
  );
};

export const ReminderCard = ({ item }) => {
  return (
    <div className="border-b border-gray w-full flex items-center py-3 px-4 justify-between ">
      <div>
        <HtmlTooltip
          title={
            <Fragment>
              <p className="text-blue text-xl">
                <span className="text-black text-xl font-semibold">
                  Reminder Date:{" "}
                </span>{" "}
                {item?.reminderDate}
              </p>
              <p className="text-blue text-xl">
                <span className="text-black text-xl font-semibold">
                  Reminder Time:{" "}
                </span>{" "}
                {format24hour(item?.reminderTime)}
              </p>
            </Fragment>
          }
        >
          <p className="text-[18px] text-black line-clamp-1 cursor-pointer">
            {item?.title}
          </p>
        </HtmlTooltip>
        <span className="text-xl text-black">{item?.title}</span>
      </div>
      <p className="text-red font-semibold text-[17px] border border-red px-2 rounded-md">
        {format24hour(item?.reminderTime)}
      </p>
    </div>
  );
};
