import React from 'react'

export default function DashCard(props) {

if (!props.tune.spouse){
    return 'Single Pringle Tune!'
}

    return (
        <div class='tuneCard'>
            <h3>{props.tune.name}</h3>
            <img src={props.tune.img} alt={props.tune.name} />
            <p>Birthday:{props.tune.birthDay}</p>
            <p>Spouse:{props.tune.spouse}</p>
            <p>Voiced by:{props.tune.voice}</p>
        </div>
    )
}
