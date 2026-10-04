/**
 * schema.org JSON-LD helpers.
 * Free of JSX and browser APIs so generate-static.js can import them under Node.
 */

// The apex domain redirects here, so this is the canonical host.
export const SITE_URL = "https://www.thasmaiinfotech.com";

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export const organizationSchema = {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: "THASMAI INFOTECH PRIVATE LIMITED",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    email: "thasmaiinfotech@gmail.com",
    address: {
        "@type": "PostalAddress",
        addressLocality: "Mangalore",
        addressRegion: "Karnataka",
        addressCountry: "IN"
    }
};

export const buildPersonSchema = (member) => {
    const url = `${SITE_URL}/team/${member.slug}`;
    const sameAs = [...new Set(
        [...(member.links ?? []).map((link) => link.href), member.contact.linkedin].filter(Boolean)
    )];
    const knowsAbout = [...(member.focusAreas ?? []), ...(member.researchAreas ?? [])];

    return {
        "@type": "Person",
        "@id": `${url}#person`,
        name: member.name,
        jobTitle: member.title,
        url,
        image: `${SITE_URL}${member.photoUrl}`,
        worksFor: { "@id": ORGANIZATION_ID },
        ...(knowsAbout.length > 0 && { knowsAbout }),
        ...(sameAs.length > 0 && { sameAs })
    };
};

export const buildProfileSchema = (member) => ({
    "@context": "https://schema.org",
    "@graph": [organizationSchema, buildPersonSchema(member)]
});

// "<" is escaped so the payload can never close its own <script> tag.
export const toJsonLd = (data) => JSON.stringify(data).replace(/</g, "\\u003c");
