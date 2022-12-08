import React from 'react'
import { Box, Text, Tag } from '@chakra-ui/react';

export default function TimelineItem (data) {

  return (
    <Box className='timeline_item'>
        <Box className='timeline_item_content'>
            <Tag 
                className='tag'
                style={{ background: data.category.color }}>
                    {data.category.tag}
            </Tag>
            <time>{data.date}</time>
            <Text 
                letterSpacing='-5.5%'
                fontFamily='VT323'
                textShadow='0 1px 1px #000000'
                padding='0 20px'
            >
                {data.text}
            </Text>
            {data.link && (
                <a 
                    href = {data.link.url}
                    target = '_blank'
                    rel='noreferrer'
                >
                    {data.link.text}
                </a>
            )}
            <Tag className = 'circle'/>
        </Box>
    </Box>
  )
}
