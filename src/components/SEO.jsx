import { Helmet } from 'react-helmet-async';

const SEO = ({
    title = 'UTHAKKAN - Building the Future of Digital Experiences',
    description = 'UTHAKKAN is a modern technology company specializing in AI-powered tools, developer utilities, web applications, and innovative digital experiences. Founded by Ajmal U K in Kerala, India.',
    keywords = 'UTHAKKAN, AI tools, developer utilities, web applications, SaaS products, technology company, software development, Ajmal U K, Kerala, India, AI development, web development, chatbots, automation tools, frontend development, React developer, Python developer, freelance developer, hire developer India',
    image = 'https://uthakkan.com/og-image.png',
    url = 'https://uthakkan.com',
    type = 'website',
    schema = null,
    article = null,
    noindex = false
}) => {
    // Default Organization schema
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "UTHAKKAN",
        "url": "https://uthakkan.com",
        "logo": "https://uthakkan.com/logo.png",
        "description": "A modern technology company specializing in AI-powered tools, developer utilities, and digital experiences.",
        "foundingDate": "2025",
        "founder": {
            "@type": "Person",
            "name": "Ajmal U K",
            "jobTitle": "Founder & Developer",
            "url": "https://linkedin.com/in/ajmaluk",
            "sameAs": [
                "https://github.com/ajmal-uk",
                "https://linkedin.com/in/ajmaluk",
                "https://x.com/ajmal_uk_"
            ]
        },
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kannur",
            "addressRegion": "Kerala",
            "addressCountry": "IN"
        },
        "sameAs": [
            "https://github.com/ajmal-uk",
            "https://www.linkedin.com/company/uthakkan/",
            "https://x.com/ajmal_uk_"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "contact@uthakkan.com",
            "availableLanguage": ["English", "Malayalam", "Hindi"]
        }
    };

    // WebSite schema for better search features
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "UTHAKKAN",
        "url": "https://uthakkan.com",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://uthakkan.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    // BreadcrumbList schema
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://uthakkan.com" }
        ]
    };

    const schemaData = schema || [organizationSchema, websiteSchema, breadcrumbSchema];

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Ajmal U K" />
            <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
            <meta name="googlebot" content={noindex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"} />
            <meta name="bingbot" content={noindex ? "noindex, nofollow" : "index, follow"} />
            <link rel="canonical" href={url} />

            {/* Language and Region */}
            <meta httpEquiv="content-language" content="en" />
            <meta name="geo.region" content="IN-KL" />
            <meta name="geo.placename" content="Kannur, Kerala, India" />
            <meta name="geo.position" content="11.8745;75.3704" />
            <meta name="ICBM" content="11.8745, 75.3704" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={title} />
            <meta property="og:site_name" content="UTHAKKAN" />
            <meta property="og:locale" content="en_US" />

            {/* Article meta (if provided) */}
            {article && (
                <>
                    <meta property="article:published_time" content={article.publishedTime} />
                    <meta property="article:modified_time" content={article.modifiedTime} />
                    <meta property="article:author" content="Ajmal U K" />
                </>
            )}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@ajmal_uk_" />
            <meta name="twitter:creator" content="@ajmal_uk_" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:image:alt" content={title} />

            {/* Additional SEO */}
            <meta name="theme-color" content="#3B82F6" />
            <meta name="msapplication-TileColor" content="#3B82F6" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name="apple-mobile-web-app-title" content="UTHAKKAN" />
            <meta name="application-name" content="UTHAKKAN" />
            <meta name="format-detection" content="telephone=no" />
            <meta name="mobile-web-app-capable" content="yes" />

            {/* Verification (add your own codes) */}
            {/* <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" /> */}
            {/* <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" /> */}

            {/* Preconnect for performance */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

            {/* JSON-LD Schema */}
            <script type="application/ld+json">
                {JSON.stringify(Array.isArray(schemaData) ? schemaData : [schemaData])}
            </script>
        </Helmet>
    );
};

export default SEO;

