import React from 'react'

const Greet = (props) => {
    console.log(props)
    // return <h1>Hello World</h1>
    // props.name = "vrushabh"          // props are immutable 

    return(
        <div>
           <h1>Hello {props.name} likes {props.heroName}</h1>
           {props.children}
        </div>
    )

}

export default Greet