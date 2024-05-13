import { format24hour } from "../../common/time-formater";

export const TaskCard = ({ item }) => {
  return (
    <div className="border-b border-gray w-full flex items-center p-2 px-4 justify-between">
      <div>
        <p className="text-[18px] text-black line-clamp-1">
          {item?.ID}: {item?.Title}
        </p>
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
      <h4 className="text-black text-[18px]">{item?.title}</h4>
      <p className="text-black text-[17px]">{format24hour(item?.startTime)}</p>
    </div>
  );
};

export const ReminderCard = ({ item }) => {
  return (
    <div className="border-b border-gray w-full flex items-center py-3 px-4 justify-between ">
      <div>
        <p className="text-[18px] text-black line-clamp-1">{item?.title}</p>
        <span className="text-xl text-black">{item?.title}</span>
      </div>
      <p className="text-red font-semibold text-[17px] border border-red px-2 rounded-md">
        {format24hour(item?.reminderTime)}
      </p>
    </div>
  );
};
