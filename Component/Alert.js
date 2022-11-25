import React from 'react'

export default function Alert(props) {

    const captilize =(word)=>{
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1)
    }
    return (
        <div className = "container" style = {{height: "50px",width : "100%"}}>
       {props.alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
  <strong>{captilize(props.alert.type)}</strong>:{props.alert.msg}
</div>}
</div>
    )
}
