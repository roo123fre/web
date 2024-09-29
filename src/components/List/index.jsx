import React from 'react'
import Accordion from '../Accordion';

const List = ({ title }) => {
    console.log({ title })

    const items = [
        {
            id: 1,
            title: 'First Item',
            text: 'This is the first item description.'
        },
        {
            id: 2,
            title: 'Second Item',
            text: 'This is the second item description.'
        },
        {
            id: 3,
            title: 'Third Item',
            text: 'This is the third item description.'
        },
        {
            id: 4,
            title: 'Fourth Item',
            text: 'This is the fourth item description.'
        },
        {
            id: 5,
            title: 'Fifth Item',
            text: 'This is the fifth item description.'
        }
    ];

    console.log(items);
    return (
        <div>
            <h2>{title}</h2>
            <ul>
                {
                    items.map(({id, title, text}) => (

                        <li key={id}>
                            <Accordion title={title} text={text} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default List