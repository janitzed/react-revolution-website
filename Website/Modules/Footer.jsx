import React from 'react';

import { Cards, SourceCode, Clipboard } from '../../react-revolution/public/react-revolution';

import { author } from '../Globals';

import trans from '../Translations/trans';

class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            host: process.env.HOST
        }
    }

    getCurrentYearText() {
        const DATE = new Date();
        const year = DATE.getFullYear();

        if (2020 !== year) {
            return `2020 - ${year}`;
        }

        return '2020';
    }

    render() {
        const { host } = this.state;

        return (
            <div className="Footer">

                <Cards
                    itemsPerLine={4}
                    mediaBreak={1024}
                    data={
                        [
                            {
                                title: (
                                    <span>
                                        <i className="fas fa-user" />
                                        {
                                            trans('author')
                                        }
                                    </span>
                                ),
                                content: (
                                    <div className='text text-center'>
                                        <div>
                                            {
                                                author
                                            }
                                        </div>
                                    </div>
                                )
                            },
                            {
                                title: (
                                    <span>
                                        <i className="fas fa-comment-dots" />
                                        {
                                            trans('feedback')
                                        }
                                    </span>
                                ),
                                content: (
                                    <Clipboard
                                        animation='jump' // scale, jump
                                        data={(
                                            <SourceCode
                                                layout='dark'
                                                code={'david.janitzek@gmail.com'}
                                            />
                                        )}
                                        clipboard='david.janitzek@gmail.com'
                                    />
                                ),
                            },
                            {
                                title: (
                                    <span>
                                        <i className="fas fa-comment-dots" />
                                        {
                                            trans('usefullLinks')
                                        }
                                    </span>
                                ),
                                content: (
                                    <span>
                                        <div className="button-action">
                                            <a href={`${host}#/installation`}>
                                                {
                                                    trans('installation')
                                                }
                                            </a>
                                        </div>
                                        <div className="button-action">
                                            <a href={`${host}#/documentation`}>
                                                {
                                                    trans('documentation')
                                                }
                                            </a>
                                        </div>
                                    </span>
                                ),
                            },
                            {
                                title: (
                                    <span>
                                        <i className="fas fa-gavel" />
                                        {
                                            trans('rights')
                                        }
                                    </span>
                                ),
                                content: (
                                    <div className='text text-center'>
                                        <div>
                                            {`Ⓒ ${this.getCurrentYearText()} ${trans('rigthsText')}`}
                                        </div>
                                        <div>
                                            {
                                                author
                                            }
                                        </div>
                                    </div>
                                ),
                            }
                        ]
                    }
                />
            </div>
        );
    }
};

export default Footer;