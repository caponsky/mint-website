import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Flex, Image, Link, Spacer } from '@chakra-ui/react';
import Twitter from "./assets/social-media-icons/twitter_32x32.png";
import Metamask from "./assets/social-media-icons/MetaMask_Fox.svg.png";
import Github from "./assets/social-media-icons/github.png";
import Ethereumpng from "./assets/social-media-icons/ethereum.png"
import truncateEthAddress from './truncate';


export default function NavBar(props) {

    const {
        accounts,
        setAccounts
    } = props

    let navigate = useNavigate();

    const isConnected = Boolean(accounts[0])

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
                return <Box 
                    className='cntd'
                    >Connected {truncateEthAddress(accounts[0])}
                </Box>
            }
                return <Button 
                    className='btn_connect'
                    onClick={connectAccount} >
                    <img src={Metamask} alt='' width='30px' height='30' />
                    Connect
                </Button>
            
            } 
            return <Link href='https://metamask.io/download/' textDecoration='none' target='_blank'>
                <Button 
                    className='btn_install' > 
                    Install
                    <img src={Metamask} alt='' width='30px' height='30' />
                </Button>
            </Link>
        }

  return (
    <Flex justify="space-between" align='center' padding='30px'>
        <Flex justify='space-around' width='40%' padding='0 75px'>
            <Link href='https://github.com/caponsky/mint-website'>
                <Image 
                    src={Github} 
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
            <Link href='https://rinkeby.etherscan.io/address/0xde52aEe09f6f4EeB843B5a5500e2EE005B640F2B'>
                <Image 
                    src={Ethereumpng} 
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
                Road map
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
            {handleConnect()}
            {/*{window.ethereum? 
                (isConnected ? 
                    (<Box 
                        margin='0 15px' 
                        className='cntd'>
                        Connected {truncateEthAddress(accounts[0])}
                    </Box>
                    ) : (
                    <Button className='btn_connect'
                            onClick={connectAccount}
                    >
                        <img src={Metamask} alt='' width='30px' height='30' />
                        Connect
                    </Button>
                )) : (
                    <Link href='https://metamask.io/download/' textDecoration='none'>
                        <Button 
                            className='btn_install' > 
                            Install
                            <img src={Metamask} alt='' width='30px' height='30' />
                        </Button>
                    </Link>
                )}*/}
        </Flex>
    </Flex>
  )
}
