import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useGetSingleAssessmentQuery } from '../../../../features/student/studentApi';
import usePath from '../../../../hooks/usePath';
import Notes from './Notes';
import ProfileView from './ProfileView';

function useQuery() {
      const { search } = useLocation();
      const query = React.useMemo(() => new URLSearchParams(search), [search]);
      return query.get("tab")
}

function AssessmentView() {
      const pathName = usePath();
      const params = useParams();
      const query = useQuery();
      const { data } = useGetSingleAssessmentQuery(params?.id);
      console.log(data)
      console.log(query)
      return (
            <div className='w-full min-h-screen'>
                  <div className='w-full mx-auto bg-white border-b border-gray-200 flex items-center'>
                        <Link to={`/${pathName}/allAssessment/${params?.id}?tab=profile`}>
                              <div className={`px-4 py-2 border-b-2 ${query === "profile" ? "border-blue-500" : ""}`}>Profile</div>
                        </Link>
                        <Link to={`/${pathName}/allAssessment/${params?.id}?tab=notes`}>

                              <div className={`px-4 py-2 border-b-2 ${query === "notes" ? "border-blue-500" : ""}`}>Notes</div>
                        </Link>
                  </div>

                  {/* tab body */}
                  {
                        query === "profile" ?
                              <ProfileView
                                    data={data}
                              /> :
                              <Notes
                                    notes={data?.notes}
                              />
                  }
            </div>
      )
}

export default AssessmentView