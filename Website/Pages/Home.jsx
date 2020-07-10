
import * as React from 'react';

import trans from '../Translations/trans';

import { TextWriter } from '.././../react-revolution/public/react-revolution';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <div className="ContentBody">
                <div className="Home">
                    <div className="main-title-box">
                        <div className="main-title">
                            <h1>
                                React 
                                <TextWriter
                                    text=' Divcreator'
                                    speed={100}
                                    pipeDisplay={true}
                                    pipeChar={''}
                                    pipeSite='right' // right, left
                                    pipePersist={false}
                                    timeout={500}
                                    replaces={
                                        [
                                            {
                                                from: 1,
                                                to: ' Divcreator'.length-1,
                                                replace: 'Revolution'
                                            }
                                        ]
                                    }
                                />
                            </h1>
                            <h2>
                                {
                                    trans('openSourceText')
                                }
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
