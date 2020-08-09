import * as React from 'react';

import ReactDOM from 'react-dom';

import { PagerDynamic, LoadingBoxTop, uuid } from './react-revolution/public/react-revolution';

//import { Breadcrumbs } from 'react-revolution';

import './react-revolution/sass/rr-pager-static.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.pageData = this.pageData.bind(this);

    this.state = {
      ignoreIndexes: []
    };
  }

  getData(site = 1) {
    let structure = [];

    for (let x = 0; x < 10; x++) {
      structure.push(
        {
          index: x,
          name: `You are on the site number ${site}`
        }
      );
    }

    return structure;
  }

  liOnClickCallback(a,b,c){
    console.info(a,b,c);
  }

  pageData(currentPage){
    return new Promise( (resolve, reject) => {
      setTimeout( () => {
        const data = this.getData(currentPage);
        resolve(data);
      }, 500)
    })
  }

  render() {
    return (
      <PagerDynamic
        getDataCallback={this.pageData}
        globalStyle={true}
        /**
         * data
         */
        data={this.getData()}
        /**
         * How many items display per page
         */
        itemsPerSite={10}
        globalCount={100}
        /**
         * Display total available items
         * passed to the module
         */
        displayTotal={true}
        /**
         * Prefix of the total elements
         */
        totalPrefix=''
        /**
         * Pages Information
         */
        displayPagesInfo={true}
        paginationTextPrefix='page'
        paginationTextMiddle='of'
        /**
         * How many sites display: 
         * - before main page
         * - after main page
         */
        prevPages={2}
        nextPages={2}
        minPages={4}
        totalPages={10}
        /**
         * Display pagination pages
         * if false then only the prev and next buttons are displayed
         */
        displayPaginationPages={true}
        /**
         * Align ul and pagination: 1, 2
         */
        alignPagination={1}
        /**
         * Align pagination items
         * 1, 2, 3, 4, 5
         */
        alignPagesItems={2}
        /**
         * Keys to display from object
         */
        display={
          [
            'name'
          ]
        }
        env='prod'
        /**
         * Display loop index as first
         * entry for each li element
         */
        displayCount={true}
        /**
         * Each new page should start with an: 1 
         * or increment the counter for each page
         */
        resetCountOnEachPage={false}
        /**
         * Buttons JSX
         */
        previousButton=''
        nextButton=''
        /**
         * Search input field
         */
        displaySearch={true}
        searchPlaceholder='Search'
        searchIcon=''
        searchSensisitve={false}
        searchOnKeys={
          [
            'name'
          ]
        }
        /**
         * Search value (working only 1 single time)
         */
        searchValue=''
        /**
         * Filter data on input field change
         */
        searchOnKeyDown={true}
        /**
         * Search title
         */
        searchTitle='search'
        paginationTitle='TITLE'
        /**
         * No data message
         */
        fallbackMounting={<LoadingBoxTop display={true} text='Loading...' />}
        fallbackLoading={<LoadingBoxTop display={true} text='Loading...' />}
        fallbackLoadingTime={100}
        fallbackNoData='NO DATA'
        fallbackNoDataSearch='NO SEARCH RESULT'
        /**
         * callbacks
         */
        inputOnChangeCallback={undefined}
        liOnClickCallback={this.liOnClickCallback}
        displayLineNumber={true}
      />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));