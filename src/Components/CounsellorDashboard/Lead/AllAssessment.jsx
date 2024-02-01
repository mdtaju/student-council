import React, { useState } from 'react';
import SnackMessage from '../../SnackBarMessage/SnackMessage';

function AllAssessmentCounsellor() {
      const [open, setOpen] = useState(false);
      const [message, setMessage] = useState({
            error: false,
            message: "",
      });
      return (
            <div className="w-full min-h-screen grid place-items-center">
                  <SnackMessage open={open} setOpen={setOpen} message={message} />
                  <div className="w-full sm:w-[600px] md:w-[960px] h-auto p-6 bg-white shadow-md rounded-md">
                        <h1 className="text-center text-2xl font-semibold text-gray-700 mb-6">
                              All Assessment
                        </h1>
                  </div>
            </div>
      )
}

export default AllAssessmentCounsellor