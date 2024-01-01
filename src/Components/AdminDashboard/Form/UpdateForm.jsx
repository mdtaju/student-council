import { Close } from '@mui/icons-material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetSingleFormQuery, useUpdateFormMutation } from '../../../features/student/studentApi';
import Input from '../../Inputs/Input';
import TextArea from '../../Inputs/TextArea';
import SnackMessage from '../../SnackBarMessage/SnackMessage';

function UpdateForm() {
      const params = useParams();
      const { data, refetch } = useGetSingleFormQuery(params.id);
      const [updateForm] = useUpdateFormMutation();
      const [mssOpen, setMssOpen] = useState(false);
      const [message, setMessage] = useState({
            error: false,
            message: "",
      });
      const [isInputOpen, setIsInputOpen] = useState(false);
      const [inputName, setInputName] = useState("");
      const [inputNames, setInputNames] = useState([]);
      const [title, setTitle] = useState("");
      const [description, setDescription] = useState("");
      const [formUrl, setFormUrl] = useState("");
      const [allQuestions, setAllQuestions] = useState([]);
      const [queryId, setQueryId] = useState("");


      useEffect(() => {
            if (data) {
                  setInputNames(data?.questions);
                  setAllQuestions(data?.questions);
                  setTitle(data?.form?.title);
                  setQueryId(data?.form?.query_id);
                  setDescription(data?.form?.description);
            }
      }, [data]);

      const handleAddInput = () => {
            if (!isInputOpen) {
                  setIsInputOpen(true);
                  return
            }
            setInputNames((prevInputs) => [...prevInputs, { question: inputName }]);
            setInputName("")
      }

      const handleDelete = (index) => {
            setInputNames((prevInputs) => {
                  return prevInputs.filter((item, i) => i !== index);
            })
      }

      const handleSubmit = () => {
            setFormUrl("")
            if (!title) {
                  return alert("Please, add a title.")
            }
            if (inputNames.length === 0) {
                  return alert("Please, add a minimum of one input.")
            }

            const newInputs = inputNames.filter((input) => !input?.id);
            const inputsForDelete = allQuestions.filter(({ id }) => !inputNames.some((input) => input?.id && input?.id === id));
            const inputsForUpdate = inputNames.filter((input) => input?.id);
            console.log(newInputs);
            console.log(inputsForUpdate)
            const makeData = {
                  query_id: queryId,
                  title,
                  description,
                  newInputs,
                  inputsForDelete,
                  inputsForUpdate
            }
            updateForm(makeData).unwrap().then((data) => {
                  setMessage({
                        error: false,
                        message: "Data successfully updated. Please copy the URL below. The URL is the same as the previous one."
                  });
                  setMssOpen(true);
                  setFormUrl(`http://localhost:9000/public-form/${data?.id}`);
                  setInputName("")
                  setInputNames([])
                  setTitle("")
                  setDescription("");
                  refetch(params.id)
            }).catch((err) => {
                  setMessage({
                        error: true,
                        message: "Something went wrong. Please try again."
                  });
                  setMssOpen(true);
            })
      }
      return (
            <div className="w-full min-h-screen grid place-items-center">
                  <SnackMessage message={message} open={mssOpen} setOpen={setMssOpen} />
                  <div className="w-full max-w-[600px] mx-auto shadow-md rounded-md p-4 bg-white">
                        <h1 className="text-xl font-semibold text-center text-gray-800">
                              Update The Form
                        </h1>

                        {/* form container */}
                        <div className='space-y-3 mt-4'>
                              <Input
                                    title={"Title"}
                                    isRequired
                                    required
                                    placeholder="Enter a title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                              />
                              <TextArea
                                    title={"Description"}
                                    placeholder="Write a description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                              />

                              {
                                    inputNames.length > 0 &&
                                    <div>
                                          <ul className='space-y-3 text-lg font-medium'>
                                                {
                                                      inputNames.map((name, i) => (
                                                            <li key={i} className='p-2 bg-gray-100 border border-gray-300 rounded-md flex items-center justify-between'>
                                                                  <span>{`${i + 1}. ${name.question}`}</span>
                                                                  <button onClick={() => handleDelete(i)} className='w-[32px] h-[32px] grid place-items-center bg-red-400 hover:bg-red-500 rounded-full'><Close /></button>
                                                            </li>
                                                      ))
                                                }
                                          </ul>
                                    </div>
                              }

                              <div className='bg-gray-100 border border-gray-400 rounded-md p-4'>
                                    {
                                          isInputOpen &&
                                          < Input
                                                title={"Input Name"}
                                                placeholder="Enter your input name"
                                                value={inputName}
                                                onChange={(e) => setInputName(e.target.value)}
                                          />
                                    }
                                    {/* button container */}
                                    <div className='flex items-center gap-4 justify-between mt-4'>
                                          <button className='bg-red-500 w-full py-2 text-sm font-medium text-white rounded-md' onClick={() => {
                                                setInputName("");
                                                setIsInputOpen(false);
                                          }}>Cancel</button>
                                          <button className='bg-secondary w-full py-2 text-sm font-medium text-white rounded-md' onClick={handleAddInput}>Add Input</button>
                                    </div>
                              </div>
                              {
                                    formUrl &&
                                    <div className='flex items-center gap-4 text-xs font-medium text-blue-500'>
                                          <p className=''>{formUrl} </p>
                                          <button onClick={() => navigator.clipboard.writeText(formUrl)} className='active:scale-95 duration-150 flex items-center gap-2 px-3 py-1 bg-blue-500 text-white rounded-md'>
                                                <span>Copy</span>
                                                <ContentCopyIcon fontSize='small' />
                                          </button>
                                    </div>
                              }
                              <button onClick={handleSubmit} className='mt-4 bg-secondary text-sm font-medium text-white w-full py-2 rounded-md'>Submit</button>
                        </div>
                  </div>
            </div>
      )
}

export default UpdateForm;