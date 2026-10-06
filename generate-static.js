import fs from 'fs';
import path from 'path';
import process from 'process';
import { fileURLToPath, pathToFileURL } from 'url';
import { build } from 'vite';
import { teamMembers } from './src/data/teamData.js';
import { spaceResearchSeo, buildSpaceResearchSchema } from './src/data/spaceResearchContent.js';
import { busBuddySeo, buildBusBuddySchema } from './src/data/busBuddyContent.js';
import { buildProfileSchema, toJsonLd } from './src/utils/structuredData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, 'dist');
const ssrDir = path.join(__dirname, 'dist-ssr');
const templatePath = path.join(distDir, 'index.html');

// Helper to replace or add meta property tag
const replaceOrAddMeta = (html, property, content) => {
    const regex = new RegExp(`<meta property="${property}" content=".*?" />`);
    if (regex.test(html)) {
        return html.replace(regex, `<meta property="${property}" content="${content}" />`);
    } else {
        return html.replace('</head>', `<meta property="${property}" content="${content}" />\n</head>`);
    }
};

// Helper to replace or add meta name tag
const replaceOrAddName = (html, name, content) => {
    const regex = new RegExp(`<meta name="${name}" content=".*?" />`);
    if (regex.test(html)) {
        return html.replace(regex, `<meta name="${name}" content="${content}" />`);
    } else {
        return html.replace('</head>', `<meta name="${name}" content="${content}" />\n</head>`);
    }
};

// Helpers for tags that only some pages carry. data-rh="true" lets react-helmet adopt
// the tag when the app loads instead of adding a duplicate next to it.
const addCanonical = (html, url) =>
    html.replace('</head>', () => `<link rel="canonical" href="${url}" data-rh="true" />\n</head>`);

const addJsonLd = (html, data) =>
    html.replace('</head>', () => `<script type="application/ld+json" data-rh="true">${toJsonLd(data)}</script>\n</head>`);

// Builds the app for Node and returns its render(url) function. The build reuses the
// client build's hashed asset URLs, so the prerendered markup matches what hydrates it.
const loadRenderer = async () => {
    await build({
        logLevel: 'error',
        build: { ssr: 'src/entry-server.jsx', outDir: ssrDir, emptyOutDir: true },
        // CommonJS-only packages whose named exports Node cannot import directly
        ssr: { noExternal: ['react-helmet-async'] }
    });
    const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);
    return render;
};

const addPrerenderedApp = (html, appHtml) => {
    const emptyRoot = '<div id="root"></div>';
    if (!html.includes(emptyRoot)) {
        throw new Error('Prerender failed: empty #root not found in dist/index.html.');
    }
    return html.replace(emptyRoot, () => `<div id="root">${appHtml}</div>`);
};

// Lets the browser fetch a lazy route's chunk alongside the main bundle
const addModulePreload = (html, chunkPrefix) => {
    const file = fs.readdirSync(path.join(distDir, 'assets'))
        .find((name) => name.startsWith(chunkPrefix) && name.endsWith('.js'));
    return file
        ? html.replace('</head>', () => `<link rel="modulepreload" crossorigin href="/assets/${file}" />\n</head>`)
        : html;
};

