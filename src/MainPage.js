import React from 'react';
import './App.css';
import MainMint from './MainMint';
import { Text, Flex, Box} from '@chakra-ui/react'


export default function MainPage(props) {

  return (
    <div >
      <Flex className='for_mobile'>
        
      </Flex>
      <Flex justify='center' align='center' height='50vh'>
        <Box marginTop='150px' width='520px'>
          
            <Text className='citypunks'>
                City Punks
            </Text>
            <Text
              fontSize='30px'
              letterSpacing='-5.5%'
              fontFamily='VT323'
              textShadow='0 2px 2px #000000'
              padding='0 30px'
              margin='30px 0'
              >
              It's 2022 and no1 is winning with NFT's, 
              therefore here is another NFT collection 
              for you to spend some money in the most useless way possible.
            </Text>
          
        </Box>
      </Flex>
      <div>
        <MainMint accounts={props.accounts} setAccounts={props.setAccounts} />
      </div>
      <div className='moving-background-one'></div>
    </div>
  )
}
