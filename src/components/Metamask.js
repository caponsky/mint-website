import React from 'react';
import metamask from ".././assets/social-media-icons/MetaMask_Fox.svg.png";
import { Link, Box, Button } from '@chakra-ui/react';
import truncateEthAddress from './truncate';

export default function Metamask(props) {

   const {
        accounts,
        setAccounts
    } = props

    const isConnected = Boolean(accounts[0]);

    async function connectAccount () {
        if(window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            })
            setAccounts(accounts);
        }
    }

    function handleConnect () {
        if(window.ethereum) {
            if(isConnected) {
                return  <Box className='cntd'>
                            Connected {truncateEthAddress(accounts[0])}
                        </Box>
            }
                return  <Button 
                            className='btn_connect'
                            onClick={connectAccount} >
                            <img src={metamask} alt='' width='30px' height='30' />
                        Connect
                        </Button>
            
            } 
            return <Link 
                        href='https://metamask.io/download/' 
                        textDecoration='none' 
                        target='_blank'
                        rel='noreferrer'>
                    <Button 
                        className='btn_install' > 
                        Install
                        <img src={metamask} alt='' width='30px' height='30' />
                    </Button>
                    </Link>
        }

  return (
    <>{handleConnect()}</>
  )
}
