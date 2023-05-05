import About from "@/components/About";
import CertAchieves from "@/components/CertAchieves";
import Contactme from "@/components/Contactme";
import Introduction from "@/components/Introduction";
import LazyLoadComponent from "@/components/LazyLoad";
import Portfolio from "@/components/Portfolio";
import Head from 'next/head'
import LazyLoad from "react-lazyload";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ritesh Hajare</title>
        <link rel="icon" href="f.png" />
      </Head>
      <LazyLoadComponent>
        <Introduction />
      </LazyLoadComponent>
      <LazyLoadComponent>
        <Portfolio />
      </LazyLoadComponent>
      <LazyLoad>
        <About />
      </LazyLoad>
      <LazyLoadComponent >
        <CertAchieves />
      </LazyLoadComponent>
      <LazyLoadComponent>
        <Contactme />
      </LazyLoadComponent>
    </>
  )
}
