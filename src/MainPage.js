import React from 'react';
import './App.css';
import MainMint from './MainMint';
import { Text, Flex, Box} from '@chakra-ui/react';
import Metamask from './components/Metamask';


export default function MainPage(props) {

  return (
    <div >
      <Flex className='for_mobile' justify='center' align='center' marginTop='50px'>
      <Metamask accounts={props.accounts} setAccounts={props.setAccounts}/>
      </Flex>
      <Flex className='main_content' justify='center' align='center' height='50vh'>
        <Box marginTop='50px' width='520px'>
            <Text className='citypunks'>
                City Punks
            </Text>
            <Text className='description_text' >
              It's the end of 2022 and no one is winning with NFT's, 
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
