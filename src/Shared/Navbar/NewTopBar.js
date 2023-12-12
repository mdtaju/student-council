import { Button } from '@mui/material';
import React from 'react';

const NewTopBar = () => {
    return (
        <div className=' bg-secondary text-white mb-0 hidden lg:block w-full'>
            <div className='flex justify-center items-center py-2'>
                <Button  style={{ margin: '0 8px', fontSize: '10px' , color:'white' , fontWeight: 'bold'  }}  size="small">Testimonials</Button>
                <Button  style={{ margin: '0 8px', fontSize: '10px' , color:'white' , fontWeight: 'bold'  }}   size="small">News</Button>
                <Button  style={{ margin: '0 8px', fontSize: '10px' , color:'white' , fontWeight: 'bold'  }}   size="small">Team</Button>
                <Button style={{ margin: '0 8px', fontSize: '10px' , color:'white' , fontWeight: 'bold'  }} variant="contained" color="error">Upcoming Events</Button>
                <Button style={{ margin: '0 8px', fontSize: '10px' , color:'white' , fontWeight: 'bold'  }} variant="contained" color="error">Apply Now</Button>
                <Button style={{ margin: '0 8px', fontSize: '10px' , color:'white' , fontWeight: 'bold'  }} variant="contained" color="error">Alumni Information</Button>
            </div>
        </div>
    );
};

export default NewTopBar;