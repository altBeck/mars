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
                    <a className="inline-flex items-center transition group group-hover:duration-600 text-zenith" href="#design">
                      <span className="text-xs tracking-wide">00</span>
                      <span className="border mx-2 w-8 group-hover:w-12 rounded-sm transition text-zenith hover:duration-600 "></span>
                      <span className="text-xs tracking-widest uppercase">PRODUCT DESIGN</span>
                    </a>
                  </li>

                  <li className="my-4">
                    <a className="inline-flex items-center transition group group-hover:duration-600 text-zenith" href="#web">
                      <span className="text-xs tracking-wide">01</span>
                      <span className="border mx-2 w-8 group-hover:w-12 rounded-sm transition group-hover:text-zenith hover:duration-600 "></span>
                      <span className="text-xs tracking-widest uppercase">WEB DEV</span>
                    </a>
                  </li>

                  <li>
                    <a href="#repo">-- GITHUB REPOS</a>
                  </li>
                  <li>-- TECHNICAL BLOG</li>
                </ul>
              </nav>

              <div className="py-6 md:py-24"></div>

              <div className="flex justify-between py-4">
                <div>
                  <Image 
                    src="/images/img.png"
                    alt="Beck Kanno's image"
                    width={50}
                    height={50}
                  />
                </div>

                <div className="flex">

                  <a href="https://github.com/altbeck" className="flex items-center px-2 text-white">
                    <Image 
                      src="/images/github.svg"
                      alt="GitHub 3d icon"
                      href="https://github.com/altbeck"
                      width={24}
                      height={24}
                    />
                  </a>

                  <a href="https;//dribbble.com/bekkr"
                    className="flex px-2 items-center text-white">

                    <Image 
                    src="/images/dribbble.svg"
                    alt="Dribbble 3d icon"
                    width={24}
                    height={24}
                    />
                  </a>

                  <a href="https://linkedin.com/in/kanno-beck" className="flex pl-2 items-center text-white">
                    <Image 
                    src="/images/linkedin.svg"
                    alt="Linkedin 3d icon"
                    width={24}
                    height={24}
                    />
                  </a>
                </div>

              </div>

              <button className="flex gap-x-2 text-white md:p-3 bg-sea justify-center p-2 hover:bg-gradient-to-t from-gray-950 to-sea rounded-md shadow-highlight w-full">
                <a className="flex" href="">My Resume</a>
              </button>

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
