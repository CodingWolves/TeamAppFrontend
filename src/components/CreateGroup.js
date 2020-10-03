import React, { useState } from "react";

import { Header } from "./Header"

export const CreateGroup = () => {

    return (
        <div>
            <Header isSignedIn={true} isInCreateGroup={true} />

            <span className="title">Create group</span>

            <form className="form_content">
                <input className="input_content" required id="title"
                    placeholder="course"
                    // onChange={ e => (), clearError()) }
                />
                <input className="input_content" required id="title"
                    placeholder="field"
                    // onChange={ e => (), clearError()) }
                />
                <input className="input_content" required id="title"
                    placeholder="where"
                    // onChange={ e => (), clearError()) }
                />
                <input className="input_content" required id="title"
                    placeholder="when"
                    // onChange={ e => (), clearError()) }
                />
                <input className="input_content" required id="title"
                    placeholder="long"
                    // onChange={ e => (), clearError()) }
                />
                <input className="input_content" required id="title"
                    placeholder="participants number"
                    // onChange={ e => (), clearError()) }
                />
                <input className="input_content" required id="title"
                    placeholder="description"
                    // onChange={ e => (), clearError()) }
                />

                <br />

                <button className="form_button" /*onClick={ create }*/>Create group</button>
            </form>
        </div>
    )
}