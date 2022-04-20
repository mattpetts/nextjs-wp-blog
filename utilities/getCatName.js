export async function getCatName(id) {
    const catRes = await fetch(`http://localhost:6660/wp-json/wp/v2/categories/${id}`);
    const cat = await catRes.json();
    return cat;
}