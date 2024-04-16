// Charge le blog depuis le fichier JSON
function loadBlogFromJSON() {
    fetch('Blog.json')
    .then(response => response.json())
    .then(data => {
        blog = Blog.fromJSON(data);
        displayPosts();
    })
    .catch(error => console.error('Error loading blog:', error));
}

// Affiche les posts sur la page
function displayPosts() {
    const postsContainer = document.getElementById('posts-container');
    postsContainer.innerHTML = '';
    blog.getPosts().forEach(post => {
        const postElement = document.createElement('div');
        postElement.textContent = `Title: ${post.title}, Content: ${post.content}`;
        postsContainer.appendChild(postElement);
    });
}

// Crée un nouvel utilisateur
function createUser(username, email) {
    const user = new User(username, email);
    console.log('New user created:', user);
}

// Ajoute un post au blog
function addPost(title, content) {
    const post = { title, content };
    blog.addPost(post);
    console.log('New post added:', post);
    saveBlogToJSON();
}

// Enregistre le blog au format JSON
function saveBlogToJSON() {
    const json = blog.toJSON();
    fetch('Blog.json', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: json
    })
    .then(() => console.log('Blog saved to JSON'))
    .catch(error => console.error('Error saving blog to JSON:', error));
}

let blog = new Blog();
loadBlogFromJSON();
