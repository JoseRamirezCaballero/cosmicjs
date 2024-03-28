'use client'
import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import { Post } from '../lib/types';
import { getAllPosts } from '../lib/cosmic';
import { sanitize } from 'isomorphic-dompurify';

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


  // Carrousel
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const allPosts = await getAllPosts();
      const fetchedPosts = allPosts.filter((post) => post.metadata.categories.map((category) => category.title).includes('Noticias'))
      setPosts(fetchedPosts);
    }

    fetchPosts();
  }, []);

  const goToPrevPost = () => {
    setCurrentPostIndex((prevIndex) => (prevIndex === 0 ? posts.length - 1 : prevIndex - 1));
  };

  const goToNextPost = () => {
    setCurrentPostIndex((prevIndex) => (prevIndex === posts.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>

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
          <h2 className='z-5 mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl'>Constructora Pedro</h2>
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
          <div className='flex flex-col mt-8 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 z-5'>
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

      <section
        className="h-screen relative"
        style={{
          backgroundImage: `url('${posts[currentPostIndex]?.metadata.hero?.imgix_url}')`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          backgroundBlendMode: 'multiply',
          aspectRatio: '1:1',
        }}
      >
        <div className='relative mt-10 md:mt-0 px-4 mx-24 max-w-screen-xl h-full flex flex-col justify-center items-center text-white'>
          <Link href={`/posts/${posts[currentPostIndex]?.slug}`} className='text-center'>
            <h2 className='z-5 mb-4 text-4xl font-extrabold text-white tracking-tight leading-none lg:text-5xl'>{posts[currentPostIndex]?.title}</h2>
            <div
              className="py-2 sm:py-6 text-lg font-normal text-white sm:text-xl z-5 flex items-center"
              dangerouslySetInnerHTML={{
                __html: sanitize(posts[currentPostIndex]?.metadata.teaser) ?? '',
              }}
            ></div>
          </Link>

          <div className="flex flex-col mt-4 sm:mt-8 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 z-10">
            <div className="sm:flex sm:justify-center">
              <Link href="/noticias" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">
                Ir a Noticias
                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
              </Link>
            </div>
          </div>

        </div>
        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={goToPrevPost}>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg className="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={goToNextPost}>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg className="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </section>
    </>
  );
}
