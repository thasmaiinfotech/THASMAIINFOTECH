/**
 * Krishi Suraksha AI Analytics Helper
 * Integration wrapper for Google Analytics (gtag).
 * Logs to console in development mode.
 */

export const logPageView = (path) => {
    if (window.gtag) {
        window.gtag('config', window.gtagId || '', {
            page_path: path,
        });
    }
    
    if (import.meta.env.DEV) {
        console.log(`[Analytics] PageView: ${path}`);
    }
};

export const logEvent = (action, category, label) => {
    if (window.gtag) {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
        });
    }
    
    if (import.meta.env.DEV) {
        console.log(`[Analytics] Event: ${action} | Category: ${category} | Label: ${label}`);
    }
};
