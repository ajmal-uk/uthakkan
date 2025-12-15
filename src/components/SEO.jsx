import { Helmet } from 'react-helmet-async';

const SEO = ({
    title = 'UTHAKKAN - Building the Future of Digital Experiences',
    description = 'UTHAKKAN is a modern technology company specializing in AI-powered tools, developer utilities, web applications, and innovative digital experiences. Founded by Ajmal U K in Kerala, India.',
    keywords = 'UTHAKKAN, AI tools, developer utilities, web applications, SaaS products, technology company, software development, Ajmal U K, Kerala, India, AI development, web development, chatbots, automation tools, frontend development, React developer, Python developer',
    image = '/og-image.png',
    url = 'https://uthakkan.unaux.com',
    type = 'website',
    schema = null
}) => {
    // Default Organization schema
    const defaultSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "UTHAKKAN",
        "url": "https://uthakkan.unaux.com",
        "logo": "https://uthakkan.unaux.com/logo.png",
        "description": "A modern technology company specializing in AI-powered tools, developer utilities, and digital experiences.",
        "foundingDate": "2025",
        "founder": {
            "@type": "Person",
            "name": "Ajmal U K",
            "jobTitle": "Founder & Developer",
            "url": "https://linkedin.com/in/ajmaluk"
        },
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kannur",
            "addressRegion": "Kerala",
            "addressCountry": "India"
        },
        "sameAs": [
            "https://github.com/ajmal-uk",
            "https://linkedin.com/in/ajmaluk",
            "https://x.com/ajmal_uk_"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "contact@uthakkan.com"
        }
    };

    const schemaData = schema || defaultSchema;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Ajmal U K" />
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content="UTHAKKAN" />
            <meta property="og:locale" content="en_US" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@ajmal_uk_" />
            <meta name="twitter:creator" content="@ajmal_uk_" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Additional SEO */}
            <meta name="theme-color" content="#3B82F6" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name="format-detection" content="telephone=no" />

            {/* JSON-LD Schema */}
            <script type="application/ld+json">
                {JSON.stringify(schemaData)}
            </script>
        </Helmet>
    );
};

export default SEO;
