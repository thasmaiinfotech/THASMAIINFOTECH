import React, { StrictMode } from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { Writable } from 'node:stream';
import { Buffer } from 'node:buffer';
import { AppShell } from './App.jsx';

// Build-time prerender, used by generate-static.js. Mirrors the provider tree in
// main.jsx so the markup it produces hydrates cleanly in the browser.
export function render(url) {
    return new Promise((resolve, reject) => {
        const chunks = [];
        const sink = new Writable({
            write(chunk, _encoding, callback) {
                chunks.push(Buffer.from(chunk));
                callback();
            },
            final(callback) {
                resolve(Buffer.concat(chunks).toString('utf8'));
                callback();
            }
        });

        const { pipe } = renderToPipeableStream(
            <StrictMode>
                <HelmetProvider context={{}}>
                    <StaticRouter location={url}>
                        <AppShell />
                    </StaticRouter>
                </HelmetProvider>
            </StrictMode>,
            {
                // Waiting for everything lets lazy routes resolve, so the output is complete HTML
                onAllReady() {
                    pipe(sink);
                },
                onError: reject
            }
        );
    });
}
