import React from 'react'


export default function Background() {
    return (
        <div>
            <h1 style={headerStyle}>Todo App</h1>
        </div>
    )
}

const headerStyle = {
    color: '#000000',
    textShadow: '0px 1px 2.5px',
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}