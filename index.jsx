import * as React from 'react';

import ReactDOM from 'react-dom';

import { FullScreenOverlay } from './react-revolution/public/react-revolution';

import './react-revolution/sass/rr-full-screen-overlay.scss';
/**
 * Render it to the html while testing
 */
class App extends React.Component {
    constructor(props) {
        super(props);
        this.toggleOverlay = this.toggleOverlay.bind(this);

        this.state = {
            visible: false
        }
    }

    toggleOverlay(){
        this.setState({ 
            visible: !this.state.visible
        });
    }

    render() {
        const { visible } = this.state;

        return (
            <span style={
                {
                    display: 'block',
                    position: 'relative',
                    width: '300px'
                }
            }>
            <button onClick={ (e) => this.toggleOverlay() }>
                toggle
            </button>
             <FullScreenOverlay
                closeOnClick={true}
                closeOnEsc={true}
                animation={true}
                animationType='right' // scale, left, top, right, bottom, 
                dimmed={true}
                closeCallback={this.toggleOverlay}
                display={visible}
                disableScroll={true}
                iconClose={true}
                data={
                    <p>11111</p>
                }
            />
            </span>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));