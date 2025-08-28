export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nikhil Mahajan",
    "jobTitle": "Software Developer & Blockchain Analyst",
    "description": "Results-driven Software Developer and Blockchain Analyst with 6+ years of experience in software development and IT consulting",
    "url": "https://nikhilmahajan.dev",
    "sameAs": [
      "https://github.com/nikhilmahajan056",
      "https://www.linkedin.com/in/nikhil-mahajan-089aa3b7/",
      "https://gitlab.com/nikhilmahajan056"
    ],
    "email": "nikhilmahajan056@gmail.com",
    "telephone": "+91-9405178044",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Vishwakarma Institute of Technology",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        }
      }
    ],
    "worksFor": [
      {
        "@type": "Organization",
        "name": "ValueLabs",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Hyderabad",
          "addressRegion": "Telangana",
          "addressCountry": "IN"
        }
      }
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Outstanding Performance Award - BMW CoFiS Japan Market",
        "credentialCategory": "Professional Award",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Atos"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Bachelor of Technology (Electronics Engineering)",
        "credentialCategory": "Degree",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Vishwakarma Institute of Technology"
        }
      }
    ],
    "knowsAbout": [
      "JavaScript",
      "TypeScript",
      "Python",
      "Golang",
      "Solidity",
      "C#",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Azure",
      "Docker",
      "Ethereum",
      "Smart Contracts",
      "Web3.js",
      "Blockchain Development",
      "NFT Development",
      "Decentralized Applications"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}