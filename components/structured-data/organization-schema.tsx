import Script from 'next/script';

export default function OrganizationSchema() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DataTechHub",
    "description": "Premier data science and technology education platform empowering African professionals",
    "url": process.env.NEXT_PUBLIC_BASE_URL || "https://datatechhub.com",
    "logo": `${process.env.NEXT_PUBLIC_BASE_URL || "https://datatechhub.com"}/logo-1.png`,
    "sameAs": [
      "https://linkedin.com/company/datatechhub",
      "https://twitter.com/datatechhub",
      "https://facebook.com/datatechhub"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["English"]
    },
    "areaServed": {
      "@type": "Place",
      "name": "Africa"
    },
    "knowsAbout": [
      "Data Science",
      "Machine Learning",
      "Python Programming",
      "Data Analysis",
      "Business Intelligence",
      "Artificial Intelligence"
    ]
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationData),
      }}
    />
  );
}
