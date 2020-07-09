import * as React from 'react';

import ReactDOM from 'react-dom';

import { InputSuggestion } from './react-revolution/public/react-revolution';

import './react-revolution/sass/rr-input-suggestion.scss';
/**
 * Render it to the html while testing
 */
class App extends React.Component {
    constructor(props) {
        super(props);
        this.setInputValue = this.setInputValue.bind(this);

        this.state = {
            inputValue: '',
            suggestions: this.randomEmailGenerator()
        }
    }

    randomEmailGenerator(items = 10){
        const generated = [];

        const firstnames = [
            'Bernd', 'David', 'Patrick',
            'Sandra', 'Petra', 'Wioleta',
            'Alex', 'John', 'Johan',
            'Viktor', 'Max'
        ];

        const lastnames = [
            'Musstermann', 'Reiner', 'Klar',
            'Schreiner', 'Jacobson'
        ];

        const domains = [
            'de', 'pl', 'com', 'ru'
        ];

        for(let x = 0; x <= items; x++){
            const firstname = firstnames[Math.floor(Math.random() * firstnames.length)];
            const lastname = lastnames[Math.floor(Math.random() * lastnames.length)];
            const domain = domains[Math.floor(Math.random() * domains.length)];
            generated.push(`${firstname}.${lastname}@${domain}`);
        }
        return generated;
    }

    setInputValue(inputValue) {
        this.setState({
            inputValue: inputValue
        });
    }

    userSelection(data){
        console.log(data);
    }

    render() {
        const { suggestions, selected, inputValue } = this.state;

        return (
            <span style={
                {
                    display: 'block',
                    position: 'relative',
                    width: '90%'
                }
            }>
                <InputSuggestion
                    placeholder='Placeholder dasd asd asd as das ...'
                    suggestions={suggestions}
                    selected={selected}
                    callback={this.setInputValue}
                    value={inputValue}
                    getValueFromCallback={false}
                    callbackSelection={this.userSelection}
                    inputProps={{}}
                    type='text'
                    emptySuggestionAfterSelection={false}
                    sortSuggestions='asc' // asc, desc
                    sortSelected='asc' // asc, desc
                />
            </span>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));