export async function getPosts() {
    const postsRes = await fetch('http://localhost:6660/wp-json/wp/v2/posts?_embed');
    const posts = await postsRes.json();
    return posts;
}