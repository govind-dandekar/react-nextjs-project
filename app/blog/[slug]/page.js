// [slug] folder with page.js enables dynamic routing
// with different path values; [] = path segment
// but don't know value of segment yet; []
// gives access to concrete value

// next passes params prop
// placeholder in [slug] is key; value stored under key 
// is concrete value of url path
function BlogPostPost({params}){
	return <main>
		<h1>Blog Post</h1>
		<p>{params.slug}</p>
	</main>
}

export default BlogPostPost;