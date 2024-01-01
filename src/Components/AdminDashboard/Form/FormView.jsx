import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetSingleFormQuery } from '../../../features/student/studentApi';

function FormView() {
      const params = useParams();
      const { data } = useGetSingleFormQuery(params.id);
      console.log(data)
      return (
            <div className="w-full min-h-screen mt-12">
                  <div className="w-full max-w-[600px] mx-auto shadow-md rounded-md p-4 bg-white space-y-4">
                        <h1 className='text-center text-lg font-semibold text-gray-800'>Form View</h1>
                        <h1 className="text-lg font-medium text-gray-800">
                              {
                                    `Title: ${data?.form?.title}`
                              }
                        </h1>
                        <p className='text-justify'>{`Description: ${data?.form?.description}`}</p>
                        <div className='mt-4'>
                              <h1 className='text-center text-lg font-medium'>Questions</h1>
                              <ul className='mt-4 space-y-2 list-inside list-decimal'>
                                    {
                                          data?.questions?.map((item, i) => (
                                                <li key={i}>{item?.question}</li>
                                          ))
                                    }
                              </ul>
                        </div>
                  </div>
            </div>
      )
}

export default FormView