import React from 'react';
import { useState, useEffect } from 'react';
import { ethers, BigNumber } from 'ethers';
import NFT from './NFT.json';
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';

const NFTAddress = "0xde52aEe09f6f4EeB843B5a5500e2EE005B640F2B";

export default function MainMint(props) {
    
    const [mintAmount, setMintAmount] = useState(1);
    const [isConnected, setIsConnected] = useState(false);

    console.log('rerender MainMint')

    useEffect (() => {
        console.log(props)
        if(props.accounts && props.accounts[0] && !isConnected) {
            setIsConnected(true);
        } 
        }, [props, isConnected])
 
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
    <Flex className='mint_fullsection' justify='center' align='center'  paddingBottom='150px' >
        <Box width='520px'>
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
                <Text className='main_text' >
                    In order to mint we suggest that one uses 
                    an ethereum test network wallet (e.g. Goerli),
                     otherwise money will be lost   
                </Text>
            )}
        </Box>
    </Flex>
  )
}
