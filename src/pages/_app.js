import Head from 'next/head'
import '../styles/globals.css'
import { Montserrat } from 'next/font/google'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
})

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
     <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="public/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="public/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="public/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="public/images/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="public/images/favicon-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="public/images/favicon-512x512.png" />
        <link rel="manifest" href="public/images/site.webmanifest" />
    {/* Start of Tawk.to Script */}
        <script type="text/javascript">
          {`
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/68613b273111b119154e44cd/1iutsu58r';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
          `}
        </script>
        {/* End of Tawk.to Script */}
      </Head>
  <main className={`${montserrat.variable} font-sans bg-light dark:bg-dark dark:text-light w-full min-h-screen`}>
    <NavBar/>
    <AnimatePresence mode='wait'>
      <Component key={router.asPath} {...pageProps} />
    </AnimatePresence>
    <Footer />
  </main>
    </>
  )
}





