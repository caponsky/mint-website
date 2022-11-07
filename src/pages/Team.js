import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

export default function Team() {

  let navigate = useNavigate();

  return (
    <div>
      <div className='moving-background-four'>the About page</div>
      <div>
        <Button 
          className='btn_back_3'
          onClick={() => {navigate('/')}}
        >
          Back
        </Button>
      </div>
    </div>
  )
}
