import React from 'react';

const style = {
    backgroundColor: 'blue',
    color: 'white',
    justifyContent: 'center',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
}

export default function Header() {
    return (
        <div style={style}>
            <h1 style={{margin:0}}>JAMMMING</h1>
        </div>
    )
}