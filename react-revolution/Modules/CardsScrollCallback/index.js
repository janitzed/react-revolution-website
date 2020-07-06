import * as React from 'react';

import uuid from '../internalFunctions/uuid';

import getDerivedStateFromPropsCheck from '../internalFunctions/getDerivedStateFromPropsCheck';

class CardsScrollCallback extends React.Component {

    constructor(props) {
        super(props);
        this.scrollEvent = this.scrollEvent.bind(this);
        this.buildData = this.buildData.bind(this);
        this.loadMore = this.loadMore.bind(this);
        this.removeScrollEvent = this.removeScrollEvent.bind(this);

        this.state = {
            /**
             * App
             */
            dataJsx: [],
            loading: false,
            /**
             * User
             */
            defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-cards',
            itemsPerLine: props.itemsPerLine && typeof 8 == typeof props.itemsPerLine ? props.itemsPerLine : 3,
            data: props.data && typeof [] == typeof props.data ? props.data : [],
            loadMoreCallback: (props.loadMoreCallback && 'function' == typeof props.loadMoreCallback) ? props.loadMoreCallback : undefined,
            loadMoreLoadingIcon: props.loadMoreLoadingIcon ? props.loadMoreLoadingIcon : ''
        };
    }

    /**
     * Force re-rendering of this component based
     * on keysChangeListners keys
     * @param {object} props 
     * @param {object} state 
     */
    static getDerivedStateFromProps(props, state) {
        if (getDerivedStateFromPropsCheck(['defaultClass', 'itemsPerLine', 'data', 'loadMoreCallback', 'loadMoreLoadingIcon'], props, state)) {
            return {
                defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-cards',
                itemsPerLine: props.itemsPerLine && typeof 8 == typeof props.itemsPerLine ? props.itemsPerLine : 3,
                data: props.data && typeof [] == typeof props.data ? props.data : [],
                loadMoreCallback: (props.loadMoreCallback && 'function' == typeof props.loadMoreCallback) ? props.loadMoreCallback : undefined,
                loadMoreLoadingIcon: props.loadMoreLoadingIcon ? props.loadMoreLoadingIcon : '',
                dataJsx: state.dataJsx
            };
        }

        return null;
    }


    componentDidMount(){
        const { data } = this.state;

        if (this.cardsReference) {
            this.cardsReference.removeEventListener('scroll', this.scrollEvent);
            this.cardsReference.addEventListener('scroll', this.scrollEvent);
        }

        this.buildData(data);
    }

    componentWillUnmount(){
        this.removeScrollEvent();
    }

    removeScrollEvent(){
        if (this.cardsReference) {
            this.cardsReference.removeEventListener('scroll', this.scrollEvent);
        }
    }

    loadMore(){
        let { loadMoreCallback } = this.state;
        let data = [];
        
        if(loadMoreCallback){

            this.setState({
                loading: true
            }, async () => {
                data = await (loadMoreCallback)();
                /**
                 * No more items to load
                 */
                if(!data || 0 == data.length){
                    this.removeScrollEvent();
                    this.setState({ loading: false });
                }
                else{
                    this.buildData(data);
                }
            });
        }
        else{
            this.removeScrollEvent();
            this.setState({ loading: false });
        }
    }

    buildData(data = []){
        let { dataJsx, itemsPerLine } = this.state;
        let singleLines = [];
        let c = 0;

        for(let x = 0; x <= data.length-1; x++){
    
            const { title, content, footer } = data[x];
            c++;

            singleLines.push(
                <div key={uuid()} className="card flex flex-column">
                    {
                        title && 
                        <div className="title">
                            {
                                title
                            }
                        </div>
                    }
                    {
                        content && 
                        <div className="content">
                            {
                                content
                            }
                        </div>
                    }
                    {
                        footer && 
                        <div className="footer">
                            {
                                footer
                            }
                        </div>
                    }
                </div>
            );

            if(c == itemsPerLine){

                dataJsx.push(
                    <div key={uuid()} className="cards-group flex">
                        {
                            singleLines
                        }
                    </div>
                );

                singleLines = [];
                c = 0;
            }
        }

        if(singleLines.length){
            dataJsx.push(
                <div key={uuid()} className="cards-group flex">
                    {
                        singleLines
                    }
                </div>
            );
            singleLines = [];
            c = 0;
        }

        this.setState({ 
            dataJsx,
            loading: false
        });
    }

    scrollEvent(e){
        if(this.cardsReference){
            /**
             * Bottom reached
             */ 
            if (this.cardsReference.offsetHeight + this.cardsReference.scrollTop >= this.cardsReference.scrollHeight) {
                this.loadMore(); 
            }
        }
    }

    
    render() {
        const { dataJsx, defaultClass, loading, loadMoreLoadingIcon } = this.state;
        
        return (
            <div 
                ref={ node => this.cardsReference = node}
                className={defaultClass}
            >
                {
                    loading && loadMoreLoadingIcon   
                }
                {
                    dataJsx && dataJsx.map( i => i)
                }
            </div>
        );
    }
}

export default CardsScrollCallback;