import { Post } from '@/components/articles/Articles'
import Image from 'next/image'

const getPost = async (id: string): Promise<Post> => {
	const data = await fetch(`${process.env.PAYLOAD_SERVER_URL}/api/posts/${id}`)
	const post = await data.json()

	return post
}

export default async function PostPage({
	params: { postId },
}: {
	params: {
		postId: string
	}
}) {
	const post = await getPost(postId)
	return (
		<article>
			<div className="container mx-auto px-2 lg:px-0 my-20 text-center">
				<h1 className="font-serif font-bold text-2xl uppercase xl:text-3xl lg:text-3xl mb-10">
					{post.title}
				</h1>
				<Image
					src={process.env.PAYLOAD_SERVER_URL + post.image.url}
					width={1280}
					height={900}
					alt={post.title}
				/>
				<div className="w-1/2 max-w-full mx-auto">
					<p>{post.description}</p>
				</div>
			</div>
		</article>
	)
}
