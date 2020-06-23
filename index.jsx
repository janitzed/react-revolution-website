import * as React from 'react';

import ReactDOM from 'react-dom';

import GlobalMessages from './module/source/GlobalMessages';

import addGlobalMessage from './module/source/Functions/addGlobalMessage';

import './module/source/sass/rr-global-messages.scss';

/**
 * Render it to the html while testing
 */

class App extends React.Component {
    constructor(props) {
        super(props);

        setTimeout( () => {
            addGlobalMessage('messagesApp', 'aaaaaaaa', 1);
            addGlobalMessage('messagesApp', 'bbbb', 1, 2000);
            addGlobalMessage('messagesApp', 'cccc', 1, 5000);
            addGlobalMessage('messagesApp', 'dddd', 1);
        }, 100);
    }

    render() {
        // const { data } = this.state;

        return (
            <span>
                <GlobalMessages
                    messageKey='messagesApp'
                    timer={1000}
                    codeMapping={{
                        1: {
                            title: 'GLOBAL ERROR',
                            displayErrorCode: true,
                            text: {
                                prefix: 'prefix',
                                suffix: 'suffix',
                                attributes: {},
                            },
                            close: {
                                text: 'close',
                                attributes: {},
                            },
                            link: {
                                text: 'error',
                                useTagLink: false,
                                href: 'error-messages-learn-more',
                                attributes: {
                                    target: '_blank',
                                },
                            },
                        },
                    }}
                />
            </span>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));