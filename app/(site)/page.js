import Head from 'next/head'
import Image from 'next/image'
import { metadata } from '../layout';

import Design from '../components/Design';
import Web from '../components/Web';
import Repo from '../components/Repo';

export default function Home() {
  return (
    <div>
      
      <Head>
        <title>{metadata.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="keywords" content="beck, banigo, kanno, user interface designer, ui designer, user interface developer, ui developer, frontend engineer, frontend developer, react developer" />
        <meta content={metadata.description} name="description" />
        <meta
          property="og:url"
          content="https://www.bekanno.com"
        />
        <link
          rel="canonical"
          href="https://www.bekanno.com"
        />
        <meta property="og:type" content={metadata.type} />
        <meta property="og:site_name" content="Beck Kanno" />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:image" content={metadata.image} />
      </Head>

      <div className="px-2 sm:px-4 py-8 fixed w-full z-20 top-0 left-0 border-gray-600 bg-opacity-30 backdrop-filter backdrop-saturate-150 backdrop-blur-lg" />

      <main className="p-4 xl:p-0">


        <div className="relative pt-10 md:pt-24 md:flex md:justify-between">
          <div className="static flex flex-col justify-between w-full md:max-w-496 md:fixed md:h-screen lg:py-88 lg:pl-88 md:pr-72 lg:pr-0">

            <header className="p-5 mt-8 md:mt-0 lg:p-6 md:max-w-sm text-gray-400 bg-sea bg-opacity-50 rounded-lg shadow-highlight md:p-5">
              <h5 className="text-3xl lg:text-4xl font-bold text-white">Beck Kanno</h5>
              <p className="text-lg lg:text-base pt-2 font-medium text-zinc-500">User Interface Developer</p>

              <div className="pt-5">
                <p>I design and build user-centric applications and experiences through Design and Code.</p>
              </div>

              <div className="relative flex my-10"> 

                <div className="w-3 h-3">
                  <div className="w-full h-full -translate-x-1/2 translate-y-1/3">
                    <span className="absolute w-full h-full bg-green-400 rounded-full opacity-75 animate-ping"></span>
                    <span className="absolute w-full h-full bg-green-400 rounded-full"></span>
                  </div>
                </div>

                <div className="pl-6">
                  <p className="">Currently</p>

                  <p>Working on my tan</p>
                </div>

              </div>

              <nav>
                <ul>
                  <li>
                    <a href="#design">-- PRODUCT DESIGN</a>
                  </li>
                  <li>
                    <a href="#web">-- WEB DEV</a>
                  </li>
                  <li>
                    <a href="#repo">-- GITHUB REPOS</a>
                  </li>
                  <li>-- TECHNICAL BLOG</li>
                </ul>
              </nav>

              <div className="py-6 md:py-24"></div>

              <div>
                <Image 
                  src="/images/image.png"
                  alt="Beck Kanno's image"
                  width={50}
                  height={50}
                />
              </div>

            </header>
          </div>


          <div className="static sm:p-32 md:max-w-536 lg:max-w-736 md:absolute md:right-0 lg:py-88 lg:pr-88 md:pl-0">
            <div>
              <Design />
            </div>

            <div>
              <Web />
            </div>

            <div>
              <Repo />
            </div>
          </div>
        </div>

      </main>
    </div>
  )
}
