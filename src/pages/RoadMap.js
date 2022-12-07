import React from 'react';
import Timeline from '../components/Timeline';
import { Text, Box } from '@chakra-ui/react';

export default function RoadMap() {

  return (
    <div>
      <Box className='page_header'>
        <Text className='page_header_text'>The road to perdition</Text>
      </Box>  
      <div className='moving-background-one'></div>
      <div><Timeline /></div>      
    </div>
  )
}
