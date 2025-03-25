import React from "react";

const Parent = ({
  parentInfo,
  setParentInfo,
  handleInputChange,
  errors,
  handleCountryChange,
  handleStateChange,
  countries,
  states,
  cities,
  RelationshipData,
}) => {
  return (
    <div className="w-full mb-[20px] py-[10px] px-[30px]">
      {/* Title */}
      <div className="font-bold text-[#01427a] mt-[25px] mb-[15px]">
        <h1>Parent's Information</h1>
      </div>
      {/* Personal Info Grid */}
      <div className="grid grid-cols-3 gap-[15px] w-full">
        {/* Parent's First Name */}
        <div className="w-full">
          <label
            htmlFor="ParentfirstName"
            className="block font-bold text-[#808080] text-base mb-[5px]"
          >
            Parent's First Name
          </label>
          <input
            type="text"
            name="ParentfirstName"
            value={parentInfo.ParentfirstName}
            placeholder="Enter First Name"
            onChange={(e) => handleInputChange(e, setParentInfo)}
            required
            className="w-full py-[18px] px-[20px] rounded-[5px] border-2 border-[hsl(0,0%,85%)] text-[#808080] outline-none text-[14px] bg-white placeholder:text-[#0b0a0a33]"
          />
          {errors?.ParentfirstName && (
            <p className="text-red-500 text-[12px] font-bold mt-1">
              {errors.ParentfirstName}
            </p>
          )}
        </div>
        {/* Parent's Middle Name */}
        <div className="w-full">
          <label
            htmlFor="ParentmiddleName"
            className="block font-bold text-[#808080] text-base mb-[5px]"
          >
            Parent's Middle Name
          </label>
          <input
            type="text"
            name="ParentmiddleName"
            value={parentInfo.ParentmiddleName}
            placeholder="Enter Middle Name"
            onChange={(e) => handleInputChange(e, setParentInfo)}
            required
            className="w-full py-[18px] px-[20px] rounded-[5px] border-2 border-[hsl(0,0%,85%)] text-[#808080] outline-none text-[14px] bg-white placeholder:text-[#0b0a0a33]"
          />
          {errors?.ParentmiddleName && (
            <p className="text-red-500 text-[12px] font-bold mt-1">
              {errors.ParentmiddleName}
            </p>
          )}
        </div>
        {/* Parent's Last Name */}
        <div className="w-full">
          <label
            htmlFor="ParentlastName"
            className="block font-bold text-[#808080] text-base mb-[5px]"
          >
            Parent's Last Name
          </label>
          <input
            type="text"
            name="ParentlastName"
            value={parentInfo.ParentlastName}
            placeholder="Enter Last Name"
            onChange={(e) => handleInputChange(e, setParentInfo)}
            required
            className="w-full py-[18px] px-[20px] rounded-[5px] border-2 border-[hsl(0,0%,85%)] text-[#808080] outline-none text-[14px] bg-white placeholder:text-[#0b0a0a33]"
          />
          {errors?.ParentlastName && (
            <p className="text-red-500 text-[12px] font-bold mt-1">
              {errors.ParentlastName}
            </p>
          )}
        </div>
        {/* Parent's Occupation */}
        <div className="w-full">
          <label
            htmlFor="Occupation"
            className="block font-bold text-[#808080] text-base mb-[5px]"
          >
            Parent's Occupation
          </label>
          <input
            type="text"
            name="Occupation"
            value={parentInfo.Occupation}
            placeholder="Enter Occupation"
            onChange={(e) => handleInputChange(e, setParentInfo)}
            required
            className="w-full py-[18px] px-[20px] rounded-[5px] border-2 border-[hsl(0,0%,85%)] text-[#808080] outline-none text-[14px] bg-white placeholder:text-[#0b0a0a33]"
          />
          {errors?.Occupation && (
            <p className="text-red-500 text-[12px] font-bold mt-1">
              {errors.Occupation}
            </p>
          )}
        </div>
        {/* Parent's Phone Number */}
        <div className="w-full">
          <label
            htmlFor="PhoneNumber"
            className="block font-bold text-[#808080] text-base mb-[5px]"
          >
            Parent's Phone Number
          </label>
          <input
            type="text"
            name="PhoneNumber"
            value={parentInfo.PhoneNumber}
            placeholder="Enter Phone No"
            onChange={(e) => handleInputChange(e, setParentInfo)}
            required
            className="w-full py-[18px] px-[20px] rounded-[5px] border-2 border-[hsl(0,0%,85%)] text-[#808080] outline-none text-[14px] bg-white placeholder:text-[#0b0a0a33]"
          />
          {errors?.PhoneNumber && (
            <p className="text-red-500 text-[12px] font-bold mt-1">
              {errors.PhoneNumber}
            </p>
          )}
        </div>
        {/* Parent's E-mail */}
        <div className="w-full">
          <label
            htmlFor="Email"
            className="block font-bold text-[#808080] text-base mb-[5px]"
          >
            Parent's E-mail
          </label>
          <input
            type="text"
            name="Email"
            value={parentInfo.Email}
            placeholder="Enter E-mail"
            onChange={(e) => handleInputChange(e, setParentInfo)}
            required
            className="w-full py-[18px] px-[20px] rounded-[5px] border-2 border-[hsl(0,0%,85%)] text-[#808080] outline-none text-[14px] bg-white placeholder:text-[#0b0a0a33]"
          />
          {errors?.Email && (
            <p className="text-red-500 text-[12px] font-bold mt-1">
              {errors.Email}
            </p>
          )}
        </div>
        {/* Emergency Contact */}
        <div className="w-full">
          <label
            htmlFor="EmergencyContact"
            className="block font-bold text-[#808080] text-base mb-[5px]"
          >
            Emergency Contact
          </label>
          <input
            type="text"
            name="EmergencyContact"
            value={parentInfo.EmergencyContact}
            placeholder="Enter Emergency Contact"
            onChange={(e) => handleInputChange(e, setParentInfo)}
            required
            className="w-full py-[18px] px-[20px] rounded-[5px] border-2 border-[hsl(0,0%,85%)] text-[#808080] outline-none text-[14px] bg-white placeholder:text-[#0b0a0a33]"
          />
          {errors?.EmergencyContact && (
            <p className="text-red-500 text-[12px] font-bold mt-1">
              {errors.EmergencyContact}
            </p>
          )}
        </div>
        {/* Address (Country & State) */}
        <div className="w-full">
          <label
            htmlFor="Address"
            className="block font-bold text-[#808080] text-base mb-[5px]"
          >
            Address
          </label>
          <div className="grid grid-cols-2 gap-[15px]">
            <div>
              <select
                name="country"
                value={parentInfo.country}
                onChange={handleCountryChange}
                required
                className="w-full py-[18px] px-[20px] rounded-[5px] border-2 border-[hsl(0,0%,85%)] text-[#808080] outline-none text-[14px] bg-white placeholder:text-[#0b0a0a33]"
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
                <p className="text-red-500 text-[12px] font-bold mt-1">
                  {errors.country}
                </p>
              )}
            </div>
            <div>
              <select
                name="state"
                value={parentInfo.state}
                onChange={handleStateChange}
                required
                className="w-full py-[18px] px-[20px] rounded-[5px] border-2 border-[hsl(0,0%,85%)] text-[#808080] outline-none text-[14px] bg-white placeholder:text-[#0b0a0a33]"
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
                <p className="text-red-500 text-[12px] font-bold mt-1">
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
                value={parentInfo.city}
                onChange={(e) => handleInputChange(e, setParentInfo)}
                required
                className="w-full py-[18px] px-[20px] rounded-[5px] border-2 border-[hsl(0,0%,85%)] text-[#808080] outline-none text-[14px] bg-white placeholder:text-[#0b0a0a33]"
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
                <p className="text-red-500 text-[12px] font-bold mt-1">
                  {errors.city}
                </p>
              )}
            </div>
            <div></div>
          </div>
        </div>
        {/* Parent's Gender */}
        <div className="w-full">
          <label
            htmlFor="ParentGender"
            className="block font-bold text-[#808080] text-base mb-[5px]"
          >
            Gender
          </label>
          <select
            name="ParentGender"
            value={parentInfo.ParentGender}
            onChange={(e) => handleInputChange(e, setParentInfo)}
            required
            className="w-full py-[18px] px-[20px] rounded-[5px] border-2 border-[hsl(0,0%,85%)] text-[#808080] outline-none text-[14px] bg-white placeholder:text-[#0b0a0a33]"
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors?.gender && (
            <p className="text-red-500 text-[12px] font-bold mt-1">
              {errors.gender}
            </p>
          )}
        </div>
        {/* Relationship */}
        <div className="w-full">
          <label
            htmlFor="Relationship"
            className="block font-bold text-[#808080] text-base mb-[5px]"
          >
            Relationship
          </label>
          <div className="w-full">
            <select
              name="Relationship"
              value={parentInfo.Relationship}
              onChange={(e) => handleInputChange(e, setParentInfo)}
              required
              className="w-full py-[18px] px-[20px] rounded-[5px] border-2 border-[hsl(0,0%,85%)] text-[#808080] outline-none text-[14px] bg-white placeholder:text-[#0b0a0a33]"
            >
              <option value="" disabled>
                Select Relationship Shared
              </option>
              {RelationshipData.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            {errors?.Relationship && (
              <p className="text-red-500 text-[12px] font-bold mt-1">
                {errors?.parentInfo.Relationship}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parent;
