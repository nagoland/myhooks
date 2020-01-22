import React from 'react' 

const User = ({name}) => {
    return (
        <>
        <input type="radio" /><label>{name}</label><br/>
        </>
    )
}

export default User