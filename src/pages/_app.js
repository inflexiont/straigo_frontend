import Head from "next/head";
import Router from "next/router";
import Script from "next/script";
import "normalize.css";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useRef } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ParallaxProvider } from "react-scroll-parallax";
import "swiper/css";
import "swiper/css/navigation";
import { AppProvider } from "../context/appContext";
import "../styles/globals.scss";

NProgress.configure({ showSpinner: true });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const queryClientRef = useRef();

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  // <!-- Google Tag Manager -->
  // <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  // new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  // j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  // 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  // })(window,document,'script','dataLayer','GTM-PQ2D6B8');</script>
  // <!-- End Google Tag Manager -->
  return (
    <QueryClientProvider client={queryClientRef.current}>
      <AppProvider>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1 maximum-scale=1"
          />
          <meta
            name="description"
            content="straigo, is one of the leading IT Solution & Consultation Company that aims to deliver the best technology Solutions. We are the team that provides web design, web development, and app development. Save your time and efforts and hire the best team at the right time with a cost-effective, easy-to-use, and unified platform."
          />
          <meta name="robots" content="noindex, nofollow" />
          <meta
            name="keywords"
            content="Web design, web development, app development, Jeddah digital agency, software development, saudi arabia website agency, marketing agency, UI design, Good website company,straigo,straigo-website, straigo-service, straigo-location, straigo-Jeddah,straigo_web_service jeddah web_development, saudi web_development"
          />
          <meta name="author" content="straigo" />
          <meta name="theme-color" content="#72E2AE" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="apple-touch-icon" href="/icon-192x192.png" />
          <title>straigo-Full of Tech Senses </title>
        </Head>
        <ParallaxProvider>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />

            <Script
              strategy="lazyOnload"
              src={`https://www.googletagmanager.com/gtag/js?id=G-LDLVDE7TCB`}
            />
            <Script strategy="lazyOnload" id="google-analytics">
              {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                 gtag('js', new Date());

                 gtag('config', 'G-LDLVDE7TCB');`}
            </Script>
            <Script strategy="afterInteractive" id="google-tags">
              {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                 new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                 j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
               'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                 })(window,document,'script','dataLayer','GTM-PQ2D6B8')`}
            </Script>
          </Hydrate>
        </ParallaxProvider>
      </AppProvider>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default MyApp;
