import React from 'react';

// import './Card.css';

const Card = (props) => {
    const {name, email, id} = props;
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow shadow-5'>
            <img src={`https://robohash.org/${id}?size=200x200`} alt={props.name}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card;
