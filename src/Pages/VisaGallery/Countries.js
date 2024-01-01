import { Container } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';

const Countries = () => {
    const { params } = useParams();
    return (
        <div className='pt-32  mx-auto '>
            <Container>
              <h1 className='my-10 font-bold text-2xl'>  Welcome to UK Country Gallery page</h1>
            </Container>
        </div>
    );
};

export default Countries;