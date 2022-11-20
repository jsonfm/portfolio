import { Helmet } from "react-helmet-async";


export const SEO = () => {
    return (
        <Helmet>
            <title>Portfolio</title>
            <meta property="description" content="This is my personal portfolio, here is my profesional experience and my skills." />
            <link rel="canonical" href="https://jsonfm.github.io/portfolio/" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content="Portfolio" />
            <meta property="og:description" content="This is my personal portfolio, here is my profesional experience and my skills." />
        </Helmet>
    )
}