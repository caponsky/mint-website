import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

export default function Mint() {

  let navigate = useNavigate();

  return (
    <div>
      <div className='moving-background-three'>the About page</div>
      <div>
        <Button 
          className='btn_back_2'
          onClick={() => {navigate('/')}}
        >
          Back
        </Button>
      </div>
    </div>
  )
}
