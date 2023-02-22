import React from 'react';
import "./index.css";

function ChildComponent({ message }) {
    return (
        <div className="child-component-section">
            <h1 className="message-text">Message: { message }</h1>
        </div>
    );
}

export default ChildComponent;