'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getAllPosts } from '../../lib/cosmic';
import { sanitize } from 'isomorphic-dompurify';
import { Post } from '../../lib/types';
import AuthorAvatar from '../../components/AuthorAvatar';
import AuthorAttribution from '../../components/AuthorAttribution';
import Tag from '../../components/Tag';

export default function Page() {
    const [currentPostIndex, setCurrentPostIndex] = useState(0);
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        async function fetchPosts() {
            const allPosts = await getAllPosts();
            const fetchedPosts = allPosts.filter((post) =>
                post.metadata.categories.map((category) => category.title).includes('Noticias') === false
            );
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
                <Link href={`/posts/${posts[currentPostIndex]?.slug}`}>
                    <h2 className='z-10 mb-4 text-4xl text-white font-extrabold tracking-tight leading-none lg:text-5xl'>{posts[currentPostIndex]?.title}</h2>
                    <div className='hidden sm:block'>
                        <div
                            className="py-2 sm:py-6 text-lg font-normal !text-white sm:text-xl z-10 flex items-center"
                            dangerouslySetInnerHTML={{
                                __html: sanitize(posts[currentPostIndex]?.metadata.teaser) ?? '',
                            }}
                        ></div>
                    </div>
                </Link>

                <div className='flex flex-row sm:justify-center space-y-0 space-x-4'>
                    {posts[currentPostIndex] && <AuthorAvatar post={posts[currentPostIndex]} />}
                    {posts[currentPostIndex] && <AuthorAttribution post={posts[currentPostIndex]} />}
                </div>

                <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center p-4 space-x-4 z-10">
                    {posts[currentPostIndex]?.metadata.categories &&
                        posts[currentPostIndex]?.metadata.categories.map((category) => (
                            <Tag key={category.title}>{category.title}</Tag>
                        ))}
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
    );
}
