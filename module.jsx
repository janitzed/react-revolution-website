import * as React from 'react';

import ReactDOM from 'react-dom';

import { MenuClickHorizontal } from './react-revolution/public/react-revolution';

/**
 * Render it to the html while testing
 */

import './react-revolution/sass/rr-menu-click-horizontal.scss';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                    text: 'Home',
                    icon: <i className='fas fa-flag-checkered' />,
                    data: [
                        {
                            text: 'Home',
                            href: `#/`,
                        },
                        {
                            text: 'Home',
                            href: `#/home`,
                        },
                        {
                            text: 'Home',
                            href: `#/ala`,
                        },
                        {
                            text: 'Home',
                            href: `#/`,
                        },
                        {
                            text: 'Home',
                            href: `#/home`,
                        },
                        {
                            text: 'Home',
                            href: `#/ala`,
                        },
                        {
                            text: 'Home',
                            href: `#/`,
                        },
                        {
                            text: 'Home',
                            href: `#/home`,
                        },
                        {
                            text: 'Home',
                            href: `#/ala`,
                        }
                    ]
                }
            ]
        }
    }

    render() {
        const host = '';

        return (
            <span>
              <MenuClickHorizontal
                reactRouter={false}
                animation='height'
                dropDown={
                  (
                    <i className="fas fa-angle-down dropDownIcon"></i>
                  )
                }
                data={
                  [
                    {
                      text: 'Accordion',
                      href: `${host}#/Accordion`,
                    },
                    {
                      text: 'Breadcrumbs',
                      href: `${host}#/Breadcrumbs`,
                    },
                    {
                      text: 'Cards',
                      data: [
                        {
                          text: 'Cards',
                          href: `${host}#/Cards`,
                        },
                        {
                          text: 'CardsScroll',
                          href: `${host}#/CardsScroll`,
                        },
                        {
                          text: 'CardsScrollCallback',
                          href: `${host}#/CardsScrollCallback`,
                        },
                      ]
                    },
                    {
                      text: 'Clipboard',
                      href: `${host}#/Clipboard`,
                    },
                    {
                      text: 'CustomSuggestion',
                      href: `${host}#/CustomSuggestion`,
                    },
                    {
                      text: 'FullScreen',
                      data: [
                        {
                          text: 'FullScreenListArray',
                          href: `${host}#/FullScreenListArray`,
                        },
                        {
                          text: 'FullScreenListObject',
                          href: `${host}#/FullScreenListObject`,
                        },
                        {
                          text: 'FullScreenOverlay',
                          href: `${host}#/FullScreenOverlay`,
                        }
                      ]
                    },
                    {
                      text: 'GlobalMessages',
                      href: `${host}#/GlobalMessages`,
                    },
                    {
                      text: 'Icons',
                      href: `${host}#/Icons`,
                    },
                    {
                      text: 'Input',
                      data: [
                        {
                          text: 'InputAnimation',
                          href: `${host}#/InputAnimation`,
                        },
                        {
                          text: 'InputAnimation',
                          href: `${host}#/InputAnimation`,
                        },
                        {
                          text: 'InputFile',
                          href: `${host}#/InputFile`,
                        },
                        {
                          text: 'InputFileDragDrop',
                          href: `${host}#/InputFileDragDrop`,
                        },
                        {
                          text: 'InputSuggestion',
                          href: `${host}#/InputSuggestion`,
                        }
                      ]
                    },
                    {
                      text: 'LoadingBoxTop',
                      href: `${host}#/LoadingBoxTop`,
                    },
                    {
                      text: 'MenuClickHorizontal',
                      href: `${host}#/MenuClickHorizontal`,
                    },
                    {
                      text: 'PopupBox',
                      href: `${host}#/PopupBox`,
                    },
                    {
                      text: 'SideBar',
                      href: `${host}#/SideBar`,
                    },
                    {
                      text: 'SourceCode',
                      href: `${host}#/SourceCode`,
                    },
                    {
                      text: 'TextWriter',
                      href: `${host}#/TextWriter`,
                    }
                  ]
                }
              />
            </span>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));