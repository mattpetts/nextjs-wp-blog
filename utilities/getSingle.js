export async function getSingle(slug) {
    const postRes = await fetch(`http://localhost:6660/wp-json/wp/v2/posts?slug=${slug}&_embed`);
    const post = await postRes.json();
    return post[0];
}