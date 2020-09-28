import React from 'react';

import { Table, ArticlesImages, LoadOnScroll, LoadingBoxTop } from '../../react-revolution/public/react-revolution';

import trans from '../Translations/trans';

import buildModulesJsx from '../Functions/buildModulesJsx';

import buildTableKeysStructure from '../Functions/buildTableKeysStructure';

import getDescriptionForstyle from '../Functions/getDescriptionForstyle';

const codeExample1 = `import { ArticlesImages } from 'react-revolution';

<ArticlesImages
    addClass='rr-articles-images-example'
    animation='opacity'
    toggleOn='text'
    itemsPerLine={2}
    mediaBreak={1600}
    data={generateRandomArcticles()}
/>`;

const codeExample2 = `import { ArticlesImages } from 'react-revolution';

<Articles
    addClass='rr-articles-example'
    animation='height'
    itemsPerLine={2}
    mediaBreak={1024}
    data={generateRandomArcticles(4, true)}
/>`;

const codeExample3 = `import { ArticlesImages } from 'react-revolution';

<ArticlesImages
    addClass='rr-articles-images-example'
    animation='opacity'
    toggleOn='text'
    closeOnClickOutside={true}
    itemsPerLine={2}
    mediaBreak={1600}
    data={generateRandomArcticles(4)}
/>`;

const codeExample4 = `import { ArticlesImages } from 'react-revolution';

<ArticlesImages
    addClass='rr-articles-images-example'
    animation='opacity'
    toggleOn='text'
    persist={true}
    itemsPerLine={2}
    mediaBreak={1600}
    data={generateRandomArcticles(4)}
/>`;

const cssExample = `.rr-articles-images-example{
        
    .single-entry{
        padding: 10px;
        width: calc(100% - 20px);
        
        .image-holder{
            padding-right: 15px;

            .image{
                background-repeat: no-repeat;
                background-size: cover;
            }
        }
    }

    .text:hover{
        cursor: pointer;
    }
}`;

const cssExample4 = `.rr-articles-images-example{
        
    .single-entry{
        padding: 10px;
        width: calc(100% - 20px);

        .image-holder{
            padding-right: 15px;

            .image{
                background-repeat: no-repeat;
                background-size: cover;
            }
        }
    }

    .text:hover{
        cursor: pointer;
    }

    .data-toggled:hover{
        cursor: text;
    }
}`;

const jsCode = `const generateRandomArcticles = (count = 4, border = false) => {
            
    const articles = [];
    
    const borderStyle = {
        site: 'bottom',
        width: 5,
        color: 'pink'
    };

    const images = [
        'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
        'https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_960_720.jpg',
        'https://cdn.pixabay.com/photo/2015/07/27/19/47/turtle-863336_960_720.jpg',
        'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg'
    ];

    for(let x = 0; x < count; x++){
        articles.push(
            {
                border: border ? borderStyle : undefined,
                title: 'Lorem Ipsum',
                image: images[x],
                text: \`
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                    magna aliquyam erat, sed diam voluptua.
                \`,
                dataToggle: (
                    <span>
                        Lorem ipsum dolor sit amet, 
                        consetetur sadipscing elitr, 
                        sed diam nonumy eirmod tempor 
                        invidunt ut labore et dolore 
                        magna aliquyam erat, 
                        sed diam voluptua.
                        Lorem ipsum dolor sit amet, 
                        consetetur sadipscing elitr, 
                        sed diam nonumy eirmod tempor 
                        invidunt ut labore et dolore 
                        magna aliquyam erat, 
                        sed diam voluptua.
                    </span>
                )
            }
        );
    }

    return articles;
};`;

