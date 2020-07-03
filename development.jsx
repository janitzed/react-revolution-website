import * as React from 'react';

import ReactDOM from 'react-dom';

import CardsScrollCallback from './module/source/CardsScrollCallback';

import './module/source/sass/rr-cards.scss';

/**
 * Render it to the html while testing
 */

 /**
  * Remember to install regenerator runtime
  * 
  * 
  * npm install --save @babel/runtime 
  * npm install --save-dev @babel/plugin-transform-runtime
  *
  * .babelrc file
  * 
  *  {
  *      "presets": ["@babel/preset-env", "@babel/preset-react"],
  *      "plugins": [
  *          ["@babel/transform-runtime"]
  *      ]
  *  }
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
            }, 500)
        });
    }

    render() {

        return (
            <span>
                <CardsScrollCallback
                    itemsPerLine={3}
                    data={
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
                            {
                                title: 4,
                                content:  2,
                            },
                            {
                                title: 5,
                                content:  2,
                            },
                            {
                                title: 6,
                                content:  2,
                            },
                            {
                                title: 7,
                                content:  2,
                            },
                            {
                                title: 8,
                                content:  2,
                            },
                            {
                                title: 9,
                                content:  2,
                            },
                            {
                                title: 10,
                                content:  2,
                            },
                            {
                                title: 11,
                                content:  2,
                            },
                            {
                                title: 12,
                                content:  2,
                            },
                            {
                                title: 13,
                                content:  2,
                            },
                            {
                                title: 14,
                                content:  2,
                            },
                            {
                                title: 15,
                                content:  2,
                            }
                        ]
                    }
                    loadMoreCallback={this.addItems}
                    loadMoreLoadingIcon={
                        <p>
                            Loading
                        </p>
                    }
                />
            </span>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));