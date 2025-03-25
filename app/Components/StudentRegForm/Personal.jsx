import React from "react";

const PersonalInfoForm = ({
  personalInfo,
  setPersonalInfo,
  errors,
  handleInputChange,
  handleCountryChange,
  handleStateChange,
  countries,
  states,
  cities,
}) => {
  return (
    <div className="w-full mb-[20px] py-[10px] px-[30px]">
      {/* Form Title */}
      <div className="font-bold text-[#01427a] mt-[25px] mb-[15px]">
        <h1>Personal Information</h1>
      </div>
      {/* Grid Container: 3 columns with 15px gap horizontally and 40px vertically */}
      <div className="w-full grid grid-cols-3 gap-x-[15px] gap-y-[40px]">
        {/* First Name */}
        <div className="w-full">
          <label
            htmlFor="firstName"
            className="block font-bold text-[#808080] text-[16px] mb-[5px]"
          >
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={personalInfo.firstName}
            placeholder="Enter First Name"
            onChange={(e) => handleInputChange(e, setPersonalInfo)}
            required
            className="w-full py-[18px] px-[20px] rounded-[5px] border-2 border-[hsl(0,0%,85%)] text-[#808080] text-[14px] bg-white outline-none placeholder:text-[#0b0a0a33]"
          />
          {errors?.firstName && (
            <p className="text-[12px] font-bold mt-[2px] text-[rgba(242,100,92,1)]">
              {errors.firstName}
            </p>
          )}
        </div>
        {/* Middle Name */}
        <div className="w-full">
          <label
            htmlFor="middleName"
            className="block font-bold text-[#808080] text-[16px] mb-[5px]"
          >
            Middle Name
          </label>
          <input
            type="text"
            name="middleName"
            value={personalInfo.middleName}
            placeholder="Enter Middle Name"
            onChange={(e) => handleInputChange(e, setPersonalInfo)}
            className="w-full py-[18px] px-[20px] rounded-[5px] border-2 border-[hsl(0,0%,85%)] text-[#808080] text-[14px] bg-white outline-none placeholder:text-[#0b0a0a33]"
          />
          {errors?.middleName && (
            <p className="text-[12px] font-bold mt-[2px] text-[rgba(242,100,92,1)]">
              {errors.middleName}
            </p>
          )}
        </div>
        {/* Last Name */}
        <div className="w-full">
          <label
            htmlFor="lastName"
            className="block font-bold text-[#808080] text-[16px] mb-[5px]"
          >
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={personalInfo.lastName}
            placeholder="Enter Last Name"
            onChange={(e) => handleInputChange(e, setPersonalInfo)}
            required
            className="w-full py-[18px] px-[20px] rounded-[5px] border-2 border-[hsl(0,0%,85%)] text-[#808080] text-[14px] bg-white outline-none placeholder:text-[#0b0a0a33]"
          />
          {errors?.lastName && (
            <p className="text-[12px] font-bold mt-[2px] text-[rgba(242,100,92,1)]">
              {errors.lastName}
            </p>
          )}
        </div>
        {/* DOB and Gender Group */}
        <div className="w-full col-span-3 grid grid-cols-2 gap-[15px]">
          {/* DOB */}
          <div>
            <label
              htmlFor="DOB"
              className="block font-bold text-[#808080] text-[16px] mb-[5px]"
            >
              DOB
            </label>
            <input
              type="date"
              name="DOB"
              value={personalInfo.DOB}
              onChange={(e) => handleInputChange(e, setPersonalInfo)}
              required
              className="w-full py-[18px] px-[20px] rounded-[5px] border-2 border-[hsl(0,0%,85%)] text-[#808080] text-[14px] bg-white outline-none"
            />
            {errors?.DOB && (
              <p className="text-[12px] font-bold mt-[2px] text-[rgba(242,100,92,1)]">
                {errors.DOB}
              </p>
            )}
          </div>
          {/* Gender */}
          <div>
            <label
              htmlFor="gender"
              className="block font-bold text-[#808080] text-[16px] mb-[5px]"
            >
              Gender
            </label>
            <select
              name="gender"
              value={personalInfo.gender}
              onChange={(e) => handleInputChange(e, setPersonalInfo)}
              required
              className="w-full py-[18px] px-[20px] rounded-[5px] border-2 border-[hsl(0,0%,85%)] text-[#808080] text-[14px] bg-white outline-none"
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors?.gender && (
              <p className="text-[12px] font-bold mt-[2px] text-[rgba(242,100,92,1)]">
                {errors.gender}
              </p>
            )}
          </div>
        </div>
        {/* Address (Country & State) */}
        <div className="w-full">
          <label
            htmlFor="Address"
            className="block font-bold text-[#808080] text-[16px] mb-[5px]"
          >
            Address
          </label>
          <div className="grid grid-cols-2 gap-[15px]">
            <div>
              <select
                name="country"
                value={personalInfo.country}
                onChange={handleCountryChange}
                required
                className="w-full py-[18px] px-[20px] rounded-[5px] border-2 border-[hsl(0,0%,85%)] text-[#808080] text-[14px] bg-white outline-none"
              >
                <option value="" disabled>
                  Select Country
                </option>
                {countries.length > 0 &&
                  countries.map((country) => (
                    <option key={country.isoCode} value={country.isoCode}>
                      {country.name}
                    </option>
                  ))}
              </select>
              {errors?.country && (
                <p className="text-[12px] font-bold mt-[2px] text-[rgba(242,100,92,1)]">
                  {errors.country}
                </p>
              )}
            </div>
            <div>
              <select
                name="state"
                value={personalInfo.state}
                onChange={handleStateChange}
                required
                className="w-full py-[18px] px-[20px] rounded-[5px] border-2 border-[hsl(0,0%,85%)] text-[#808080] text-[14px] bg-white outline-none"
              >
                <option value="" disabled>
                  Select State
                </option>
                {states.length > 0 &&
                  states.map((state) => (
                    <option key={state.isoCode} value={state.isoCode}>
                      {state.name}
                    </option>
                  ))}
              </select>
              {errors?.state && (
                <p className="text-[12px] font-bold mt-[2px] text-[rgba(242,100,92,1)]">
                  {errors.state}
                </p>
              )}
            </div>
          </div>
        </div>
        {/* City */}
        <div className="flex flex-col justify-end">
          <div></div>
          <div className="grid grid-cols-2 gap-[15px]">
            <div>
              <select
                name="city"
                value={personalInfo.city}
                onChange={(e) => handleInputChange(e, setPersonalInfo)}
                required
                className="w-full py-[18px] px-[20px] rounded-[5px] border-2 border-[hsl(0,0%,85%)] text-[#808080] text-[14px] bg-white outline-none"
              >
                <option value="" disabled>
                  Select City
                </option>
                {cities.length > 0 &&
                  cities.map((city) => (
                    <option key={city.name} value={city.name}>
                      {city.name}
                    </option>
                  ))}
              </select>
              {errors?.city && (
                <p className="text-[12px] font-bold mt-[2px] text-[rgba(242,100,92,1)]">
                  {errors.city}
                </p>
              )}
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
