import React from 'react';
import './Antora.css'

function Antora() {
    return (
        <div style={{ height: "1080px" }}>
            <iframe src="http://localhost:8082/Antora/"></iframe>
        </div>
    );
}

export default Antora;