import React from "react";

const Admission = ({
  admissionInfo,
  setadmissionInfo,
  error,
  handleInputChange,
  handleDateChange,
}) => {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear - i);

  return (
    <div className="w-full mb-[20px] py-[10px] px-[30px]">
      {/* Title */}
      <div className="font-bold text-[#01427a] mt-[25px] mb-[15px]">
        <h1>Admission Information</h1>
      </div>

      {/* Grid container for admission fields */}
      <div
        className="w-full grid grid-cols-2 gap-x-[15px] gap-y-[40px] 
                   min-[1330px]:[grid-template-columns:0.5fr_1fr]"
      >
        {/* Admission Number */}
        <div className="w-full">
          <label
            htmlFor="admissionNumber"
            className="block font-bold text-[#808080] text-[16px] mb-[5px]"
          >
            Admission Number
          </label>
          <input
            type="text"
            name="admissionNumber"
            value={admissionInfo.admissionNumber}
            placeholder="Enter Admission Number"
            onChange={(e) => handleInputChange(e, setadmissionInfo)}
            required
            className="w-full py-[18px] px-[20px] rounded-[5px] border-2 border-[hsl(0,0%,85%)] 
                       text-[#808080] outline-none text-[14px] bg-white placeholder:text-[#0b0a0a33]"
          />
          {error?.admissionNumber && (
            <p className="text-red-500 text-[12px] font-bold mt-1">
              {error.admissionNumber}
            </p>
          )}
        </div>

        {/* Admission Date */}
        <div className="w-full">
          <label
            htmlFor="admissionDate"
            className="block font-bold text-[#808080] text-[16px] mb-[5px]"
          >
            Admission Date
          </label>
          <div className="w-full grid grid-cols-3 gap-[15px]">
            {/* Day */}
            <div className="contents">
              <select
                name="DD"
                value={admissionInfo.admissionDate.DD}
                onChange={handleDateChange}
                required
                className="w-full py-[18px] px-[20px] rounded-[5px] border-2 border-[hsl(0,0%,85%)]
                           text-[#808080] outline-none text-[14px] bg-white placeholder:text-[#0b0a0a33]"
              >
                <option value="">DD</option>
                {days.map((day) => (
                  <option key={day} value={day.toString().padStart(2, "0")}>
                    {day.toString().padStart(2, "0")}
                  </option>
                ))}
              </select>
              {error?.admissionDate?.DD && (
                <p className="text-red-500 text-[12px] font-bold mt-1">
                  {error.admissionDate.DD}
                </p>
              )}
            </div>

            {/* Month */}
            <div className="contents">
              <select
                name="MM"
                value={admissionInfo.admissionDate.MM}
                onChange={handleDateChange}
                required
                className="w-full py-[18px] px-[20px] rounded-[5px] border-2 border-[hsl(0,0%,85%)]
                           text-[#808080] outline-none text-[14px] bg-white placeholder:text-[#0b0a0a33]"
              >
                <option value="">MM</option>
                {months.map((month, index) => (
                  <option
                    key={index}
                    value={(index + 1).toString().padStart(2, "0")}
                  >
                    {month}
                  </option>
                ))}
              </select>
              {error?.admissionDate?.MM && (
                <p className="text-red-500 text-[12px] font-bold mt-1">
                  {error.admissionDate.MM}
                </p>
              )}
            </div>

            {/* Year */}
            <div className="contents">
              <select
                name="YY"
                value={admissionInfo.admissionDate.YY}
                onChange={handleDateChange}
                required
                className="w-full py-[18px] px-[20px] rounded-[5px] border-2 border-[hsl(0,0%,85%)]
                           text-[#808080] outline-none text-[14px] bg-white placeholder:text-[#0b0a0a33]"
              >
                <option value="">YYYY</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              {error?.admissionDate?.YY && (
                <p className="text-red-500 text-[12px] font-bold mt-1">
                  {error.admissionDate.YY}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Status Button */}
        <div className="w-full">
          <label
            htmlFor="Status"
            className="block font-bold text-[#808080] text-[16px] mb-[5px]"
          >
            Status
          </label>
          <button
            className={`px-[55px] py-[10px] font-bold text-[20px] text-white rounded-[5px] border-0 ${
              admissionInfo.Status ? "bg-[#1bb66e]" : "bg-[#f2645c]"
            }`}
          >
            {admissionInfo.Status ? " Active" : "Deactivated"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admission;
