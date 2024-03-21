import React from 'react';
import { getAllPosts } from '../../lib/cosmic';
import PostCard from '../../components/PostCard';

export default async function Page(): Promise<JSX.Element> {
    const posts = await getAllPosts();

    return (
        <main className="mx-auto mt-24 w-full max-w-3xl flex-col space-y-16 px-4 lg:px-0">
            {!posts && 'Debes agregar al menos una publicación'}
            {posts &&
                posts.map((post) => {
                    return (
                        <div key={post.id}>
                            <PostCard post={post} />
                        </div>
                    );
                })}
        </main>
    );
}
export const revalidate = 60;
