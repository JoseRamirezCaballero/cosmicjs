import { Post } from '../lib/types';
import helpers from '../helpers';

export default function AuthorAttribution({
  post,
}: {
  post: Post;
}): JSX.Element {
  return (
    <div className="flex space-x-1">
      <span>Por</span>
      <a
        href={`/author/${post.metadata.author?.slug}`}
        className="font-medium text-green-600 dark:text-green-200"
      >
        {post.metadata.author?.title}
      </a>
      <span>
        en {helpers.stringToFriendlyDate(post.metadata.published_date)}
      </span>
    </div>
  );
}
