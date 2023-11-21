import { Box, Modal } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import GET from '../../../API/get';
import PatchWithGet from '../../../API/PatchWithGet';
import { useContext } from 'react';
import { Context } from '../../../ContextProvider/ContextProvider';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { md: "40%", xs: "98%" },
    maxHeight: { md: "80%", xs: "98%" },
    boxShadow: 24,
    overflowY: "auto",
    bgcolor: "white",
};
const ContactDetailsModal = ({ setOpen, open, data, setData, id }) => {
    const { user } = useContext(Context)
    const [counsellor, setCounsellor] = useState([])

    const status = [
        'In-Progress', 'Important', 'Non-important', 'Rejected'
    ]
    useEffect(() => {
        GET('user/role/counsellor', setCounsellor)
    }, [])


    const handleActionForm = (event) => {
        event.preventDefault()
        const form = event.target;
        const formData = {
            assignedTo: form.assignedTo.value || data?.assignedTo,
            status: form.status.value || data?.status
        }


        PatchWithGet(`contact/${id}`, formData, setData)
        setOpen(false)
        form.reset()

    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Modal
            keepMounted
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>

                <form onSubmit={handleActionForm}>
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 bg-gradient-to-r from-[#6069d3ef] to-[#67f6f3c9]">
                        <h3 className="text-2xl text-white font-semibold">
                            {" "}
                            Take a Action
                        </h3>
                        <p
                            className="px-3 py-1 ml-auto bg-red-500 text-white text-lg rounded-md font-medium hover:bg-red-300 cursor-pointer"
                            onClick={handleClose}
                        >
                            X
                        </p>
                    </div>

                    {
                        user?.role === 'admin' &&
                        <div className='my-2 py-2 px-4 bg-white rounded'>
                            <h1>Assigned To :</h1>
                            <div>
                                <select
                                    name="assignedTo"

                                    defaultValue={data?.assignedTo}
                                    className='my-1 w-full p-2 rounded bg-teal-100'>
                                    {
                                        counsellor?.length && counsellor?.map((assigned, index) =>
                                            <option

                                                key={index}
                                                selected={assigned.fullName === data?.assignedTo}
                                                value={assigned?.fullName}>
                                                {assigned?.fullName}</option>
                                        )
                                    }
                                </select>
                            </div>
                        </div>
                    }


                    <div className='my-2 py-2 px-4 bg-white rounded'>
                        <h1>Status :</h1>
                        <div>
                            <select
                                name="status"
                                defaultValue={data?.status}
                                className='my-1 w-full p-2 rounded bg-teal-100'>
                                {
                                    status?.length &&
                                    status?.map((stats, index) =>
                                        <option
                                            selected={stats === data?.status}
                                            key={index}
                                            value={stats}>
                                            {stats}
                                        </option>
                                    )
                                }
                            </select>
                        </div>
                    </div>
                    <div className='my-2 py-2 px-4'>


                        <button
                            type='submit'
                            className="bg-secondary   md:px-7 lg:px-7 px-3 py-2 text-white font-medium rounded-full "
                        >
                            Submit
                        </button>
                    </div>
                </form>

            </Box>

        </Modal>
    );
};

export default ContactDetailsModal;