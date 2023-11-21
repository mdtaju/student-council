import React from "react";
import { Link } from "react-router-dom";

const UniversityInfo = ({
  query_id,
  institute_name,
  institute_logo_url,
  address_of_institute,
  city_of_institute,
  country_of_institute,
  qs_ranking,
  national_ranking,
  world_ranking,
  website_url,
}) => {
  return (
    <div className="w-full md:w-[300px] px-4 py-8 border border-gray-400 rounded-md bg-white">
      <div className="h-[120px] w-full text-center relative grid place-items-center">
        <img
          src={institute_logo_url}
          className="absolute w-full h-full object-contain"
          alt="logo"
        />
      </div>
      <div className="space-y-4 text-center mt-6">
        <Link to={`/student-dashboard/university/${query_id}`} target="_blank">
          <h4 className="text-blue-800 hover:underline text-lg font-semibold">
            {institute_name}
          </h4>
        </Link>
        <p className="text-xs text-gray-500">
          {address_of_institute}, {city_of_institute}
        </p>
        <p className="text-xs text-gray-500">{country_of_institute}</p>
        <p className="text-sm font-bold text-gray-800">Ranking</p>
        <p className="text-base text-gray-800">{qs_ranking} in QS Ranking</p>
        <p className="text-base text-gray-800">
          {national_ranking} in National Ranking
        </p>
        <p className="text-base text-gray-800">
          {world_ranking} in World Ranking
        </p>
        <p className="text-sm font-bold text-gray-800">Website URL</p>
        <a
          href={website_url}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-blue-800">
          {website_url}
        </a>
      </div>
    </div>
  );
};

export default UniversityInfo;
