import React, { useEffect, useState } from "react";
import { useGetVisaForStudentQuery } from "../../../../features/student/studentApi";
import useAuth from "../../../../hooks/useAuth";
import SnackMessage from "../../../SnackBarMessage/SnackMessage";
import Layout from "../Layout.js/Layout";
import Country from "./Country/Country";

const VisaApplication = () => {
  const auth = useAuth();
  const { data = [] } = useGetVisaForStudentQuery(auth?.id);
  const [selectionModel, setSelectionModel] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState([]);
  const [message, setMessage] = useState({
    error: false,
    message: "",
  });
  // console.log(selectedApplication);
  useEffect(() => {
    if (selectionModel.length) {
      const findApplication = data?.find(
        (std) => std?.id === selectionModel[0]
      );
      setSelectedApplication(
        findApplication?.combineWithDocuments[0]?.applications
      );
    }
  }, [selectionModel, data]);
  console.log(data);

  return (
    <Layout>
      <div className="w-full min-h-screen grid place-items-center">
        <SnackMessage open={open} setOpen={setOpen} message={message} />
        {/* <Dialog
          fullScreen={fullScreen}
          open={dialogOpen}
          onClose={handleDialogClose}
          aria-labelledby="responsive-dialog-title">
          <div className="p-4 sm:w-[600px]">
            <div className=" flex items-center justify-between">
              <h4 className="text-gray-800 text-sm font-semibold mb-2">
                All documents for this country
              </h4>
              <button
                onClick={handleDialogClose}
                className="w-[38px] h-[38px] grid place-items-center bg-gray-300 rounded-full">
                <CloseRoundedIcon />
              </button>
            </div>
            <div className="space-y-4 mt-6">
              {selectedApplication?.map((app, i) => (
                <Applications
                  id={app?.query_id}
                  status={app?.status}
                  title={app?.title}
                  country={app?.country}
                  description={app?.description}
                  documents={app?.documents}
                  studentUploaded={app?.studentUploadedDoc}
                />
              ))}
            </div>
          </div>
        </Dialog> */}
        <div className="w-full sm:w-[600px] md:w-[960px] h-auto p-6">
          <h1 className="text-center text-2xl font-semibold text-gray-700 mb-6">
            All Applicable Visa
          </h1>
          <div className="space-y-6">
            {data.map((country, i) => (
              <Country
                country={country?.country}
                status={country?.status}
                documents={country?.combineWithDocuments[0]}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VisaApplication;
