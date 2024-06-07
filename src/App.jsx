import "./App.css";
import Porfile from "./assets/vijay07_profile.jpeg";
import Project1 from "./assets/ecommerce-pic.png";
import Project2 from "./assets/Movizz-pic.png";
import Project3 from "./assets/Todo-pic.png";
import Project4 from "./assets/project4.png";
import LinkedIn from "./assets/linkedin.svg";
import Instagram from "./assets/instagram.svg";
import ArrowDown from "./assets/arrow-down.svg";
import c from "./assets/C.png"
import cplus from "./assets/C++.png"
import java from './assets/Java.png'
import python from './assets/Python.png'
import Tailwind from './assets/Tailwind.png'
import github from './assets/Github.png'
import html from './assets/html.png'
import css from './assets/css.png'
import javas from './assets/javascript.png'
import reacts from './assets/react.png'
import Resume from './assets/vijay07appu_Resume.pdf'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { useEffect, useState } from "react";



function App() {

  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if (window.pageYOffset > 200) {
      setScrolling(true)
    } else {
      setScrolling(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll)
    return () => {
      window.removeEventListener("scroll", onPageScroll)
    }
  }, [])

  const techs = [
    {
      id: 1,
      src: c,
      title: 'C',
      style: 'shadow-blue-500'

    },
    {
      id: 2,
      src: cplus,
      title: 'C++',
      style: 'shadow-blue-500'

    },
    {
      id: 3,
      src: java,
      title: 'Java',
      style: 'shadow-red-500'

    },
    {
      id: 4,
      src: python,
      title: 'Python',
      style: 'shadow-yellow-500 '

    },
    {
      id: 5,
      src:html,
      title: 'HTML',
      style: 'shadow-orange-500'

    },
    {
      id: 6,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500'

    },
    {
      id: 7,
      src: javas,
      title: 'Javascript',
      style: 'shadow-yellow-500'

    },
    {
      id: 8,
      src: reacts,
      title: 'React',
      style: 'shadow-blue-500 '

    },
    {
      id: 9,
      src: Tailwind,
      title: 'Tailwind',
      style: 'shadow-blue-500 '

    }
  ]

  const projets = [
    {
      id: 1,
      src: Project1,
      title: 'ShopNest',
      subtitle: 'It is a web application focused on providing e-commerce services.',
      link1: 'https://vijay07-ecommercezz.netlify.app/',
      link2:'https://github.com/vijay07appu/React-Ecommerce'


    },
    {
      id: 2,
      src: Project2,
      title: 'Movizz',
      subtitle: 'It is a web application focuses on providing video streaming services.',
      link1:'https://vijay07-movizzzz.netlify.app/',
      link2:'https://github.com/vijay07appu/Movizz'

    },
    {
      id: 3,
      src: Project3,
      title: 'Checkmate',
      subtitle: 'It is a web application , used to track user daily routine.',
      link1:'https://vijay-jd-todo.netlify.app/',
      link2:'https://github.com/vijay07appu/To-Do'

    }
    
 

  ]

  const links = [
    {
      id: 1,
      child: (
        <>
          Github<FaGithub size={30} />
        </>

      ),
      href: 'https://github.com/vijay07appu',
      style: 'rounded-tr-md'


    },
    {
      id: 2,
      child: (
        <>
          Linkeden<FaLinkedin size={30} />
        </>

      ),
      href: 'https://www.linkedin.com/in/vijay-jd-1a5203231/'

    },
    {
      id: 3,
      child: (
        <>
          Mail<HiOutlineMail size={30} />
        </>

      ),
      href: 'mailto:work.vijay07appu@gmail.com'

    }
  ]


  return (
    <>
      <div className="max-w-4xl m-auto relative">
        <header className={`${scrolling ? 'border-b border-gray-900' : ''}  fixed left-0 right-0 top-0 z-20`} id="home">
          <div className="container m-auto px-4 py-6 max-w-4xl bg-black">
            <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
              <div>
                <h1 className="font-bold text-2xl">Vijay Portfolio</h1>
              </div>
              <div>
                <ul className="flex gap-4">
                  <li>
                    <a href="#projects" className="text-gray-400 hover:text-white cursor-pointer">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#technologies" className="text-gray-400 hover:text-white cursor-pointer">
                      Technologies
                    </a>
                  </li>
                  <li>
                    <a href="#education" className="text-gray-400 hover:text-white cursor-pointer">
                      Education
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-gray-400 hover:text-white cursor-pointer">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        {/* SocialLinks section */}

        <section>
          <div className='hidden  lg:flex flex-col top-[28%] left-0 fixed  rounded-sm'>
            <ul>

              {
                links.map(({ id, child, href, style }) => (

                  <li key={id} className={'flex justify-between  items-center w-40 h-14 bg-gradient-to-t  from-blue-500 to-cyan-500  px-4 ml-[-100px] hover:ml-[-10px]' + " " + style}>
                    <a href={href} className='flex items-center w-full justify-between'>
                      {child}
                    </a>
                  </li>

                ))
              }

            </ul>
          </div>

        </section>
        <main className="relative mt-28">
          {/* Intro/Banner section */}
          <section>
            <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
              <div>
                <h2 className="font-bold text-4xl">Hello, I'm Vijay JD,</h2>
                <div>
                  <h2 className="font-bold text-4xl mt-1 gradiant-text">Software Engineer</h2>
                </div>
                <div>
                  <p className="mt-4 text-gray-400">

                    I am a motivated upcoming graduate, seeking a challenging software engineering opportunity, where I can apply my skills in
                    building and enhancing web applications.
                  </p>
                  <button className="px-8 shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    <a href={Resume} download={true} target="_blank">
                      Download resume
                    </a>
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="after:bg-[url('./large-long.png')] after:bg-contain after:block after:bg-no-repeat after:w-[420px] after:h-[320px] after:absolute after:top-0 after:-left-20 sm:after:-left-40 before:bg-[url('./small.png')] before:bg-contain before:block before:bg-no-repeat before:w-[220px] before:h-[220px] before:absolute before:bottom-0 before:-right-10">
                  <img src={Porfile} className="relative z-10 w-[280px] m-auto sm:w-[600px]" />
                </div>
              </div>
            </div>
          </section>
          {/* Projects section */}
          {/* Tech stack is removed  */}
          <section className="py-14" id="projects"  >
            <div className='max-w-screen-lg mx-auto  p-4 flex flex-col justify-center w-full h-full text-white'>
              <div>
                <h2 className="font-bold text-4xl">Projects</h2>
              </div>
              <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-8 text-center py-8 px-12 sm:px-0'>

                {
                  projets.map(({ id, src, title, subtitle,tech,link1,link2 }) => (

                    <div key={id} className="border border-gray-500 rounded-md p-5 flex-1">
                      <img src={src} className="w-full h-auto"/>
                      <h3 className="text-2xl font-semibold mt-8">
                        {title}
                      </h3>
                      <p className="text-gray-400 items-center text-sm mt-2 ">
                        {subtitle}
                      </p>
                      <div className="flex mt-10  gap-2">
                        <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                          <a href={link1}>
                          Live preview
                          </a>
                        </button>
                        <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                          <a href={link2}>
                          Checkout github
                          </a>
                        </button>
                      </div>
                    </div>


                  ))

                }


              </div>
            </div>

          </section>
          {/* Technoglies section */}
          <section className="py-14" id="technologies">
            <div >
              <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                  <p className='text-4xl font-bold '>Technologies</p>
                  <p className="mt-4">These are the technologies I've worked with...</p>
                </div>
                <div className='w-full grid grid-cols-3 sm:grid-cols-4 gap-8 text-center mt-5 py-8 px-12 sm:px-0'>
                  {
                    techs.map(({ id, src, title, style }) => (
                      <div key={id} className={`shadow-md hover:scale-110 duration-500 py-2 rounded-lg ${style}`}>
                        <img src={src} alt='' className='w-20 mx-auto' />
                        <p className='mt-4'>{title}</p>
                      </div>

                    ))
                  }

                </div>
              </div>



            </div>
          </section>
          {/* Additional skills section */}
          <section>
            <div className="container m-auto px-4 py-14">
              <h2 className="text-2xl font-semibold">
                Additional technologies and skills
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
                <div>
                  <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                    Git
                  </p>
                </div>
                <div>
                  <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                    Bootstrap
                  </p>
                </div>
                <div>
                  <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  FireBase
                  </p>
                </div>
                <div>
                  <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                    Intellij
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-4 sm:mt-6 w-[80%]">
                <div>
                  <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                    Android Studio
                  </p>
                </div>
                <div>
                  <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                    ReduxToolkit
                  </p>
                </div>
                <div>
                  <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                    Teamwork
                  </p>
                </div>
                <div>
                  <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                    Visual Studio Code
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Education section  */}
          <section className="py-20" id="education">
            <div className="container m-auto px-4">
              <h2 className="text-2xl font-semibold">Education</h2>
              <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-0 sm:before:bottom-2 before:w-1 before:bg-white">
                <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                  <h3 className="absolute left-0 text-lg font-semibold">2024</h3>
                  <p className="text-2xl">
                    Malnad College of Engineering - Karnataka
                  </p>
                  <p>Computer Science , CGPA - 9.2</p>
                </div>
                <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                  <h3 className="absolute left-0 text-lg font-semibold">2020</h3>
                  <p className="text-2xl">
                    Jnanasagara PU College - Karnataka
                  </p>
                  <p>
                    PCMC , Aggregate - 92%
                    
                  </p>
                </div>
                <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                  <h3 className="absolute left-0 text-lg font-semibold">2018</h3>
                  <p className="text-2xl">
                    Poornachandra Public School - Karnataka
                  </p>
                  <p>
                    CBSE(Class-X) , CGPA - 8.8
                  </p>
                </div>
                
              </div>
            </div>
          </section>

          {/* Contact form  */}

          <section id="contact" className="py-8">
            <div className='w-full h-screen bg-black text-white'>
              <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                  <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                  <p className='py-6'>Submit the form below to get in touch with me.</p>
                </div>
                <div className='flex justify-center items-center'>
                  <form action="https://getform.io/f/zbzoorya" method='POST'
                    className='flex flex-col w-full sm:w-1/2'>
                    <input className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' type="text" name='name' placeholder='Enter your name : ' />
                    <input className='p-2 my-3 bg-transparent border-2 rounded-md text-white focus:outline-none' type="text" name='email' placeholder='Enter your email : ' />
                    <textarea rows='10' className=' p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' type="text" name='message' placeholder='Enter your Message : '>

                    </textarea>
                    <button className='text-white bg-gradient-to-t from-blue-500 to-cyan-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's Talk</button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer>
          <div className="container m-auto h-full px-4  ">

            <div >
              <ul className="flex  gap-4 justify-center mb-20  ">

                <li className="">
                  <a href="https://github.com/vijay07appu">
                    <FaGithub size={30} />

                  </a>
                </li>
                <li>
                  <a href='https://www.linkedin.com/in/vijay-jd-1a5203231/'>
                    <FaLinkedin size={30} />
                  </a>
                </li>
                <li>
                  <a href='mailto:work.vijay07appu@gmail.com'>
                    <HiOutlineMail size={30} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        {
          scrolling && (
            <button className="fixed block right-8 bottom-0 w-24" onClick={() => {
              window.scrollTo(0, 0);
            }}>
              <img src={ArrowDown} />
            </button>
          )
        }
      </div>









    </>
  )
}

export default App
