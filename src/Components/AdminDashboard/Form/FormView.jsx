import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetSingleFormQuery } from '../../../features/student/studentApi';

function FormView() {
      const params = useParams();
      const { data } = useGetSingleFormQuery(params.id);
      return (
            <div className="w-full min-h-screen mt-12">
                  <div className="w-full max-w-[600px] mx-auto shadow-md rounded-md p-4 bg-white space-y-4">
                        <h1 className="text-lg font-medium text-gray-800">
                              {
                                    `Title: ${data?.form?.title}`
                              }
                        </h1>
                        <p>{`Description: ${data?.form?.description}`}</p>
                  </div>
            </div>
      )
}

export default FormView