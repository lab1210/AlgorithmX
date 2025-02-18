"use client";
import React, { useEffect, useState } from "react";
import styles from "../../../css/Register.module.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Country, State, City } from "country-state-city";

const Registration_Form = () => {
  const [token, setToken] = useState("");
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    DOB: "",
    gender: "",
    country: "",
    state: "",
    city: "",
  });

  useEffect(() => {
    const countries = Country.getAllCountries();
    setCountries(countries);
  }, []);

  const handleCountryChange = (e) => {
    const { value } = e.target;
    setPersonalInfo((prev) => ({
      ...prev,
      country: value,
      state: "",
      city: "",
    }));
    const states = State.getStatesOfCountry(value);
    setStates(states);
    setCities([]);
  };

  const handleStateChange = (e) => {
    const { value } = e.target;
    setPersonalInfo((prev) => ({ ...prev, state: value, city: "" }));
    const cities = City.getCitiesOfState(personalInfo.country, value);
    setCities(cities);
  };

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({ ...prev, [name]: value }));
  };

  const searchParams = useSearchParams();
  const role = searchParams.get("role");
  const registrationFormPath =
    role === "teacher" ? `/Register/Teacher` : `/Register/Student`;

  return (
    <>
      <div className={styles.Reg_form_Container}>
        <div className={styles.Reg_header}>
          <h2>Student Registration</h2>
          <Link href={registrationFormPath}>
            <IoIosCloseCircleOutline size={20} />
          </Link>
        </div>
        <div className={styles.Reg_Content}>
          <div>
            <div className={styles.RegFormTitle}>
              <h2>Verified Token</h2>
            </div>
            <div className={styles.Form_input}>
              <div>
                <label htmlFor="Token">Token</label>
                <input
                  className={styles.reg_input}
                  type="text"
                  value={token}
                  placeholder="Enter Copied Token"
                  onChange={(e) => setToken(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          <hr />
          <div>
            <div className={styles.RegFormTitle}>
              <h2>Personal Information</h2>
            </div>
            <div className={styles.Form_input}>
              <div>
                <label htmlFor="First Name">First Name</label>
                <input
                  className={styles.reg_input}
                  type="text"
                  name="firstName"
                  value={personalInfo.firstName}
                  placeholder="Enter First Name"
                  onChange={handlePersonalInfoChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="Middle Name">Middle Name</label>
                <input
                  className={styles.reg_input}
                  type="text"
                  name="middleName"
                  value={personalInfo.middleName}
                  placeholder="Enter Middle Name"
                  onChange={handlePersonalInfoChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="Last Name">Last Name</label>
                <input
                  className={styles.reg_input}
                  type="text"
                  name="lastName"
                  value={personalInfo.lastName}
                  placeholder="Enter Last Name"
                  onChange={handlePersonalInfoChange}
                  required
                />
              </div>
              <div className={styles.groupedinfo}>
                <div>
                  <label htmlFor="DOB">DOB</label>
                  <input
                    className={styles.reg_input}
                    type="Date"
                    name="DOB"
                    value={personalInfo.DOB}
                    onChange={handlePersonalInfoChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="Gender">Gender</label>
                  <select
                    className={styles.reg_input}
                    name="gender"
                    value={personalInfo.gender}
                    onChange={handlePersonalInfoChange}
                    required
                  >
                    <option value="" disabled>
                      Select Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="Address">Address</label>
                </div>
                <div className={styles.groupedinfo_address}>
                  <div>
                    <select
                      className={styles.reg_input}
                      name="country"
                      value={personalInfo.country}
                      onChange={handleCountryChange}
                      required
                    >
                      <option value="" disabled>
                        Select Country
                      </option>
                      {countries.length > 0 &&
                        countries.map((country) => {
                          return (
                            <option
                              key={country.isoCode}
                              value={country.isoCode}
                            >
                              {country.name}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                  <div>
                    <select
                      className={styles.reg_input}
                      name="state"
                      value={personalInfo.state}
                      onChange={handleStateChange}
                      required
                    >
                      <option value="" disabled>
                        Select State
                      </option>
                      {states.length > 0 &&
                        states.map((state) => {
                          return (
                            <option key={state.isoCode} value={state.isoCode}>
                              {state.name}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                  <div>
                    <select
                      className={styles.reg_input}
                      name="city"
                      value={personalInfo.city}
                      onChange={handlePersonalInfoChange}
                      required
                    >
                      <option value="" disabled>
                        Select City
                      </option>
                      {cities.length > 0 &&
                        cities.map((city) => {
                          return (
                            <option key={city.name} value={city.name}>
                              {city.name}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};

export default Registration_Form;
