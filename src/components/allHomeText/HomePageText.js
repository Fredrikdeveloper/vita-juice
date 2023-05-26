import React from 'react'

const HomePageText = ({info, animation}) => {
    return (
        <div className="big-text-body">
            <h2 data-aos={animation} className="dotted">{info}</h2>
        </div>
    )
}

export default HomePageText