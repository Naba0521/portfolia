export const Button = (props) => {
  return (
    <div className="px-[24px] py-[8px] rounded-[16px] bg-[#E5E7EB] dark:bg-[#4B5563] text-[#4B5563] dark:text-[#F9FAFB] transition-colors duration-300 ease-in-out hover:bg-[#D1D5DB] dark:hover:bg-[#374151] hover:text-[#1F2937] dark:hover:text-[#E5E7EB]">
      {props.value}
    </div>
  );
};
