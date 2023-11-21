import React from "react";
import SearchAndApply from "../../Components/StudentDashboard/StudentProfile/SearchAndApply/SearchAndApply";
import PageHeader from "../../Shared/PageHeader/PageHeader";

function SearchAndApplyHomePage() {
  return (
    <div className="min-h-screen ">
      <PageHeader
        bgText={"Search And Apply"}
        subText={`Search thousands of course and apply for your favorite one.`}></PageHeader>
      <div className="py-[50px] px-0 sm:px-6">
        <div className="max-w-[1400px] mx-auto p-4 sm:p-6 bg-gray-100 rounded-xl">
          <SearchAndApply isForPublicUser={true} />
        </div>
      </div>
    </div>
  );
}

export default SearchAndApplyHomePage;
