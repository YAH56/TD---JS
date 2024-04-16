class Blog {
    constructor() {
        this.posts = [];
    }

    addPost(post) {
        this.posts.push(post);
    }

    getPosts() {
        return this.posts;
    }

    toJSON() {
        return JSON.stringify(this.posts);
    }

    static fromJSON(json) {
        const blog = new Blog();
        blog.posts = JSON.parse(json);
        return blog;
    }
}