class ReactRevolutionArticlesImages extends React.Component 
{
    constructor(props) {
        super(props);
        this.loadOnScrollCallback = this.loadOnScrollCallback.bind(this);
        this.countCallbacks = 0;

        const generateRandomArcticles = (count = 2, border = false) => {
            
            const articles = [];
            
            const borderStyle = {
                site: 'bottom',
                width: 5,
                color: 'pink'
            };

            const images = [
                'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
                'https://cdn.pixabay.com/photo/2016/03/09/09/43/person-1245959_960_720.jpg'
            ];

            for(let x = 0; x < count; x++){
                articles.push(
                    {
                        border: border ? borderStyle : undefined,
                        title: 'Lorem Ipsum',
                        image: images[x],
                        text: `
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                            magna aliquyam erat, sed diam voluptua.
                        `,
                        dataToggle: (
                            <span>
                                Lorem ipsum dolor sit amet, 
                                consetetur sadipscing elitr, 
                                sed diam nonumy eirmod tempor 
                                invidunt ut labore et dolore 
                                magna aliquyam erat, 
                                sed diam voluptua.
                                Lorem ipsum dolor sit amet, 
                                consetetur sadipscing elitr, 
                                sed diam nonumy eirmod tempor 
                                invidunt ut labore et dolore 
                                magna aliquyam erat, 
                                sed diam voluptua.
                            </span>
                        )
                    }
                );
            }

            return articles;
        };

        this.examples = [
            {
                title: 'ArticlesImages',
                description: '',
                reactTextBefore: '',
                react: codeExample1,
                reactTextAfter: '',
                js: jsCode,
                css: cssExample,
                html: '',
                live: (
                    <ArticlesImages
                        addClass='rr-articles-images-example'
                        animation='opacity'
                        toggleOn='text'
                        itemsPerLine={2}
                        mediaBreak={1600}
                        data={generateRandomArcticles()}
                    />
                )
            },
            {
                title: 'ArticlesImages',
                description: trans('articles.description.1'),
                reactTextBefore: '',
                react: codeExample2,
                reactTextAfter: '',
                js: jsCode,
                css: cssExample,
                html: '',
                live: (
                    <ArticlesImages
                        addClass='rr-articles-images-example'
                        animation='opacity'
                        toggleOn='text'
                        itemsPerLine={2}
                        mediaBreak={1600}
                        data={generateRandomArcticles(2, true)}
                    />
                )
            },
            {
                title: 'ArticlesImages',
                description: trans('articles.description.2'),
                reactTextBefore: '',
                react: codeExample3,
                reactTextAfter: '',
                js: jsCode,
                css: cssExample,
                html: '',
                live: (
                    <ArticlesImages
                        addClass='rr-articles-images-example'
                        animation='opacity'
                        toggleOn='text'
                        closeOnClickOutside={true}
                        itemsPerLine={2}
                        mediaBreak={1600}
                        data={generateRandomArcticles()}
                    />
                )
            },
            {
                title: 'ArticlesImages',
                description: trans('articles.description.3'),
                reactTextBefore: '',
                react: codeExample4,
                reactTextAfter: '',
                js: jsCode,
                css: cssExample4,
                html: '',
                live: (
                    <ArticlesImages
                        addClass='rr-articles-images-example'
                        animation='opacity'
                        toggleOn='text'
                        persist={true}
                        itemsPerLine={2}
                        mediaBreak={1600}
                        data={generateRandomArcticles()}
                    />
                )
            },
        ];
    }

    loadOnScrollCallback() {
        this.countCallbacks += 1;

        if (this.countCallbacks === this.examples.length) {
            return 'break';
        }

        return new Promise(resolve => {
            resolve(buildModulesJsx(this.examples[this.countCallbacks]), this.countCallbacks + 1);
        });
    }

    render() {
        return (
            <div className="Generator">
                <LoadOnScroll
                    scrollReference={false}
                    minify={0}
                    callback={this.loadOnScrollCallback}
                    loadMoreLoadingIcon={<LoadingBoxTop text={trans('loading')} />}
                    data={buildModulesJsx(this.examples[0], 1)} // Default as the first example 
                />
                {
                    getDescriptionForstyle('rr-articles-images')
                }
                <h1 className="h1-title border-none text-center mb-4">
                    {
                        trans('keyUsageTitle')
                    }
                </h1>
                <Table
                    mediaBreak={1024}
                    addClass='rr-table-website'
                    keysToRead={
                        [
                            'key', 'value', 'type', 'default'
                        ]
                    }
                    title={
                        [
                            trans('table.title.key'), trans('table.title.description'), trans('table.title.type'), trans('table.title.default')
                        ]
                    }
                    data={
                        buildTableKeysStructure(
                            [
                                {
                                    key: 'globalStyle',
                                    values: 'globalStyle'
                                },
                                {
                                    key: 'moduleStyle',
                                    values: 'moduleStyle'
                                },
                                {
                                    key: 'id',
                                    values: 'id'
                                },
                                {
                                    key: 'defaultClass',
                                    values: 'class'
                                },
                                {
                                    key: 'addClass',
                                    values: 'addClass'
                                },
                                {
                                    key: 'toggleOn',
                                    values: 'articles.toggleOn'
                                },
                                {
                                    key: 'closeOnClickOutside',
                                    values: 'closeOnClickOutside'
                                },
                                {
                                    key: 'itemsPerLine',
                                    values: 'articles.itemsPerLine'
                                },
                                {
                                    key: 'mediaBreak',
                                    values: 'mediaBreak'
                                },
                                {
                                    key: 'persist',
                                    values: 'articles.persist'
                                },
                                {
                                    key: 'animation',
                                    values: 'articles.animation.images'
                                },
                                {
                                    key: 'data',
                                    values: 'accordion.data'
                                },
                                {
                                    key: 'data.toggled',
                                    values: 'accordion.data.toggled'
                                },
                                {
                                    key: 'data.title',
                                    values: 'articles.title'
                                },
                                {
                                    key: 'data.titleProps',
                                    values: 'articles.titleProps'
                                },
                                {
                                    key: 'data.text',
                                    values: 'articles.text'
                                },
                                {
                                    key: 'data.textProps',
                                    values: 'articles.textProps'
                                },
                                {
                                    key: 'data.image',
                                    values: 'articles.image'
                                },
                                {
                                    key: 'data.imageProps',
                                    values: 'articles.imageProps'
                                },
                                {
                                    key: 'data.dataToggle',
                                    values: 'accordion.data.dataToggle'
                                },
                                {
                                    key: 'data.border',
                                    values: 'articles.border'
                                },
                                {
                                    key: 'data.border.site',
                                    values: 'articles.border.site'
                                },
                                {
                                    key: 'data.border.width',
                                    values: 'articles.border.width'
                                },
                                {
                                    key: 'data.border.color',
                                    values: 'articles.border.color'
                                },
                            ],
                            'rr-articles-images'
                        )
                    }
                />
            </div>
        );
    }
};

export default ReactRevolutionArticlesImages;