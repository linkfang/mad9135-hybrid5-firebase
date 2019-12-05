import React from 'react'

export default function ModalWindow(props) {
    return (
        <div style={{position: "fixed", bottom: 0, top: 0, left: 0, right: 0, 
        backgroundColor: "hsla(100, 0%, 0%, 0.3)", display: "flex", justifyContent: "center",
        alignItems: "center"}}
        >
            <div style={{backgroundColor: "white", borderRadius:"4px", width: "350px", height: "100px", display: "flex", justifyContent: "center",
            alignItems: "center", cursor: "default"}}>

                <input style={{marginRight:"10px"}}
                onChange={ props.handleChange }
                />

                <span 
                style={{borderRadius:"4px", color: "white", marginRight:"10px", 
                backgroundColor: "green", padding: "3px 6px", cursor: "pointer"}}
                onClick={ props.editTodo }
                >Confirm</span>

                <span style={{borderRadius:"4px", color: "white", backgroundColor: "gray", 
                padding: "3px 6px", cursor: "pointer"}}
                onClick={ props.hideOverlay }
                >Cancel</span>

            </div>
        </div>
    )
}
