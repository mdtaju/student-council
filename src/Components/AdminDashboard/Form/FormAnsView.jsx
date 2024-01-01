import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useGetSingleFormAnsMutation } from '../../../features/student/studentApi';

function useQuery() {
      const { search } = useLocation();
      const query = React.useMemo(() => new URLSearchParams(search), [search]);
      return query.get("email")
}

function FormAnsView() {
      const params = useParams();
      const query = useQuery();
      const [getSingleFormAns] = useGetSingleFormAnsMutation();
      const [answers, setAnswers] = useState({});

      useEffect(() => {
            if (params && query) {
                  getSingleFormAns({
                        query_id: params?.id,
                        user_email: query
                  }).unwrap().then((data) => {
                        setAnswers(data);
                  }).catch((e) => { })
            }
      }, [params, query, getSingleFormAns]);
      return (
            <div className="w-full min-h-screen mt-12">
                  <div className="w-full max-w-[600px] mx-auto shadow-md rounded-md p-4 bg-white space-y-4">
                        <h1 className='text-center text-lg font-semibold text-gray-800'>Form Answer View</h1>
                        <h1 className="text-lg font-medium text-gray-800">
                              {
                                    `Title: ${answers?.form?.title}`
                              }
                        </h1>
                        <p className='text-justify'>{`Description: ${answers?.form?.description}`}</p>
                        {/* basic info about answers */}
                        <div className='p-4 border border-gray-300 bg-gray-100 rounded-md space-y-3'>
                              <div className='flex flex-col'>
                                    <h4 className='text-base font-semibold text-gray-800'>Form Creation Date:</h4>
                                    <p className='text-sm font-medium'>{answers?.form?.created_at}</p>
                              </div>
                              {
                                    answers?.form?.updated_at &&
                                    <div className='flex flex-col'>
                                          <h4 className='text-base font-semibold text-gray-800'>Form Last Updated Date:</h4>
                                          <p className='text-sm font-medium'>{answers?.form?.updated_at}</p>
                                    </div>
                              }
                              <div className='flex flex-col'>
                                    <h4 className='text-base font-semibold text-gray-800'>Answer Submitted At:</h4>
                                    <p className='text-sm font-medium'>{answers?.answers?.length > 0 && answers?.answers[0]?.created_at}</p>
                              </div>
                              <div className='flex flex-col'>
                                    <h4 className='text-base font-semibold text-gray-800'>User Email:</h4>
                                    <p className='text-sm font-medium'>{query}</p>
                              </div>
                        </div>
                        <div className='mt-4'>
                              <h1 className='text-center text-lg font-medium'>Questions And Answers</h1>
                              <ul className='mt-4 space-y-2 list-inside list-none'>
                                    {
                                          answers?.answers?.map((item, i) => (
                                                <li key={i}>
                                                      <h4 className='text-base font-medium'>{`${i + 1}. ${item?.question}`}</h4>
                                                      <p className='ml-4 text-sm'>{`Ans: ${item?.answer}`}</p>
                                                </li>
                                          ))
                                    }
                              </ul>
                        </div>
                  </div>
            </div>
      )
}

export default FormAnsView