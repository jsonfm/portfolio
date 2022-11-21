import { Helmet } from "react-helmet-async";


export const SEO = () => {
    return (
        <Helmet>
            <title>Portfolio</title>
            <meta property="description" content="This is my personal portfolio, here is my profesional experience and my skills." />
            <link rel="canonical" href="https://jsonfm.github.io/portfolio/" />
            <meta name="url" content="https://jsonfm.github.io/portfolio/"/>
            <meta name="type" property="og:type" content="website" />
            <meta name="title" property="og:title" content="Portfolio" />
            <meta name="description" property="og:description" content="This is my personal portfolio, here is my profesional experience and my skills." />
            <meta name="image" property="og:image" content="https://github.com/jsonfm/portfolio/blob/master/docs/images/portfolio.png?raw=true"/>
        </Helmet>
    )
}