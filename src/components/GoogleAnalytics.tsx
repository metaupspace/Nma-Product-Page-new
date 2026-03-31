'use client';

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import * as gtag from '../lib/gtag';

// Separate the component that uses useSearchParams
function AnalyticsTracker() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (!gtag.GA_TRACKING_ID) return;

        const url = pathname + searchParams.toString();
        gtag.pageview(url);
    }, [pathname, searchParams]);

    return null; // This component doesn't render anything
}

export default function GoogleAnalytics() {

    if (!gtag.GA_TRACKING_ID) {
        return null;
    }

    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
            />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
                }}
            />

            {/* Wrap the component that uses useSearchParams in Suspense */}
            <Suspense fallback={null}>
                <AnalyticsTracker />
            </Suspense>
        </>
    );
}