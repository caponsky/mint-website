import React from 'react'
import TimelineItem from './TimelineItem';

export default function Timeline () {

    const data = 
        [
            {
                text: 'Like every (un)successful project we have raised the $$ to begin this unnecesary collection',
                date: '1 jan 2022',
                category: {
                    tag: 'Start',
                    color: 'green'
                },
                link : {
                    url : "http://google.com",
                    text: 'Read more'
                },
                id: 1
            },
            {
                text: 'Buiding the team to make this wonder possible ',
                date: '29 feb 2022',
                category: {
                    tag: 'Team',
                    color: 'green'
                },
                link : {
                    url : "http://google.com",
                    text: 'Read more'
                },
                id: 2
            },
            {
                text: 'The contract is ready and the mint is live. Remember that this is an unlimited collection with an unlimited mint window ',
                date: '1 jul 2022',
                category: {
                    tag: 'Mint',
                    color: 'green'
                },
                link : {
                    url : "http://google.com",
                    text: 'Read more'
                },
                id: 3
            },
            {
                text: 'description4',
                date: 'date4',
                category: {
                    tag: 'ceva',
                    color: 'red'
                },
                link : {
                    url : "http://google.com",
                    text: 'Read more'
                },
                id: 4
            },
            {
                text: 'description5',
                date: 'date5',
                category: {
                    tag: 'ceva',
                    color: 'red'
                },
                link : {
                    url : "http://google.com",
                    text: 'Read more'
                },
                id: 5
            },
            {
                text: 'description6',
                date: 'date6',
                category: {
                    tag: 'ceva',
                    color: 'red'
                },
                link : {
                    url : "http://google.com",
                    text: 'Read more'
                },
                id: 6
            },
        ];


    const TimelineComp = data.map ( item => {
        return <TimelineItem data = {data} key={item.id} {...item} />
    })

  return (
    
    <div className='timeline_container'>
        {TimelineComp}
    </div>
    
  )
}
