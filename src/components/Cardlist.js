import React from 'react';
import Card from './Card';

const Cardlist = ({ robots }) => {
    return (
        <>
            {
                robots.map((users, i) => {
                    return (
                        <Card 
                            key={i}
                            id={users.id} 
                            name={users.name} 
                            email={users.email} 
                            username={users.username}
                        />
                    )
                })
            }
        </>
    );
};

export default Cardlist;