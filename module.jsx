import * as React from 'react';

import ReactDOM from 'react-dom';

import { LoadOnScroll, LoadingBoxTop, uuid } from './react-revolution/public/react-revolution';

/**
 * Render it to the html while testing
 */

import './react-revolution/sass/rr-menu-click-horizontal.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.callback = this.callback.bind(this);
        this.countCallbacks = 0;
    }

    callback(){
        this.countCallbacks += 1;

        if(4 === this.countCallbacks){
            return '🛑';
        }

        if(5 === this.countCallbacks){
            return 'break';
        }

        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                const DATE = new Date();
    
                resolve(
                    <div>
                        {
                            [...this.randomData()].map( i => <p key={uuid()}>{i}</p>)
                        }
                    </div>
                );
            }, 1000);
        })
    }

    randomData(){
        const array = [];

        for(let x = 0; x <= 30; x++){
            array.push(uuid());
        }

        return array;
    }

    render() {
        return (
            <span>
                <LoadOnScroll
                    minify={30}
                    callback={this.callback}
                    loadMoreLoadingIcon={<LoadingBoxTop text='Loading...'/>}
                    data={
                        <div>
                            {
                                [...this.randomData()].map( i => <p key={uuid()}>{i}</p>)
                            }
                        </div>
                    }
                />
            </span>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));