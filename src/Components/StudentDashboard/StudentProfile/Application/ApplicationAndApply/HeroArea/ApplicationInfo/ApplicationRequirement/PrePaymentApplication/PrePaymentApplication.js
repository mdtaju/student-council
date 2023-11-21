import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Link, useParams } from "react-router-dom";
import {
  useAddApplicationRequirementDocumentsMutation,
  useAddApplicationRequirementNoteAnsMutation,
} from "../../../../../../../../../features/application/applicationApi";
import useAuth from "../../../../../../../../../hooks/useAuth";
import RequirementStatus from "./RequirementStatus/RequirementStatus";

const PrePaymentApplication = ({ req = {} }) => {
  const {
    id,
    query_id,
    course_id,
    application_type,
    requirement_type,
    title,
    about_requirement,
    document_option,
    note_option,
    notes,
    notes_ans,
    documents: req_documents,
    req_status,
  } = req;
  const [isSeeMore, setIsSeeMore] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [noteInputs, setNoteInputs] = useState([]);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [addApplicationRequirementNoteAns] =
    useAddApplicationRequirementNoteAnsMutation();
  const [addApplicationRequirementDocuments] =
    useAddApplicationRequirementDocumentsMutation();
  const { id: shortlistId } = useParams();
  const auth = useAuth();
  const [noteUpdateError, setNoteUpdateError] = useState("");
  const [documents, setDocuments] = useState(req_documents || []);
  const [reqStatus, setReqStatus] = useState(req_status?.status || "Missing");

  const onDrop = useCallback(
    (acceptedFiles) => {
      const formData = new FormData();

      formData.append("university_query_id", query_id);
      formData.append("course_id", course_id);
      formData.append("req_id", id);
      formData.append("uploaded_by", auth?.user);
      formData.append("course_shortlist_id", shortlistId);

      acceptedFiles.map((d) => {
        formData.append("files", d);
        return d;
      });
      addApplicationRequirementDocuments(formData)
        .unwrap()
        .then((data) => {
          setDocuments((prevDocs) => [...prevDocs, ...data]);
        })
        .catch((err) => {});
    },
    [
      addApplicationRequirementDocuments,
      query_id,
      course_id,
      auth,
      id,
      shortlistId,
    ]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  //
  useEffect(() => {
    if (notes.length) {
      const makeNoteAnsArr = notes.map((nt) => {
        const getAns = notes_ans?.find((n) => n?.note_id === nt?.id);

        return {
          note_id: nt?.id,
          note_ans: getAns?.note_ans || "",
        };
      });
      setNoteInputs(makeNoteAnsArr);
    }
  }, [notes, notes_ans]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNoteSubmit = () => {
    const makeData = noteInputs.map((nt) => {
      return {
        ...nt,
        university_query_id: query_id,
        course_id,
        req_id: id,
        ans_by: auth?.id,
        course_shortlist_id: shortlistId,
      };
    });
    addApplicationRequirementNoteAns({ data: makeData })
      .unwrap()
      .then((d) => {
        setNoteUpdateError("");
        setOpen(false);
      })
      .catch((e) => {
        setNoteUpdateError("Something went wrong. Please, try again.");
      });
  };
  return (
    <div className={`w-full mb-2 flex items-start relative`}>
      {/* notes dialog start */}
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title">
        <DialogTitle id="responsive-dialog-title">
          <div className="flex items-center justify-between gap-4">
            <p>{title}</p>
            <button
              onClick={handleClose}
              className="w-[38px] h-[38px] grid place-items-center bg-gray-300 rounded-full">
              <CloseRoundedIcon />
            </button>
          </div>
        </DialogTitle>
        <DialogContent>
          <div className="w-full md:w-[500px] min-h-screen space-y-3">
            <p className="text-center text-xs font-semibold text-red-500">
              {noteUpdateError}
            </p>
            {notes.map((n, i) => (
              <div key={i} className="w-full space-y-2">
                <h1 className="text-sm font-medium text-gray-800">
                  {i + 1}. {n?.title}
                </h1>
                <input
                  disabled={reqStatus === "Completed"}
                  type="text"
                  className="px-4 py-2 outline-none border border-gray-400 w-full rounded-md"
                  value={
                    noteInputs?.find((nt) => nt?.note_id === n?.id)?.note_ans
                  }
                  onChange={(e) => {
                    const { value } = e.target;
                    const makeData = {
                      note_id: n?.id,
                      note_ans: value,
                    };

                    setNoteInputs((prevState) => {
                      const getNote = prevState.find(
                        (nt) => nt?.note_id === n?.id
                      );
                      if (getNote) {
                        return prevState.map((nt) => {
                          if (nt?.note_id === n?.id) {
                            return { ...nt, ...makeData };
                          } else {
                            return nt;
                          }
                        });
                      } else {
                        return prevState.push(makeData);
                      }
                    });
                  }}
                />
              </div>
            ))}
          </div>
        </DialogContent>
        <DialogActions>
          <button
            disabled={reqStatus === "Completed"}
            onClick={handleNoteSubmit}
            className={`px-6 py-2 ${
              reqStatus === "Completed"
                ? "bg-gray-300 text-gray-600"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            } rounded-full`}>
            Submit
          </button>
        </DialogActions>
      </Dialog>
      {/* notes dialog end */}

      {/* status title */}
      <div
        className={`${
          requirement_type === "Required" ? "bg-blue-600" : "bg-blue-500"
        } text-white w-[40px] min-h-full absolute flex items-center justify-around rounded-l-sm`}>
        <div>
          <h1 className="rotate-[-90deg] text-sm font-bold">
            {requirement_type}
          </h1>
        </div>
      </div>
      {/* text and document container start */}
      <div className="flex-1 w-[calc(100%-40px)] ml-[40px]">
        {/* text body */}
        <div className={`flex items-center gap-4 p-4 overflow-y-scroll`}>
          {/* action status */}
          <RequirementStatus
            reqId={id}
            queryId={query_id}
            courseId={course_id}
            applicationType={application_type}
            reqStatus={reqStatus}
            setReqStatus={setReqStatus}
          />
          {/* info */}
          <div className={``}>
            <h1 className="text-lg font-medium text-gray-700">{title}</h1>
            <div
              className={`mt-3 flex items-start gap-1 ${
                isSeeMore ? "max-h-full" : "max-h-[40px] overflow-hidden"
              } transform transition-all duration-200`}>
              <div
                dangerouslySetInnerHTML={{ __html: about_requirement }}></div>
              {/* see less see more */}
              <div
                onClick={() => setIsSeeMore((prevState) => !prevState)}
                className="flex items-center cursor-pointer select-none">
                <span className="text-blue-500 text-xs font-semibold whitespace-nowrap">
                  {isSeeMore ? "see less" : "see more"}
                </span>
                <ArrowDropDownRoundedIcon
                  className={`text-blue-500 ${
                    isSeeMore ? "rotate-180" : "rotate-0"
                  } transition-all duration-200`}
                />
              </div>
            </div>
          </div>

          {/* upload and note button */}
          <div className="flex items-center gap-2">
            {/* upload */}
            {document_option === "Yes" && (
              <>
                {reqStatus === "Completed" ? (
                  <div className="w-[40px] h-[40px] bg-blue-400 rounded-full grid place-items-center text-white cursor-not-allowed">
                    <FileUploadOutlinedIcon />
                  </div>
                ) : (
                  <div
                    {...getRootProps()}
                    className="w-[40px] h-[40px] bg-blue-400 rounded-full grid place-items-center text-white cursor-pointer">
                    <input {...getInputProps()} />
                    <FileUploadOutlinedIcon />
                  </div>
                )}
              </>
            )}
            {/* notes */}
            {note_option === "Yes" && (
              <div
                onClick={handleClickOpen}
                className="w-[40px] h-[40px] bg-blue-400 rounded-full grid place-items-center text-white cursor-pointer">
                <NoteAltOutlinedIcon />
              </div>
            )}
          </div>
        </div>

        {/* bottom area file show start */}

        {(note_option === "Yes" || document_option === "Yes") && (
          <div className="w-full px-4 py-1 bg-gray-200 space-y-1">
            <div className="flex flex-col items-start">
              {note_option === "Yes" && (
                <span className="text-base font-medium text-gray-700">
                  {notes_ans.length}/{notes.length} Questions Answered
                </span>
              )}
              <span className="text-base font-medium text-gray-700">
                Attached Documents:
              </span>
            </div>
            {/* documents start */}
            <div className="grid grid-cols-2 sm:grid-cols-3 items-center gap-3">
              {/* single document */}
              {documents.map((doc, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-blue-200 px-3 py-1 rounded-full cursor-pointer group">
                  <FileDownloadOutlinedIcon className="text-gray-800" />
                  <div className="flex-1 flex flex-col overflow-hidden">
                    <Link to={doc?.file_url} target="_blank">
                      <div className="flex items-center">
                        <span className="text-base font-light whitespace-nowrap group-hover:underline">
                          {doc?.file_name?.length > 10
                            ? doc?.file_name?.slice(0, 10) + "[...]"
                            : doc?.file_name}
                        </span>
                        <span>
                          {"."}
                          {doc?.file_extension}
                        </span>
                      </div>
                    </Link>
                    <span className="text-xs text-blue-700">
                      By {doc?.uploaded_by}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            {/* documents end */}
          </div>
        )}
        {/* bottom area file show end */}
      </div>
      {/* text and document container end */}
    </div>
  );
};

export default PrePaymentApplication;
