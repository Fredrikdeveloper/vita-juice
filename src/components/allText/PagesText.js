import React from 'react'

const PagesText = ({info, animation}) => {
    return (
        <div className="all-green-big-text">
            <h1 data-aos={animation}>{info}</h1>
        </div>
    )
}

export default PagesText