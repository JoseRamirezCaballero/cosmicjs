import React from 'react';
import { getAllPosts } from '../../lib/cosmic';
import PostCard from '../../components/PostCard';

export default async function Page(): Promise<JSX.Element> {
    const allPosts = await getAllPosts();
    const posts = allPosts.filter((post) => post.metadata.categories.map((category) => category.title).includes('Noticias'));
    return (
        <main className="mx-auto mt-24 w-full max-w-7xl flex-col space-y-16 px-4 lg:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {!posts && 'Debes agregar al menos una publicación'}
                {posts &&
                    posts.map((post) => {
                        return (
                            <div key={post.id}>
                                <PostCard post={post} />
                            </div>
                        );
                    })}
            </div>
        </main>
    );
}
export const revalidate = 60;
