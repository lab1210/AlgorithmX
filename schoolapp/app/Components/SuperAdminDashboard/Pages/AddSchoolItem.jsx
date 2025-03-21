"use client";
import React, { useState } from "react";
import SuperAdminLayout from "../SuperAdminLayout";
import DashboardHeader from "../DashboardHeader";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { BiChevronDown } from "react-icons/bi";
import { Country, State, City } from "country-state-city";
import Image from "next/image";
import { LuUpload } from "react-icons/lu";

const AddSchoolItem = () => {
  const searchParams = useSearchParams();
  const schoolId = searchParams.get("schoolid");
  const userId = searchParams.get("userid");

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const countries = Country.getAllCountries();
  const states = selectedCountry
    ? State.getStatesOfCountry(selectedCountry.isoCode)
    : [];
  const cities = selectedState
    ? City.getCitiesOfState(selectedState.countryCode, selectedState.isoCode)
    : [];

  const handleCountryChange = (event) => {
    const countryCode = event.target.value;
    const country = countries.find((c) => c.isoCode === countryCode);
    setSelectedCountry(country);
    setSelectedState(null);
    setSelectedCity(null);
  };

  const handleStateChange = (event) => {
    const stateCode = event.target.value;
    const state = states.find((s) => s.isoCode === stateCode);
    setSelectedState(state);
    setSelectedCity(null);
  };

  const handleCityChange = (event) => {
    const city = cities.find((c) => c.name === event.target.value);
    setSelectedCity(city);
  };

  return (
    <SuperAdminLayout>
      <div className="bg-[#ffffff] pl-4 pt-6 pb-6 pr-4 sticky top-0  z-10 shadow-md  flex justify-between items-center ">
        <DashboardHeader />
        <Link
          href={`/Super-Admin/Manage-Existing-Schools?schoolid=${schoolId}&userid=${userId}`}
        >
          <button className="bg-[#07508F] text-white p-2 rounded-lg cursor-pointer ">
            View Existing School
          </button>
        </Link>
      </div>
      <div className="bg-[#D4D4D4] overflow-auto flex-1 p-4">
        <div className="grid grid-cols-[2.5fr_1fr] gap-3 ">
          <div className="bg-[#ffffff] rounded-lg flex flex-col">
            <div>
              <p className="font-bold text-xl p-6">
                General School Information
              </p>
              <hr className="w-full border-t border-[#978F8F]" />
            </div>
            <form className="flex-grow flex flex-col ">
              <div className="grid grid-cols-2 mt-6 pl-6 pr-6 gap-3 pb-0 ">
                <div className="flex flex-col gap-1 mb-2">
                  <label className="text-[#808080] font-semibold" htmlFor="">
                    School Name
                  </label>

                  <input
                    type="text"
                    className="text-base text-[#808080] rounded-lg focus:outline-none sm:text-sm border-[2px] p-2 border-[#d4d4d4] placeholder:text-[#d4d4d4] "
                    placeholder="Enter School Name"
                  />
                </div>

                <div className="flex flex-col gap-1 mb-2 ">
                  <label className="text-[#808080] font-semibold" htmlFor="">
                    School Short Name
                  </label>

                  <input
                    type="text"
                    className="text-base text-[#808080] rounded-lg focus:outline-none sm:text-sm border-[2px] p-2 border-[#d4d4d4] placeholder:text-[#d4d4d4] "
                    placeholder="Enter School Short Name"
                  />
                </div>

                <div className="flex flex-col gap-1 mb-2 ">
                  <label className="text-[#808080] font-semibold" htmlFor="">
                    School Type
                  </label>

                  <div className="grid grid-cols-1 ">
                    <select
                      name=""
                      id=""
                      className=" w-full bg-white col-start-1 row-start-1 appearance-none text-base text-[#808080] rounded-lg focus:outline-none sm:text-sm border-[2px] p-2 border-[#d4d4d4] placeholder:text-[#d4d4d4] "
                    >
                      <option value="" disabled selected>
                        Select School Type
                      </option>
                      <option value="Private">Private</option>
                      <option value="Public">Public</option>
                    </select>
                    <BiChevronDown className="text-[#d4d4d4] col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end pointer-events-none" />
                  </div>
                </div>

                <div className="flex flex-col gap-1 mb-2">
                  <label className="text-[#808080] font-semibold" htmlFor="">
                    Education Level
                  </label>

                  <div className="grid grid-cols-1 ">
                    <select
                      name=""
                      id=""
                      className=" w-full bg-white col-start-1 row-start-1 appearance-none text-base text-[#808080] rounded-lg focus:outline-none sm:text-sm border-[2px] p-2 border-[#d4d4d4] placeholder:text-[#d4d4d4] "
                    >
                      <option value="" disabled selected>
                        Select Education Level
                      </option>
                      <option value="Primary">Primary</option>
                      <option value="Junior">Junior Secondary</option>
                      <option value="Senior">Senior Secondary</option>
                    </select>
                    <BiChevronDown className="text-[#d4d4d4] col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end pointer-events-none" />
                  </div>
                </div>
                <div className="flex flex-col gap-1 mb-2 ">
                  <label className="text-[#808080] font-semibold" htmlFor="">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    className="text-base text-[#808080] rounded-lg focus:outline-none sm:text-sm border-[2px] p-2 border-[#d4d4d4] placeholder:text-[#d4d4d4] "
                    placeholder="Enter Phone Number"
                  />
                </div>

                <div className="flex flex-col gap-1 mb-2">
                  <label className="text-[#808080] font-semibold" htmlFor="">
                    School Email
                  </label>

                  <input
                    type="email"
                    className="text-base text-[#808080] rounded-lg focus:outline-none sm:text-sm border-[2px] p-2 border-[#d4d4d4] placeholder:text-[#d4d4d4] "
                    placeholder="Enter School Email"
                  />
                </div>
              </div>
              <div className="pt-4 pl-6 pr-6 pb-0">
                <label className="text-[#808080] font-semibold" htmlFor="">
                  School Address
                </label>
                <div className="grid grid-cols-2 gap-3 mt-1 ">
                  <div className="grid grid-cols-1 mb-2">
                    <select
                      className="w-full bg-white col-start-1 row-start-1 appearance-none text-base text-[#808080] rounded-lg focus:outline-none sm:text-sm border-[2px] p-2 border-[#d4d4d4]"
                      onChange={handleCountryChange}
                      value={selectedCountry ? selectedCountry.isoCode : ""}
                    >
                      <option value="" disabled selected>
                        Select Country
                      </option>
                      {countries.map((country) => (
                        <option key={country.isoCode} value={country.isoCode}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                    <BiChevronDown className="text-[#d4d4d4] col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end pointer-events-none" />
                  </div>
                  <div className="grid grid-cols-1 mb-2">
                    <select
                      className="w-full bg-white col-start-1 row-start-1 appearance-none text-base text-[#808080] rounded-lg focus:outline-none sm:text-sm border-[2px] p-2 border-[#d4d4d4]"
                      onChange={handleStateChange}
                      value={selectedState ? selectedState.isoCode : ""}
                      disabled={!selectedCountry}
                    >
                      <option value="" disabled selected>
                        Select State
                      </option>
                      {states.map((state) => (
                        <option key={state.isoCode} value={state.isoCode}>
                          {state.name}
                        </option>
                      ))}
                    </select>
                    <BiChevronDown className="text-[#d4d4d4] col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end pointer-events-none" />
                  </div>

                  <div className="grid grid-cols-1">
                    <select
                      className="w-full bg-white col-start-1 row-start-1 appearance-none text-base text-[#808080] rounded-lg focus:outline-none sm:text-sm border-[2px] p-2 border-[#d4d4d4]"
                      onChange={handleCityChange}
                      value={selectedCity ? selectedCity.name : ""}
                      disabled={!selectedState}
                    >
                      <option value="" disabled selected>
                        Select City
                      </option>
                      {cities.map((city) => (
                        <option key={city.name} value={city.name}>
                          {city.name}
                        </option>
                      ))}
                    </select>
                    <BiChevronDown className="text-[#d4d4d4] col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end pointer-events-none" />
                  </div>
                </div>
              </div>
              <div className="flex justify-end pr-6 pb-2  mt-auto ">
                <button className="bg-[#07508F]  text-white pt-2 pb-2 pl-12 pr-12 text-sm rounded-lg cursor-pointer ">
                  Save
                </button>
              </div>
            </form>
          </div>
          <div className="grid grid-rows-[auto_auto] gap-2  ">
            <div className="bg-[#ffffff] rounded-lg drop-shadow-lg p-5">
              <p className="font-bold text-xl ">LOGO</p>
              <div className="flex flex-col items-center justify-center mt-4">
                <div className="mb-4 bg-[#E4E4E4] border-dashed border-[1.5px] border-[#333333] flex items-center relative  justify-center w-48 h-48">
                  <div className="w-12 h-12">
                    <Image
                      className="w-full h-full"
                      src={"/Icons.png"}
                      alt="icon"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
                <button className="text-[#07508F] border-[1.5px] rounded-lg cursor-pointer  border-dashed  w-48 p-2 flex items-center justify-between">
                  Upload School LOGO
                  <span>
                    <LuUpload size={20} />
                  </span>
                </button>
              </div>
            </div>
            <div className="bg-[#ffffff] rounded-lg p-5 drop-shadow-lg">
              <p className="font-bold text-xl mb-4 ">SUBSCRIPTION PLAN</p>
              <div>
                <div className="flex justify-between">
                  <p className="font-semibold text-sm text-[#9C9B9B]">
                    Amount Per Student:
                  </p>
                  <p className="font-semibold text-sm text-[#9C9B9B]">N1500</p>
                </div>

                <div className="flex justify-between">
                  <p className="font-semibold text-sm ">No of Students:</p>
                  <p className="font-semibold text-sm ">N100</p>
                </div>

                <div className="flex justify-between mb-4">
                  <p className="font-semibold text-sm ">
                    Amount Expected to be paid::
                  </p>
                  <p className="font-semibold text-sm ">N1500</p>
                </div>
              </div>

              <div className="flex justify-center p-4">
                <button className="bg-[#4084B1] text-white pt-2 pb-2 pl-12 pr-12 text-sm rounded-lg cursor-pointer ">
                  Activate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SuperAdminLayout>
  );
};

export default AddSchoolItem;
