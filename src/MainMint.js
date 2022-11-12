import React from 'react';
import { useState } from 'react';
import { ethers, BigNumber } from 'ethers';
import NFT from './NFT.json';
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';

const NFTAddress = "0xde52aEe09f6f4EeB843B5a5500e2EE005B640F2B";

export default function MainMint(props) {
    const {
        accounts,
    } = props

    const [mintAmount, setMintAmount] = useState(1);

    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if(window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                NFTAddress,
                NFT.abi,
                signer
            );
            try {
                const response = await contract.mint(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.02 * mintAmount).toString())
                });
                console.log('response: ', response)
            } catch (err) {
                console.log("error: ", err)
            }
        }
    }

    

    const handleMinus = () => {
        if(mintAmount <= 1) return;
            setMintAmount(mintAmount - 1);
        
    }

    const handlePlus = () => {;
        if(mintAmount >= 3) return;
            setMintAmount(mintAmount + 1);
        
    }

  return (
    <Flex justify='center' align='center' height='100vh' paddingBottom='150px'>
        <Box width='520px'>
        <div>
            <Text className='trollpunks'>
                Troll Punks
            </Text>
            <Text
                fontSize='30px'
                letterSpacing='-5.5%'
                fontFamily='VT323'
                textShadow='0 2px 2px #000000'
                padding='0 30px'
            >
                It's 2022 and no1 is winning with NFT's, 
                therefore here is another NFT collection 
                for you to spend some money like a retarded 
                degenerate, and without giving any fucks.
            </Text>
        </div>
        {isConnected ? (
            <div>
                <Flex justify='center' align='center'>
                    <Button className='btn_plus_minus' onClick={handleMinus} >
                        -
                    </Button>
                    <Input 
                        type='number'
                        className='input_mint'
                        readOnly
                        value={mintAmount}
                    />
                    <Button className='btn_plus_minus' onClick={handlePlus} >
                        +
                    </Button>
                </Flex>
                    <Button className='btn_mint' onClick={handleMint} >
                        Mint
                    </Button>
            </div>
        ) : (
                <Text
                    marginTop='70px'
                    fontSize='30px'
                    letterSpacing='-5.5%'
                    fontFamily='VT323'
                    textShadow='0 2px #000000'
                    color='	#a70b0b'
                    padding='20px'
                >
                    If one wants to mint we suggest that one uses 
                    an ethereum test network wallet (e.g. Goerli),
                     otherwise money will be lost   
                </Text>
            )}
        </Box>
    </Flex>
  )
}
