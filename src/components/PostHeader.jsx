import Date from './Date'
import CoverImage from './CoverImage'
import PostTitle from './PostTitle'
import { ExternalLinkIcon } from '@/configs/icons'
import Image from "next/image";
import avatar from '../../public/images/avatar_4.png'

const PostHeader = ({ post }) => {
  return <>
    <PostTitle>{post.title}</PostTitle>
    <div className="flex items-center mb-8">
      <div className="flex items-center relative">
        <span className="ml-2 text-sm">
          <Date dateString={post.created_at} formatStyle="LLLL dd, yyyy" />
          {post.metadata.category.title}
        </span>
      </div>
    </div>
    <CoverImage
      title={post.title}
      url={post.metadata.cover_image.imgix_url}
    />
    <div className="flex flex-row justify-between sm:items-center pb-8 border-b">
      <div className="sm:flex items-center gap-x-2">
        {post.metadata.url ? (
          <>
            <a
              href={post.metadata.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-accent hover:text-gray-500 text-sm md:ml-4 w-fit"
            >
                URL
              <span>
                <ExternalLinkIcon />
              </span>
            </a>

            <a
              href={post.metadata.repo_url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-accent hover:text-gray-500 text-sm"
            >
              Github Repo
              <span>
                <ExternalLinkIcon />
              </span>
            </a>
          </>
        ) : undefined}
      </div>
    </div>
  </>;
}
export default PostHeader