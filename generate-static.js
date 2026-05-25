import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { teamMembers } from './src/data/teamData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, 'dist');
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
}

generateStaticFiles();
