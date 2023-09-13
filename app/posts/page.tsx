import { Post, PostsProps } from '@/components/articles/Articles'
import CardArticle from '@/components/articles/CardArticle'

const getPosts = async (): Promise<PostsProps> => {
	const data = await fetch(`${process.env.PAYLOAD_SERVER_URL}/api/posts/`)
	const posts = await data.json()

	return posts
}

export default async function Posts() {
	const posts = await getPosts()

	return (
		<section>
			<div className="container mx-auto px-2 lg:px-0 my-20">
				<h1 className="font-serif font-bold text-2xl uppercase xl:text-3xl lg:text-3xl mb-10">
					Posts
				</h1>
				<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
					{posts.docs.map((post: Post) => (
						<CardArticle
							key={post.id}
							url={post.id}
							image={
								process.env.PAYLOAD_SERVER_URL + post.image.sizes.thumbnail.url
							}
							title={post.title}
							description={post.description}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
