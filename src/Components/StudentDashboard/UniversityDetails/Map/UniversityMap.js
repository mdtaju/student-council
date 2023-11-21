// pk.eyJ1IjoibWR0YWp1IiwiYSI6ImNsbzg2OGg1bzBjaGEya29ldTc0eHExZzgifQ.H40gE-96BXIZqwWLiksC1w
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import { Skeleton } from "@mui/material";
import React from "react";
import Map, { Marker } from "react-map-gl";

function UniversityMap({ latitude, longitude }) {
  if (latitude && longitude) {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-[40px] h-[40px] p-2 bg-blue-100 rounded-full grid place-items-center">
            <FmdGoodOutlinedIcon />
          </div>
          <span className="text-xl font-semibold text-secondary">Location</span>
        </div>
        <div className="rounded-md bg-white p-2 border border-gray-300">
          <div className="w-full h-[350px] overflow-hidden">
            <Map
              mapboxAccessToken="pk.eyJ1IjoibWR0YWp1IiwiYSI6ImNsbzg2OGg1bzBjaGEya29ldTc0eHExZzgifQ.H40gE-96BXIZqwWLiksC1w"
              initialViewState={{
                longitude: +longitude,
                latitude: +latitude,
                zoom: 14,
              }}
              style={{ width: "100%", height: 350, borderRadius: "7px" }}
              mapStyle="mapbox://styles/mapbox/streets-v9">
              <Marker
                longitude={+longitude}
                latitude={+latitude}
                anchor="bottom">
                <div className="w-[40px] h-[40px] p-2 bg-primary text-white rounded-full grid place-items-center">
                  <AccountBalanceOutlinedIcon />
                </div>
              </Marker>
            </Map>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <Skeleton variant="rectangular" sx={{ width: "100%", height: "350px" }} />
    );
  }
}

export default UniversityMap;
