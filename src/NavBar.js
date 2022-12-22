import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, Box, Flex, Image, Spacer, IconButton } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import Twitter from "./assets/social-media-icons/twitter.png";
import Github from "./assets/social-media-icons/github.png";
import Ethereumpng from "./assets/social-media-icons/ethereum.png"
import Metamask from './components/Metamask';


export default function NavBar(props) {

    const navigate = useNavigate();
    const [display, changeDisplay] = useState('none')
  
  return (
    <div>
        <Flex justify="space-between" align='center' padding='15px' className='nav' >
            <Flex justify='space-around' width='40%' padding='0 75px' >
                <Link href='https://github.com/caponsky/mint-website' target="_blank" rel='noreferrer'>
                    <Image 
                        src={Github} 
                        boxSize='42px' 
                        margin='0 15px' 
                        className='socialmedia'/>
                </Link>
                <Link href='https://www.twitter.com' target="_blank" rel='noreferrer'>
                    <Image 
                        src={Twitter} 
                        boxSize='42px' 
                        margin='0 15px' 
                        className='socialmedia'/>
                </Link>
                <Link href='https://rinkeby.etherscan.io/address/0xde52aEe09f6f4EeB843B5a5500e2EE005B640F2B' target="_blank" rel='noreferrer'>
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
                    onClick={() => navigate('/')}
                >
                    City punks
                </Box>
                <Box 
                    margin='0 15px' 
                    cursor='pointer' 
                    className='menu'
                    onClick={() => navigate('/about')}
                >
                    About
                </Box>
                <Spacer />
                <Box 
                    margin='0 15px' 
                    cursor='pointer' 
                    className='menu'
                    onClick={() => navigate('/roadmap')}
                >
                    Road map
                </Box>
                <Spacer />
                <Box                 
                    margin='0 15px' 
                    cursor='pointer' 
                    className='menu'
                    onClick={() => navigate('/team')}
                >
                    Team
                </Box>
                <Spacer />   
                <Metamask accounts={props.accounts} setAccounts={props.setAccounts}/>
            </Flex>
        </Flex>
        <Flex>
        <IconButton 
            className='btn_hambrg'
            aria-label="Open Menu"
            icon={<HamburgerIcon />}
            onClick={() => changeDisplay('flex')}
        />
        </Flex>

        <Flex className='mobile_nav' display={display}>
            <Flex>
                <IconButton 
                    className='btn_hambrg'
                    aria-label='Close Menu'
                    icon={<CloseIcon />}
                    onClick={() => changeDisplay('none')}
                />
            </Flex>
            <Flex className='nav_mobile_container' flexDir='column' align='center' >              
                <Box 
                    paddingBottom='20px'
                    onClick={() => navigate('/')}
                >
                    City punks
                </Box>
                <Box 
                    padding='20px 0' 
                    onClick={() => navigate('/about')}
                >
                    About
                </Box>
                <Spacer />
                <Box 
                    padding='20px 0' 
                    onClick={() => navigate('/roadmap')}
                >
                    Road map
                </Box>
                <Spacer />
                <Box                 
                    padding='20px 0' 
                    onClick={() => navigate('/team')}
                >
                    Team
                </Box>
                <Flex justify='space-around' padding='20px'>
                    <Link href='https://github.com/caponsky/mint-website' target="_blank" rel='noreferrer'>
                        <Image 
                            src={Github} 
                            boxSize='30px' 
                            margin='0 15px' 
                            className='socialmedia'/>
                    </Link>
                    <Link href='https://www.twitter.com' target="_blank" rel='noreferrer'>
                        <Image 
                            src={Twitter} 
                            boxSize='30px' 
                            margin='0 15px' 
                            className='socialmedia'/>
                    </Link>
                    <Link href='https://rinkeby.etherscan.io/address/0xde52aEe09f6f4EeB843B5a5500e2EE005B640F2B' target="_blank" rel='noreferrer'>
                        <Image 
                            src={Ethereumpng} 
                            boxSize='30px' 
                            margin='0 15px' 
                            className='socialmedia'/>
                    </Link>
                </Flex>
                <Box>
                <Metamask accounts={props.accounts} setAccounts={props.setAccounts}/>
                </Box>
            </Flex>
        </Flex>
    </div>
  )
}
