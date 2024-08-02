import React from 'react';

const IframeComponent = (rlink) => {
    return (
        <div style={{ border: '2px solid #ddd', margin: '20px', padding: '10px' }}>
            <iframe
               src={rlink}
               title="YouTube Video"
               width="100vw"
               height="100vh"
                style={{ border: 'none' }}
            ></iframe>
        </div>
    );
};

export default IframeComponent;
