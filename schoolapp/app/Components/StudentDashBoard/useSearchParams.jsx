"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import dummy from "../../Components/dummy";

const useSearchParams = () => {
  const searchParams = useSearchParams();
  const [searchData, setSearchData] = useState(null);

  useEffect(() => {
    if (searchParams) {
      const schoolId = searchParams.get("schoolid");
      const userId = searchParams.get("userid");

      const user = dummy.find(
        (user) => user.userId === userId && user.schoolid === schoolId
      );

      setSearchData({ schoolId, userId, user }); // Store the parameters in an object
    }
  }, [searchParams]);

  return searchData;
};

export default useSearchParams;
