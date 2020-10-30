import React from "react";
import { clearError, showPassword } from "../useful_functionality/form"

export const PasswordInput = (props) => (
    <div style={{ display: "inline-block" }}>
        <input className="input_content" id={props.id} type="password" placeholder="password"
            style={{ marginRight: 0, width: "210px" }}
            onChange={ e => (props.setPassword(e.target.value), clearError()) }
        />
        <button className="eye_button" type="button"
            onClick={e => showPassword(props.id, "eye" + props.id) }>
            
            <img className="eye_image"
                id={"eye" + props.id}
                src={require("../images/eye_slash.png")}
            />
        </button>
    </div>
)