async function generateStaticFiles() {
    if (!fs.existsSync(templatePath)) {
        console.error('Error: dist/index.html not found. Run "npm run build" first.');
        process.exit(1);
    }

    const template = fs.readFileSync(templatePath, 'utf-8');

    // 1. Generate Team Pages
    for (const member of teamMembers) {
        const dir = path.join(distDir, 'team', member.slug);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        let html = template;

        // Replace Title
        html = html.replace(/<title>.*?<\/title>/, `<title>${member.seo.title}</title>`);

        // Replace Meta Description
        html = html.replace(
            /<meta name="description" content=".*?" \/>/,
            `<meta name="description" content="${member.seo.description}" />`
        );

        // Replace Open Graph Tags
        html = html.replace(
            /<meta property="og:title" content=".*?" \/>/,
            `<meta property="og:title" content="${member.seo.ogTitle}" />`
        );
        html = html.replace(
            /<meta property="og:description" content=".*?" \/>/,
            `<meta property="og:description" content="${member.seo.ogDescription}" />`
        );
        html = html.replace(
            /<meta property="og:url" content=".*?" \/>/,
            `<meta property="og:url" content="https://thasmaiinfotech.com/team/${member.slug}" />`
        );

        html = replaceOrAddMeta(html, 'og:image', `https://thasmaiinfotech.com${member.photoUrl}`);

        html = replaceOrAddName(html, 'twitter:title', member.seo.twitterTitle);
        html = replaceOrAddName(html, 'twitter:description', member.seo.twitterDescription);
        html = replaceOrAddName(html, 'twitter:image', `https://thasmaiinfotech.com${member.photoUrl}`);

        if (member.focusAreas) {
            html = addJsonLd(html, buildProfileSchema(member));
        }

        const filePath = path.join(dir, 'index.html');
        fs.writeFileSync(filePath, html);
        console.log(`Generated: ${filePath}`);
    }

    // 2. Generate Krishi Suraksha AI Product Page
    const productDir = path.join(distDir, 'krishi-suraksha-ai');
    if (!fs.existsSync(productDir)) {
        fs.mkdirSync(productDir, { recursive: true });
    }

    let productHtml = template;
    const productSeo = {
        title: "Krishi Suraksha AI – AI-Powered Smart Farm Protection Drone Platform",
        description: "Krishi Suraksha AI is a prototype-stage intelligent agriculture platform designed to help smallholder farmers protect crops using AI, IoT sensors, smart alerts, and drone-assisted field monitoring.",
        ogTitle: "Krishi Suraksha AI – AI-Powered Smart Farm Protection Drone Platform",
        ogDescription: "Intelligent prototype-stage crop protection platform combining AI, IoT sensors, mobile alerts, and drone-assisted verification.",
        twitterTitle: "Krishi Suraksha AI – AI-Powered Smart Farm Protection Drone Platform",
        twitterDescription: "Intelligent prototype-stage crop protection platform combining AI, IoT sensors, mobile alerts, and drone-assisted verification."
    };

    // Replace Title
    productHtml = productHtml.replace(/<title>.*?<\/title>/, `<title>${productSeo.title}</title>`);

    // Replace Meta Description
    productHtml = productHtml.replace(
        /<meta name="description" content=".*?" \/>/,
        `<meta name="description" content="${productSeo.description}" />`
    );

    // Replace Open Graph Tags
    productHtml = productHtml.replace(
        /<meta property="og:title" content=".*?" \/>/,
        `<meta property="og:title" content="${productSeo.ogTitle}" />`
    );
    productHtml = productHtml.replace(
        /<meta property="og:description" content=".*?" \/>/,
        `<meta property="og:description" content="${productSeo.ogDescription}" />`
    );
    productHtml = productHtml.replace(
        /<meta property="og:url" content=".*?" \/>/,
        `<meta property="og:url" content="https://thasmaiinfotech.com/krishi-suraksha-ai" />`
    );

    productHtml = replaceOrAddMeta(productHtml, 'og:image', 'https://thasmaiinfotech.com/logo.png');
    productHtml = replaceOrAddName(productHtml, 'twitter:title', productSeo.twitterTitle);
    productHtml = replaceOrAddName(productHtml, 'twitter:description', productSeo.twitterDescription);
    productHtml = replaceOrAddName(productHtml, 'twitter:image', 'https://thasmaiinfotech.com/logo.png');

    const productFilePath = path.join(productDir, 'index.html');
    fs.writeFileSync(productFilePath, productHtml);
    console.log(`Generated: ${productFilePath}`);

    // 3. Generate Space Research Program Page
    const spaceDir = path.join(distDir, 'space-research');
    if (!fs.existsSync(spaceDir)) {
        fs.mkdirSync(spaceDir, { recursive: true });
    }

    let spaceHtml = template;

    // Replace Title
    spaceHtml = spaceHtml.replace(/<title>.*?<\/title>/, `<title>${spaceResearchSeo.title}</title>`);

    // Replace Meta Description
    spaceHtml = spaceHtml.replace(
        /<meta name="description" content=".*?" \/>/,
        `<meta name="description" content="${spaceResearchSeo.description}" />`
    );

    // Replace Open Graph Tags
    spaceHtml = spaceHtml.replace(
        /<meta property="og:title" content=".*?" \/>/,
        `<meta property="og:title" content="${spaceResearchSeo.ogTitle}" />`
    );
    spaceHtml = spaceHtml.replace(
        /<meta property="og:description" content=".*?" \/>/,
        `<meta property="og:description" content="${spaceResearchSeo.ogDescription}" />`
    );
    spaceHtml = spaceHtml.replace(
        /<meta property="og:url" content=".*?" \/>/,
        `<meta property="og:url" content="${spaceResearchSeo.url}" />`
    );

    spaceHtml = replaceOrAddMeta(spaceHtml, 'og:image', spaceResearchSeo.image);
    spaceHtml = replaceOrAddName(spaceHtml, 'twitter:title', spaceResearchSeo.ogTitle);
    spaceHtml = replaceOrAddName(spaceHtml, 'twitter:description', spaceResearchSeo.ogDescription);
    spaceHtml = replaceOrAddName(spaceHtml, 'twitter:image', spaceResearchSeo.image);

    spaceHtml = addCanonical(spaceHtml, spaceResearchSeo.url);
    spaceHtml = addJsonLd(spaceHtml, buildSpaceResearchSchema());

    // Prerender the page so its content is in the initial HTML rather than client-only
    const render = await loadRenderer();
    spaceHtml = addPrerenderedApp(spaceHtml, await render('/space-research'));
    spaceHtml = addModulePreload(spaceHtml, 'SpaceResearchPage-');
    // Building blocks this page shares with the BusBuddy page are split into their own chunk
    spaceHtml = addModulePreload(spaceHtml, 'SpaceResearchUI-');

    const spaceFilePath = path.join(spaceDir, 'index.html');
    fs.writeFileSync(spaceFilePath, spaceHtml);
    console.log(`Generated: ${spaceFilePath}`);

    // 4. Generate BusBuddy Product Page
    const busBuddyDir = path.join(distDir, 'busbuddy');
    if (!fs.existsSync(busBuddyDir)) {
        fs.mkdirSync(busBuddyDir, { recursive: true });
    }

    let busBuddyHtml = template;

    // Replace Title
    busBuddyHtml = busBuddyHtml.replace(/<title>.*?<\/title>/, `<title>${busBuddySeo.title}</title>`);

    // Replace Meta Description
    busBuddyHtml = busBuddyHtml.replace(
        /<meta name="description" content=".*?" \/>/,
        `<meta name="description" content="${busBuddySeo.description}" />`
    );

    // Replace Open Graph Tags
    busBuddyHtml = busBuddyHtml.replace(
        /<meta property="og:title" content=".*?" \/>/,
        `<meta property="og:title" content="${busBuddySeo.ogTitle}" />`
    );
    busBuddyHtml = busBuddyHtml.replace(
        /<meta property="og:description" content=".*?" \/>/,
        `<meta property="og:description" content="${busBuddySeo.ogDescription}" />`
    );
    busBuddyHtml = busBuddyHtml.replace(
        /<meta property="og:url" content=".*?" \/>/,
        `<meta property="og:url" content="${busBuddySeo.url}" />`
    );

    busBuddyHtml = replaceOrAddMeta(busBuddyHtml, 'og:image', busBuddySeo.image);
    busBuddyHtml = replaceOrAddName(busBuddyHtml, 'twitter:title', busBuddySeo.ogTitle);
    busBuddyHtml = replaceOrAddName(busBuddyHtml, 'twitter:description', busBuddySeo.ogDescription);
    busBuddyHtml = replaceOrAddName(busBuddyHtml, 'twitter:image', busBuddySeo.image);

    busBuddyHtml = addCanonical(busBuddyHtml, busBuddySeo.url);
    busBuddyHtml = addJsonLd(busBuddyHtml, buildBusBuddySchema());

    busBuddyHtml = addPrerenderedApp(busBuddyHtml, await render('/busbuddy'));
    busBuddyHtml = addModulePreload(busBuddyHtml, 'BusBuddyPage-');
    busBuddyHtml = addModulePreload(busBuddyHtml, 'SpaceResearchUI-');
    fs.rmSync(ssrDir, { recursive: true, force: true });

    const busBuddyFilePath = path.join(busBuddyDir, 'index.html');
    fs.writeFileSync(busBuddyFilePath, busBuddyHtml);
    console.log(`Generated: ${busBuddyFilePath}`);
}

generateStaticFiles().catch((error) => {
    console.error(error);
    fs.rmSync(ssrDir, { recursive: true, force: true });
    process.exit(1);
});
