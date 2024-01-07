import React from 'react';

function ProfileView({ data = {} }) {
      const { generalInfo } = data;
      return (
            <div className='mt-4 w-full bg-white rounded-md shadow-sm p-4'>
                  {/* general info */}
                  <h1 className='text-lg font-medium text-gray-800'>General Info</h1>
                  <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-[500px] text-sm font-medium text-gray-800'>
                        {/* name */}
                        <span>Name</span>
                        <span>{`${generalInfo?.first_name} ${generalInfo?.middle_name} ${generalInfo?.last_name}`}</span>
                        {/* birth */}
                        <span>Date of Birth</span>
                        <span>{generalInfo?.date_of_birth}</span>
                        {/* place of birth */}
                        <span>Place of Birth</span>
                        <span>{generalInfo?.place_of_birth}</span>
                        {/* marital status */}
                        <span>Marital Status</span>
                        <span>{generalInfo?.marital_status}</span>
                        {/* gender */}
                        <span>Gender</span>
                        <span>{generalInfo?.gender}</span>
                        {/* passport status */}
                        <span>Passport Status</span>
                        <span>{generalInfo?.passport_status}</span>
                  </div>
                  {/* contact info */}
            </div>
      )
}

export default ProfileView