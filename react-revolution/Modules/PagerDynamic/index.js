import React from 'react';

import uuid from '../../Functions/uuid';

import getDerivedStateFromPropsCheck from '../internalFunctions/getDerivedStateFromPropsCheck';

import loadStyle from '../internalFunctions/loadStyle';

let PagerStaticUpdatedCountGetDerivedStateFromPropsCheck = 0;

class PagerDynamic extends React.Component {

    constructor(props) {
        super(props);
        this.getPagerJsx = this.getPagerJsx.bind(this);
        this.getList = this.getList.bind(this);
        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this);
        this.filterData = this.filterData.bind(this);
        this.pages = this.pages.bind(this);

        const prevPages = (props.prevPages && typeof 8 === typeof props.prevPages) ? props.prevPages : 2;
        const nextPages = (props.nextPages && typeof 8 === typeof props.nextPages) ? props.nextPages : 2;
        const minPages = prevPages + nextPages + 1;
        const itemsPerSite = (props.itemsPerSite && typeof 8 === typeof props.itemsPerSite) ? props.itemsPerSite : 10;

        this.state = {
            /**
             * App
             */
            filteredData: [],
            itemsToRender: [],
            itemsToRenderJsx: [],
            currentPage: 0,
            loading: true,
            dataLoaded: false,
            loadingList: false,
            /**
             * User passed props
             */
            moduleStyle: (typeof true == typeof props.moduleStyle) ? props.moduleStyle : false,
            globalStyle: (typeof true == typeof props.globalStyle) ? props.globalStyle : false,
            addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
            defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-pager-dynamic',
            id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
            data: (props.data && typeof [] === typeof props.data) ? props.data.slice(0, itemsPerSite) : [],
            searchOnKeys: (props.searchOnKeys && typeof [] === typeof props.searchOnKeys) ? props.searchOnKeys : [],
            itemsPerSite,
            keysToRender: (props.display && typeof [] === typeof props.display) ? props.display : [],
            displayLineNumber: (typeof true === typeof props.displayLineNumber) ? props.displayLineNumber : false,
            liOnClickCallback: (props.liOnClickCallback && 'function' === typeof props.liOnClickCallback) ? props.liOnClickCallback : undefined,
            inputOnChangeCallback: (props.inputOnChangeCallback && 'function' === typeof props.inputOnChangeCallback) ? props.inputOnChangeCallback : undefined,
            displayTotal: (typeof true === typeof props.displayTotal) ? props.displayTotal : false,
            displayPaginationPages: (typeof true === typeof props.displayPaginationPages) ? props.displayPaginationPages : false,
            totalPrefix: (props.totalPrefix && typeof '8' === typeof props.totalPrefix) ? props.totalPrefix : '',
            totalSufix: (props.totalSufix && typeof '8' === typeof props.totalSufix) ? props.totalSufix : '',
            paginationTextPrefix: (props.paginationTextPrefix && typeof '8' === typeof props.paginationTextPrefix) ? props.paginationTextPrefix : '',
            paginationTextMiddle: (props.paginationTextMiddle && typeof '8' === typeof props.paginationTextMiddle) ? props.paginationTextMiddle : '',
            prevPages: (props.prevPages && typeof 8 === typeof props.prevPages) ? props.prevPages : 2,
            nextPages: (props.nextPages && typeof 8 === typeof props.nextPages) ? props.nextPages : 2,
            alignPagesItems: (props.alignPagesItems && typeof 8 === typeof props.alignPagesItems) ? props.alignPagesItems : 1,
            alignPagination: (props.alignPagination && typeof 8 === typeof props.alignPagination) ? props.alignPagination : 1,
            resetLineNumber: (typeof true === typeof props.resetLineNumber) ? props.resetLineNumber : false,
            nextButton: props.nextButton ? props.nextButton : '',
            previousButton: props.previousButton ? props.previousButton : '',
            displaySearch: (typeof true === typeof props.displaySearch) ? props.displaySearch : false,
            searchPlaceholder: props.searchPlaceholder ? props.searchPlaceholder : '',
            searchIcon: props.searchIcon ? props.searchIcon : '',
            searchSensisitve: (typeof true === typeof props.searchSensisitve) ? props.searchSensisitve : false,
            searchValue: (props.searchValue && typeof '8' === typeof props.searchValue) ? props.searchValue : '',
            searchOnKeyDown: (typeof true === typeof props.searchOnKeyDown) ? props.searchOnKeyDown : false,
            searchTitle: (props.searchTitle && typeof '8' === typeof props.searchTitle) ? props.searchTitle : '',
            paginationTitle: (props.paginationTitle && typeof '8' === typeof props.paginationTitle) ? props.paginationTitle : '',
            fallbackLoading: props.fallbackLoading ? props.fallbackLoading : '',
            fallbackLoadingPage: props.fallbackLoadingPage ? props.fallbackLoadingPage : '',
            fallbackLoadingTime: (props.fallbackLoadingTime && typeof 8 === typeof props.fallbackLoadingTime) ? props.fallbackLoadingTime : 0,
            fallbackNoData: props.fallbackNoData ? props.fallbackNoData : '',
            fallbackNoDataSearch: props.fallbackNoDataSearch ? props.fallbackNoDataSearch : '',
            fallbackMounting: props.fallbackMounting ? props.fallbackMounting : '',
            getDataCallback: (props.getDataCallback && 'function' === typeof props.getDataCallback) ? props.getDataCallback : undefined,
            globalCount: (props.globalCount && typeof 8 === typeof props.globalCount) ? props.globalCount : 0,
            totalPages: (props.totalPages && typeof 8 === typeof props.totalPages) ? props.totalPages : 0,
            minPages,
            /**
             * Debugging
             */
            env: (typeof 'react' === typeof props.env) ? props.env : 0,
        };
    }

    componentDidMount() {
        loadStyle(this.state.moduleStyle, this.state.globalStyle, this.state.defaultClass);
        this.filterData(true);
    }

    /**
     * Force re-rendering of this component based
     * on keysChangeListners keys
     * @param {object} props 
     * @param {object} state 
     */
    static getDerivedStateFromProps(props, state) {

        if (getDerivedStateFromPropsCheck(['searchValue'], props, state)) {

            if (props.searchValue && '' !== props.searchValue && props.searchValue !== state.searchValue && 0 == PagerStaticUpdatedCountGetDerivedStateFromPropsCheck) {
                PagerStaticUpdatedCountGetDerivedStateFromPropsCheck += 1;

                return {
                    searchValue: props.searchValue
                };
            }

            if (props.searchValue && '' !== props.searchValue && 0 !== PagerStaticUpdatedCountGetDerivedStateFromPropsCheck && props.searchValue !== state.searchValue) {
                PagerStaticUpdatedCountGetDerivedStateFromPropsCheck += 1;

                return {
                    searchValue: state.searchValue,
                };
            }
        }

        if (getDerivedStateFromPropsCheck(['defaultClass', 'minPages', 'totalPages', 'id', 'fallbackLoadingPage', 'searchOnKeys', 'globalCount', 'itemsPerSite', 'keysToRender', 'displayLineNumber', 'liOnClickCallback', 'inputOnChangeCallback', 'displayTotal', 'displayPaginationPages', 'totalPrefix', 'totalSufix', 'paginationTextPrefix', 'paginationTextMiddle', 'prevPages', 'nextPages', 'alignPagesItems', 'alignPagination', 'resetLineNumber', 'nextButton', 'previousButton', 'displaySearch', 'searchPlaceholder', 'searchIcon', 'searchSensisitve', 'searchValue', 'searchOnKeyDown', 'searchTitle', 'paginationTitle', 'fallbackLoading', 'fallbackLoadingTime', 'fallbackNoData', 'fallbackNoDataSearch', 'fallbackMounting', 'getDataCallback'], props, state)) {
            const prevPages = (props.prevPages && typeof 8 === typeof props.prevPages) ? props.prevPages : 2;
            const nextPages = (props.nextPages && typeof 8 === typeof props.nextPages) ? props.nextPages : 2;
            const itemsPerSite = (props.itemsPerSite && typeof 8 === typeof props.itemsPerSite) ? props.itemsPerSite : 10;
            const minPages = prevPages + nextPages + 1;

            return {
                addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
                defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-pager-dynamic',
                id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
                searchOnKeys: (props.searchOnKeys && typeof [] === typeof props.searchOnKeys) ? props.searchOnKeys : [],
                // data: (props.data && typeof [] === typeof props.data) ? props.data.slice(0, itemsPerSite) : [],
                itemsPerSite,
                keysToRender: (props.display && typeof [] === typeof props.display) ? props.display : [],
                displayLineNumber: (typeof true === typeof props.displayLineNumber) ? props.displayLineNumber : false,
                liOnClickCallback: (props.liOnClickCallback && 'function' === typeof props.liOnClickCallback) ? props.liOnClickCallback : undefined,
                inputOnChangeCallback: (props.inputOnChangeCallback && 'function' === typeof props.inputOnChangeCallback) ? props.inputOnChangeCallback : undefined,
                displayTotal: (typeof true === typeof props.displayTotal) ? props.displayTotal : false,
                displayPaginationPages: (typeof true === typeof props.displayPaginationPages) ? props.displayPaginationPages : false,
                totalPrefix: (props.totalPrefix && typeof '8' === typeof props.totalPrefix) ? props.totalPrefix : '',
                totalSufix: (props.totalSufix && typeof '8' === typeof props.totalSufix) ? props.totalSufix : '',
                paginationTextPrefix: (props.paginationTextPrefix && typeof '8' === typeof props.paginationTextPrefix) ? props.paginationTextPrefix : '',
                paginationTextMiddle: (props.paginationTextMiddle && typeof '8' === typeof props.paginationTextMiddle) ? props.paginationTextMiddle : '',
                prevPages: (props.prevPages && typeof 8 === typeof props.prevPages) ? props.prevPages : 2,
                nextPages: (props.nextPages && typeof 8 === typeof props.nextPages) ? props.nextPages : 2,
                alignPagesItems: (props.alignPagesItems && typeof 8 === typeof props.alignPagesItems) ? props.alignPagesItems : 1,
                alignPagination: (props.alignPagination && typeof 8 === typeof props.alignPagination) ? props.alignPagination : 1,
                resetLineNumber: (typeof true === typeof props.resetLineNumber) ? props.resetLineNumber : false,
                nextButton: props.nextButton ? props.nextButton : '',
                previousButton: props.previousButton ? props.previousButton : '',
                displaySearch: (typeof true === typeof props.displaySearch) ? props.displaySearch : false,
                searchPlaceholder: props.searchPlaceholder ? props.searchPlaceholder : '',
                searchIcon: props.searchIcon ? props.searchIcon : '',
                searchSensisitve: (typeof true === typeof props.searchSensisitve) ? props.searchSensisitve : false,
                searchOnKeyDown: (typeof true === typeof props.searchOnKeyDown) ? props.searchOnKeyDown : false,
                searchTitle: (props.searchTitle && typeof '8' === typeof props.searchTitle) ? props.searchTitle : '',
                paginationTitle: (props.paginationTitle && typeof '8' === typeof props.paginationTitle) ? props.paginationTitle : '',
                fallbackLoading: props.fallbackLoading ? props.fallbackLoading : '',
                fallbackLoadingPage: props.fallbackLoadingPage ? props.fallbackLoadingPage : '',
                fallbackLoadingTime: (props.fallbackLoadingTime && typeof 8 === typeof props.fallbackLoadingTime) ? props.fallbackLoadingTime : 0,
                fallbackNoData: props.fallbackNoData ? props.fallbackNoData : '',
                fallbackNoDataSearch: props.fallbackNoDataSearch ? props.fallbackNoDataSearch : '',
                fallbackMounting: props.fallbackMounting ? props.fallbackMounting : '',
                getDataCallback: (props.getDataCallback && 'function' === typeof props.getDataCallback) ? props.getDataCallback : undefined,
                globalCount: (props.globalCount && typeof 8 === typeof props.globalCount) ? props.globalCount : 0,
                totalPages: (props.totalPages && typeof 8 === typeof props.totalPages) ? props.totalPages : 0,
                minPages
            };
        }

        return null;
    }

    changePage(number, pagersPage = true) {
        const { itemsPerSite } = this.state;

        if(pagersPage){
            number -= 1;
        }

        this.setState({
            currentPage: number,
            loadingList: true
        },
            async () => {
                const { getDataCallback } = this.state;

                if (getDataCallback) {
                    const data = await (getDataCallback)(number+1);

                    if (data && typeof [] == typeof data && data.length) {

                        return this.setState({
                            filteredData: data.slice(0, itemsPerSite),
                            data: data.slice(0, itemsPerSite),
                            loadingList: false
                        });
                    }

                    this.setState({
                        filteredData: [],
                        loadingList: false
                    });
                }
            }
        );
    }

    /**
     * Users pagination interagtions jsx
     */
    getPagerJsx() {
        let { globalCount, itemsPerSite, totalPages, currentPage, minPages, displayTotal, totalPrefix, totalSufix, displayPaginationPages, prevPages, nextPages, alignPagesItems, fallbackNoData, previousButton, nextButton, searchValue, fallbackNoDataSearch, dataLoaded, fallbackMounting, filteredData } = this.state;

        let mainPage = currentPage;
        mainPage++;
        let pagesPrev = [];
        let pagesNext = [];

        if (globalCount && globalCount <= currentPage * itemsPerSite) {

            return this.setState({
                currentPage: this.state.currentPage - 1
            });
        }

        if (minPages) {
            let addedItems = 1;

            /**
             * Next pages
             */
            let maxNextPages = (1 == mainPage) ? minPages : mainPage + nextPages;

            if (maxNextPages < minPages) {
                maxNextPages = minPages;
            }

            for (let x = mainPage + 1; x <= maxNextPages; x++) {

                if (x <= totalPages) {
                    pagesNext.push(x);
                    addedItems += 1;
                }

            }

            /**
             * Prev pages
             */
            for (let x = mainPage; x > 0 ; x--) {

                if (x >= 1 && (addedItems <= prevPages || addedItems < minPages) && mainPage !== x) {
                    addedItems += 1;
                    pagesPrev.push(x);
                }
            }

            pagesPrev.reverse();
        }

        const itemsTotal = (
            <div className="total">
                {
                    totalPrefix && totalPrefix
                }
                {
                    globalCount
                }
                {
                    totalSufix && totalSufix
                }
            </div>
        );

        const itemsPagination = (
            <span className="buttons flex">
                <span
                    onClick={(e) => this.prev()}
                    className={currentPage !== 0 ? `previous-button ${'' == previousButton ? 'icon-previous' : ''}` : `previous-button deactivated ${'' == previousButton ? 'icon-previous' : ''}`}
                >
                    {
                        previousButton && previousButton
                    }
                    {
                        '' == previousButton && '↩'
                    }
                </span>
                {
                    displayPaginationPages &&
                    <span className="pagination-paging">
                        {
                            pagesPrev.map(pageNumber => {
                                return (
                                    <span
                                        key={uuid()}
                                        className="previous-page"
                                        onClick={(e) => this.changePage(pageNumber)}
                                    >
                                        {
                                            pageNumber
                                        }
                                    </span>
                                )
                            })
                        }
                        <span className="current-page">
                            {
                                mainPage
                            }
                        </span>
                        {
                            pagesNext.map(pageNumber => {
                                return (
                                    <span
                                        key={uuid()}
                                        className="next-page"
                                        onClick={(e) => this.changePage(pageNumber)}
                                    >
                                        {
                                            pageNumber
                                        }
                                    </span>
                                )
                            })
                        }
                    </span>
                }
                <span
                    onClick={(e) => this.next()}
                    className={itemsPerSite * mainPage < globalCount ? `next-button ${'' == nextButton ? 'icon-next' : ''}` : `next-button deactivated ${'' == nextButton ? 'icon-next' : ''}`}
                >
                    {
                        nextButton && nextButton
                    }
                </span>
            </span>
        );

        /**
         * No Data available
         */
        if (!dataLoaded && '' !== fallbackMounting) {
            return (
                <div className='mounting'>
                    {
                        fallbackMounting
                    }
                </div>
            );
        }

        if ('' !== fallbackNoData && '' === searchValue && 0 == filteredData.length) {
            return (
                <div className='no-data'>
                    {
                        fallbackNoData
                    }
                </div>
            );
        }

        if ('' !== fallbackNoDataSearch && '' !== searchValue && 0 == filteredData.length) {
            return (
                <div className='no-data'>
                    {
                        fallbackNoDataSearch
                    }
                </div>
            );
        }

        /**
         * Data available
         */
        switch (alignPagesItems) {
            case 1: {
                return (
                    <div key={uuid()} className="paging">
                        {
                            displayTotal && itemsTotal

                        }
                        {
                            itemsPagination
                        }
                    </div>
                );
            }
            case 2: {
                return (
                    <div key={uuid()} className="paging">
                        {
                            itemsPagination
                        }
                        {
                            displayTotal && itemsTotal

                        }
                    </div>
                );
            }
            case 3: {
                return (
                    <div key={uuid()} className="paging">
                        {
                            displayTotal && itemsTotal

                        }
                        {
                            itemsPagination
                        }
                    </div>
                );
            }
            case 4: {
                return (
                    <div key={uuid()} className="paging">
                        {
                            itemsPagination
                        }
                        {
                            displayTotal && itemsTotal

                        }
                    </div>
                );
            }
            case 5: {
                return (
                    <div key={uuid()} className="paging">
                        {
                            itemsPagination
                        }
                        {
                            displayTotal && itemsTotal

                        }
                    </div>
                );
            }
            default: {
                return (
                    <div key={uuid()} className="paging">
                        {
                            displayTotal && itemsTotal

                        }
                        {
                            itemsPagination
                        }
                    </div>
                );
            }
        }
    }

    pages() {
        let { paginationTextPrefix, globalCount, currentPage, paginationTextMiddle, totalPages } = this.state;
        let mainPage = currentPage;
        mainPage++;
        let maxPages = totalPages;

        if (0 == maxPages) {
            maxPages = 1;
        }

        if (0 == globalCount) {
            return null;
        }

        return (
            <div className="pagination-pages">
                <div className="text">
                    {
                        `${paginationTextPrefix} ${mainPage} ${paginationTextMiddle} ${maxPages}`
                    }
                </div>
            </div>
        );
    }

    /**
     * Change page - previous
     */
    prev() {
        let { currentPage } = this.state;

        if (currentPage !== 0) {
            this.changePage(currentPage-1, false);
            // this.setState({
            //     currentPage: currentPage - 1
            // });
        }
    }

    /**
     * Change page - next
     */
    next() {
        let { itemsPerSite, currentPage, globalCount } = this.state;

        let mainPage = currentPage;
        mainPage++;

        if (itemsPerSite * mainPage < globalCount) {
            this.changePage(currentPage+1, false);
            // this.setState({
            //     currentPage: currentPage + 1
            // }, () => {
            //     let { currentPage } = this.state;
            //     this.changePage(currentPage+1);
            // });
        }
    }

    /**
     * If user click on the listet item, then
     * gave the user the object back as 
     * callback parameter
     */
    clickCallback(e, object) {
        const { liOnClickCallback } = this.state;

        if (liOnClickCallback) {
            (liOnClickCallback)(e, object);
        }
    }

    /**
     * Return values as generated li items
     */
    getList() {
        let { keysToRender, displayLineNumber, currentPage, itemsPerSite, filteredData, resetLineNumber, loadingList } = this.state;
        const jsxToReturn = [];

        filteredData.map((itemsObject, index) => {
            const childs = [];
            const i = index + 1;
            let currentIndex = i;


            if (currentPage && !resetLineNumber) {
                currentIndex += currentPage * itemsPerSite;
            }

            if (displayLineNumber) {
                childs.push(
                    <span
                        className={`line-number entry entry-1`}
                        key={uuid()}
                    >
                        {
                            currentIndex
                        }
                    </span>
                );
            }

            /**
             * Access the array of keys to render from the object
             */
            let count = 0;
            const objectKeys = Object.keys(itemsObject);

            keysToRender.map((keyToRender, loopIndex) => {
                /**
                 * Render the keys in inside the object from current filteredData loop index
                 */
                const value = itemsObject[keyToRender];

                if (objectKeys.includes(keyToRender) && value) {
                    count++;

                    childs.push(
                        <span
                            className={`value entry entry-${loopIndex + (displayLineNumber ? 2 : 1)} value-${count}`}
                            key={uuid()}
                        >
                            {
                                value
                            }
                        </span>
                    );
                }
            });

            /**
             * Append childs into the li
             */
            jsxToReturn.push(
                <li
                    onClick={(e) => this.clickCallback(e, itemsObject)}
                    key={uuid()}
                >
                    {
                        childs
                    }
                </li>
            )
        });

        return jsxToReturn;
    }

    /**
     * Filter data based on the current search value
     */
    filterData(forceSearch = false) {
        const { fallbackLoadingTime, searchOnKeyDown } = this.state;

        this.setState({
            loading: searchOnKeyDown ? true : false,
            loadingList: true
        }, () => {
            setTimeout(() => {
                const { data, searchSensisitve, searchOnKeys, env } = this.state;
                let { searchValue } = this.state;
                const filteredData = [];

                /**
                 * If the user 
                 */
                if (searchOnKeyDown || forceSearch) {
                    
                    data.map(object => {

                        if(searchOnKeys && searchOnKeys.length){
                            searchOnKeys.map(keyName => {
                                /**
                                 * Search on the value based on searching keys 
                                 * provided by the user
                                 */
                                if (undefined !== object[keyName]) {
                                    if (typeof '8' === typeof object[keyName]) {
    
                                        if (typeof '8' !== typeof searchValue) {
                                            searchValue = JSON.stringify(searchValue);
                                        }
    
                                        /**
                                         * Sensitive
                                         */
                                        if (searchSensisitve && '' !== searchValue && -1 !== object[keyName].indexOf(searchValue)) {
                                            filteredData.push(object);
                                        }
                                        /**
                                         * Not sensitive
                                         */
                                        if (!searchSensisitve && '' !== searchValue && -1 !== object[keyName].toLowerCase().indexOf(searchValue.toLowerCase())) {
                                            filteredData.push(object);
                                        }
    
                                        if ('' == searchValue) {
                                            filteredData.push(object);
                                        }
                                    }
                                    else {
                                        if ('dev' === env) {
                                            // masterlog('')
                                        }
                                    }
                                }
                            });
                        }
                        else{
                            filteredData.push(object);
                        }
                    });
                    
                    this.setState({
                        filteredData,
                        loading: false,
                        loadingList: false
                    }, () => {
                        /**
                         * Only on mounting
                         */
                        if (!this.state.dataLoaded) {
                            setTimeout(() => {
                                this.setState({
                                    dataLoaded: true,
                                });
                            }, fallbackLoadingTime * 2);
                        }
                    });
                }
                else {
                    this.setState({
                        dataLoaded: true,
                        loading: false,
                        loadingList: false,
                    });
                }
            }, fallbackLoadingTime);
        });
    }

    /**
     * Set search parameter
     * @param e 
     */
    setSearchValue(e) {
        e.persist();
        const { data, inputOnChangeCallback, searchOnKeyDown } = this.state;
        const searchValue = e.target.value;

        this.setState({
            loading: searchOnKeyDown ? true : false
        }, () => {

            if (inputOnChangeCallback) {
                (inputOnChangeCallback)(e);
            }

            if (27 == e.keyCode || 27 == e.which) {
                return this.setState({
                    searchValue: '',
                    currentPage: 0,
                    filteredData: data,
                    loading: false
                });
            }

            if (13 == e.keyCode || 13 == e.which) {
                return this.setState({
                    searchValue,
                    currentPage: 0,
                }, () => {
                    this.filterData(true);
                });
            }

            this.setState({
                searchValue,
                // currentPage: 0,
            }, this.filterData);
        })
    }

    render() {
        const { fallbackLoadingPage, addClass, defaultClass, id, loading, fallbackLoading, alignPagination, displaySearch, searchIcon, searchPlaceholder, searchTitle, paginationTitle, filteredData, loadingList } = this.state;
        const jsxList = this.getList();

        return (
            <div
                className={`${defaultClass} ${addClass}`}
                id={id}
            >
                {
                    displaySearch &&
                    <h1 className="h1">
                        {
                            searchTitle
                        }
                    </h1>
                }
                {
                    displaySearch &&
                    <div className="input-holder">
                        <input
                            className="input"
                            type="text"
                            onChange={(e) => this.setSearchValue(e)}
                            value={this.state.searchValue}
                            placeholder={searchPlaceholder}
                        />
                        {
                            '' !== searchIcon &&
                            <span
                                className="icon"
                                onClick={(e) => this.filterData(true)}
                            >
                                {
                                    searchIcon
                                }
                            </span>
                        }
                        {
                            '' == searchIcon &&
                            <span
                                className="icon icon-search"
                                onClick={(e) => this.filterData(true)}
                            ></span>
                        }
                    </div>
                }
                {
                    1 == alignPagination && paginationTitle &&
                    <h1 className="h1">
                        {
                            paginationTitle
                        }
                    </h1>
                }
                {
                    1 == alignPagination && 0 != filteredData.length && !loadingList &&
                    <ul>
                        {
                            0 !== jsxList.length && jsxList
                        }
                        {
                            '' !== fallbackLoading && loading && fallbackLoadingPage
                        }
                    </ul>
                }
                {
                    1 == alignPagination && loadingList && fallbackLoadingPage
                }
                {
                    this.getPagerJsx()
                }
                {
                    this.pages()
                }
                {
                    1 !== alignPagination && paginationTitle &&
                    <h1 className="h1">
                        {
                            paginationTitle
                        }
                    </h1>
                }
                {
                    1 !== alignPagination && 0 != filteredData.length && !loadingList &&
                    <ul>
                        {
                            0 !== jsxList.length && jsxList
                        }
                        {
                            '' !== fallbackLoading && loading && fallbackLoading
                        }
                    </ul>
                }
                {
                    1 !== alignPagination && loadingList && fallbackLoading
                }
            </div>
        );
    }
}

export default PagerDynamic;