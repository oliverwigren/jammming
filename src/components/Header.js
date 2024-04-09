import React from 'react';

const style = {
    backgroundColor: 'blue',
    color: 'white',
    textAlign: 'center',
    height: '100px',
}

export default function Header() {
    return (
        <div style={style}>
            <h1 style={{margin:0}}>JAMMMING</h1>
        </div>
    )
}