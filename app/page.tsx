'use client'
import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

export default function Page() {
  const SEGUNDOS = 2500;
  const [currentIndex, setCurrentIndex] = useState(0);
  const videos = [
    '/videos/video1.mp4',
    '/videos/video2.mp4',
    // '/videos/video3.mp4',
    // '/videos/video4.mp4',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, SEGUNDOS);
    return () => clearInterval(interval);
  }, [videos]);

  return (
    <section className="bg-gray-700 bg-blend-multiply h-screen relative">
      <div className="absolute inset-0 overflow-hidden">
        {videos.map((video, index) => (
          <video
            key={index}
            autoPlay
            loop
            muted
            className={`absolute inset-0 w-full h-full object-cover ${index !== currentIndex ? 'hidden' : ''}`}
          >
            <source src={video} type='video/mp4' />
            No soportado por el Navegador
          </video>
        ))}
      </div>
      <div className='relative px-4 mx-auto max-w-screen-xl h-full flex flex-col justify-center items-center text-white'>
        <h2 className='z-10 mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl'>Constructora Pedro</h2>
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
          className='mt-8 text-lg font-normal text-gray-200 sm:text-xl z-10'
        />
        <div className='flex flex-col mt-8 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 z-10'>
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
  );
}
