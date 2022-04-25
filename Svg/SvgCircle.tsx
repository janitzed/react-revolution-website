import React from 'react';

const SvgCircle = (widthHeight: any = 32, color = 'rgb(69,69,69)') => {
    return (
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height={`${widthHeight}`} width={`${widthHeight}`} viewBox="0 0 122.88 122.88">
            <g>
                <path fill={`${color}`} fillRule="evenodd" clipRule="evenodd" d="M61.438,0C95.37,0,122.88,27.51,122.88,61.441S95.37,122.88,61.438,122.88 C27.509,122.88,0,95.373,0,61.441S27.509,0,61.438,0L61.438,0z M61.438,18.382c23.781,0,43.06,19.278,43.06,43.06 s-19.278,43.057-43.06,43.057c-23.779,0-43.057-19.275-43.057-43.057S37.66,18.382,61.438,18.382L61.438,18.382z" />
            </g>
        </svg>
    );
};

export default SvgCircle;
