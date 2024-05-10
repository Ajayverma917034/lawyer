export const TaskCard = ({ item }) => {
  console.log(item);
  return (
    <div className="border-b w-full flex items-center p-2 justify-between">
      <div>
        <p className="text-[18px]">
          {item.ID}: {item.Title}
        </p>
        <p className="text-xl font-medium">{item.Type}</p>
      </div>
      <div>
        <p className="text-2xl text-blue font-medium">Open</p>
        <p className="text-[17px] text-red font-medium">Priority: High</p>
      </div>
    </div>
  );
};
