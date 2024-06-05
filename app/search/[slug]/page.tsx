import React from 'react';
import PostCard from '../../../components/PostCard';
import { getAllPosts } from '../../../lib/cosmic';
import Link from 'next/link';

export default async function Page({ params }: { params: { slug: string } }) {
    const allPosts = await getAllPosts();

    const formattedQuery = params.slug.replace(/-/g, ' ');

    const filteredPosts = allPosts.map(post => ({
        title: post.title,
        author: post.metadata.author?.title,
        categories: post.metadata.categories.map(category => category.title),
        content: post.metadata.content,
        teaser: post.metadata.teaser
    })).filter(post => {
        const searchFields = [post.title, post.teaser, post.content];
        return searchFields.some(field => field.toLowerCase().includes(formattedQuery.toLowerCase()));
    });

    const posts = allPosts.filter(post => filteredPosts.some(filtered => filtered.title === post.title));

    return (
        <main className="mx-auto mt-24 w-full max-w-7xl flex-col space-y-16 px-4 lg:px-0">
            {posts.length === 0 &&
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 flex items-center justify-center h-fullrounded-lg">
                    <div className="mx-auto max-w-screen-sm text-center">
                        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-blue-600">404</h1>
                        <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-white">No se encontraron resultados.</p>
                        <p className="mb-4 text-lg font-light text-gray-400">Lo sentimos, no hemos encontrado ningún resultado que coincida con tu búsqueda. Puedes intentar buscar nuevamente o regresar a la página de inicio.</p>
                        <Link href="/" className="inline-flex text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-blue-900 my-4">Volver a la página de inicio</Link>
                    </div>

                </div>
            }
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {posts.map((post) => (
                    <div key={post.id}>
                        <PostCard post={post} />
                    </div>
                ))}
            </div>
        </main>
    );

}
export const revalidate = 60;

