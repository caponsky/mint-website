import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import Timeline from '../components/Timeline';
import { Text, Box } from '@chakra-ui/react';

export default function Mint() {

  let navigate = useNavigate();

  return (
    <div className='overlay'>
      <Box className='roadmap_header'>
        <Text className='roadmap_header_text'>The road to perdition</Text>
      </Box>  
      <div className='moving-background-one'></div>
      <div><Timeline /></div>
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
