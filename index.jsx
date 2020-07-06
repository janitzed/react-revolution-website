import * as React from 'react';

import ReactDOM from 'react-dom';

import { LoadingBoxTop } from './react-revolution/public/react-revolution';

import './react-revolution/sass/rr-loadingboxtop.scss';

/**
 * Render it to the html while testing
 */
class App extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            moreData : [
                
            ]
        }
    }

    async addItems() {
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                resolve(
                    [
                        {
                            title: 1,
                            content:  2,
                        },
                        {
                            title: 2,
                            content:  2,
                        },
                        {
                            title: 3,
                            content:  2,
                        }, 
                    ]
                );
            }, 1500)
        });
    }

    render() {

        return (
            <span>
                <LoadingBoxTop text='Loading...' />
            </span>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));