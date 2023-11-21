import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetSingleUniversityQuery } from "../../../features/university/universityApi";
import FeaturesArea from "./FeaturesArea/FeaturesArea";
import Gallery from "./Gallery/Gallery";
import UniversityMap from "./Map/UniversityMap";
import OverviewArea from "./OverviewArea/OverviewArea";
import Details from "./RightSideArea/Details";
import TabArea from "./TabArea/TabArea";
import TopLogoArea from "./TopLogoArea/TopLogoArea";

const UniversityDetails = () => {
  const params = useParams();
  const { data = {} } = useGetSingleUniversityQuery(params?.id);
  const [tabState, setTabState] = useState("Overview");
  console.log(data);
  return (
    <div className="w-full min-h-screen py-6">
      <div className="container mx-auto mt-[100px] px-4 sm:px-0 space-y-[16px] sm:space-y-[60px]">
        <TopLogoArea
          logoUrl={data?.institute_logo_url}
          universityName={data?.institute_name}
          country={data?.country_of_institute}
          city={data?.city_of_institute}
          address={data?.address_of_institute}
        />
        <Gallery images={data?.images} />
        <TabArea tabState={tabState} setTabState={setTabState} />
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-4 md:gap-8 mb-4">
          {/* left side Overview area */}
          <div className="w-full md:flex-1 space-y-12">
            <OverviewArea about={data?.about_institute} />
            <FeaturesArea features={data?.features} />
            <UniversityMap
              latitude={data?.latitude}
              longitude={data?.longitude}
            />
          </div>
          {/* right side area */}
          <div className="w-full md:w-[350px] space-y-6">
            <Details
              founded={data?.founded_year}
              instituteId={data?.institute_id}
              instituteType={data?.type_of_institute}
              worldRank={data?.world_ranking}
              nationalRank={data?.national_ranking}
              website={data?.website_url}
            />
            {/* <AvgTime /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityDetails;
