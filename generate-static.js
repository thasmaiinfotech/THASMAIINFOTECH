import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { teamMembers } from './src/data/teamData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, 'dist');
const templatePath = path.join(distDir, 'index.html');

async function generateStaticFiles() {
    if (!fs.existsSync(templatePath)) {
        console.error('Error: dist/index.html not found. Run "npm run build" first.');
        process.exit(1);
    }

    const template = fs.readFileSync(templatePath, 'utf-8');

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
        // Note: og:image might be relative in template, we should ensure it's absolute or correctly replaced
        // If the template has a default og:image, we replace it.
        // We'll assume the default is present.

        // Helper to replace or add meta tag
        const replaceOrAddMeta = (property, content) => {
            const regex = new RegExp(`<meta property="${property}" content=".*?" />`);
            if (regex.test(html)) {
                html = html.replace(regex, `<meta property="${property}" content="${content}" />`);
            } else {
                // Insert before </head>
                html = html.replace('</head>', `<meta property="${property}" content="${content}" />\n</head>`);
            }
        };

        replaceOrAddMeta('og:image', `https://thasmaiinfotech.com${member.photoUrl}`);

        // Twitter Cards
        const replaceOrAddName = (name, content) => {
            const regex = new RegExp(`<meta name="${name}" content=".*?" />`);
            if (regex.test(html)) {
                html = html.replace(regex, `<meta name="${name}" content="${content}" />`);
            } else {
                html = html.replace('</head>', `<meta name="${name}" content="${content}" />\n</head>`);
            }
        };

        replaceOrAddName('twitter:title', member.seo.twitterTitle);
        replaceOrAddName('twitter:description', member.seo.twitterDescription);
        replaceOrAddName('twitter:image', `https://thasmaiinfotech.com${member.photoUrl}`);


        const filePath = path.join(dir, 'index.html');
        fs.writeFileSync(filePath, html);
        console.log(`Generated: ${filePath}`);
    }
}

generateStaticFiles();
