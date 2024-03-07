'use client'
import { useState, useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation'
import Link from 'next/link'

export default function Page() {
  const [index, setIndex] = useState(0)
  const images = [
    '/img/bg1.jpg',
    '/img/bg2.jpg',
    '/img/bg3.jpg',
    '/img/bg4.jpg',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % images.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section
      style={{
        backgroundImage: `url('${images[index]}')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundColor: '#7f7f7f',
        backgroundBlendMode: 'multiply'
      }}
    >

      <div className='px-4 mx-auto max-w-screen-xl h-screen text-center py-24 lg:py-56'>
        <h2 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl'>Constructora Pedro</h2>
        <TypeAnimation
          sequence={[
            "¡Bienvenido/a a nuestra página web profesional, creada por expertos en desarrollo web!",
            1000,
            "Descubre la calidad del trabajo realizado por profesionales altamente capacitados.",
            1000,
            "Confía en la experiencia y conocimiento de nuestro equipo.",
            1000,
            "La profesionalidad de nuestro equipo se refleja en cada aspecto de nuestra página web.",
            1000,
            "Desde el diseño hasta la implementación, garantizamos un resultado de calidad y profesionalismo.",
            1000
          ]}
          wrapper='p'
          cursor
          speed={60}
          deletionSpeed={90}
          repeat={Infinity}
          className='mb-8 text-lg font-normal text-gray-200 lg:text-xl sm:px-16 lg:px-48'
        />
        <div className='flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4'>
          <Link href='/blog' className='inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900'>
            Ir al Blog
            <svg aria-hidden='true' className='ml-2 -mr-1 w-4 h-4' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z' clipRule='evenodd' /></svg>
          </Link>
          <Link href='/about' className='inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400'>
            Conocenos
          </Link>
        </div>
      </div>
    </section>
  )
}