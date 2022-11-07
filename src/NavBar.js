import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Flex, Image, Link, Spacer } from '@chakra-ui/react';
import Facebook from "./assets/social-media-icons/facebook_32x32.png";
import Twitter from "./assets/social-media-icons/twitter_32x32.png";
import Email from "./assets/social-media-icons/email_32x32.png";
import Metamask from "./assets/social-media-icons/MetaMask_Fox.svg.png";
import truncateEthAddress from './truncate';

export default function NavBar(props) {

    let navigate = useNavigate();

    const {
        accounts,
        setAccounts
    } = props
    const isConnected = Boolean(accounts[0])

    async function connectAccount () {
        if(window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            })
            setAccounts(accounts);
        }
    }

  return (
    <Flex justify="space-between" align='center' padding='30px'>
        <Flex justify='space-around' width='40%' padding='0 75px'>
            <Link href='https://www.facebook.com'>
                <Image 
                    src={Facebook} 
                    boxSize='42px' 
                    margin='0 15px' 
                    className='socialmedia'/>
            </Link>
            <Link href='https://www.twitter.com'>
                <Image 
                    src={Twitter} 
                    boxSize='42px' 
                    margin='0 15px' 
                    className='socialmedia'/>
            </Link>
            <Link href='https://www.gmail.com'>
                <Image 
                    src={Email} 
                    boxSize='42px' 
                    margin='0 15px' 
                    className='socialmedia'/>
            </Link>
        </Flex>
        
        <Flex justify="space-between" align='center' padding='30px' width='40%'>
            <Box 
                margin='0 15px' 
                cursor='pointer' 
                className='menu'
                onClick={() => {navigate('/about')}}
            >
                About
            </Box>
            <Spacer />
            <Box 
                margin='0 15px' 
                cursor='pointer' 
                className='menu'
                onClick={() => {navigate('/mint')}}
            >
                Mint
            </Box>
            <Spacer />
            <Box                 
                margin='0 15px' 
                cursor='pointer' 
                className='menu'
                onClick={() => navigate('/Team')}
            >
                Team
            </Box>
            <Spacer />      
            {isConnected ? (<Box margin='0 15px' className='cntd'>Connected {truncateEthAddress(accounts[0])}</Box>) : (
            <Button className='btn_connect'
                    onClick={connectAccount}
            >
                <img src={Metamask} alt='' width='30px' height='30' />
                Connect
            </Button>
        )}
        </Flex>
     
    </Flex>
  )
}
