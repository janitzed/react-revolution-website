import React from 'react';

const SvgChat = (widthHeight: any = 32, color = 'rgb(69,69,69)') => {
    return (
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height={`${widthHeight}`} width={`${widthHeight}`} viewBox="0 0 122.88 108.25">
            <g>
                <path fill={`${color}`} d="M51.16,93.74c13,12.49,31.27,16.27,49.59,8.46l15.37,6L111,96.13c17.08-13.68,14-32.48,1.44-45.3a44.38,44.38,0,0,1-4.88,13.92A51.45,51.45,0,0,1,93.45,80.84a62.51,62.51,0,0,1-19.73,10,71.07,71.07,0,0,1-22.56,2.92ZM74.74,36.13a6.68,6.68,0,1,1-6.68,6.68,6.68,6.68,0,0,1,6.68-6.68Zm-44.15,0a6.68,6.68,0,1,1-6.68,6.68,6.68,6.68,0,0,1,6.68-6.68Zm22.08,0A6.68,6.68,0,1,1,46,42.81a6.68,6.68,0,0,1,6.68-6.68ZM54,0H54c14.42.44,27.35,5.56,36.6,13.49,9.41,8.07,15,19,14.7,31v0c-.36,12-6.66,22.61-16.55,30.11C79,82.05,65.8,86.4,51.38,86a64.68,64.68,0,0,1-11.67-1.4,61,61,0,0,1-10-3.07L7.15,90.37l7.54-17.92A43.85,43.85,0,0,1,4,59,36.2,36.2,0,0,1,0,41.46c.36-12,6.66-22.61,16.55-30.12C26.3,4,39.53-.4,54,0ZM53.86,5.2h0C40.59,4.82,28.52,8.77,19.69,15.46,11,22,5.5,31.28,5.19,41.6A31.2,31.2,0,0,0,8.61,56.67a39.31,39.31,0,0,0,10.81,13L21,70.87,16.68,81.05l13.08-5.14,1,.42a55.59,55.59,0,0,0,10.05,3.18A59,59,0,0,0,51.52,80.8c13.22.39,25.29-3.56,34.12-10.26C94.31,64,99.83,54.73,100.15,44.4v0c.3-10.32-4.65-19.85-12.9-26.92C78.85,10.26,67.06,5.6,53.87,5.2Z" />
            </g>
        </svg>
    );
};

export default SvgChat;
