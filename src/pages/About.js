import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

export default function About() {

  let navigate = useNavigate();

  return (
    <div>
      <div className='moving-background-two'>the About page</div>
      
        <Button 
          className='btn_back_1'
          onClick={() => {navigate('/')}}
        >
          Back
        </Button>
      
    </div>
  )
}
