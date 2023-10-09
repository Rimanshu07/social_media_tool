
let users = [];
let posts = [];

function registerUser() {
    const username = document.getElementById('username').value;
    if (username) {
        users.push(username);
        document.getElementById('user-registration').style.display = 'none';
        document.getElementById('user-dashboard').style.display = 'block';
        document.getElementById('logged-in-user').textContent = username;
    }
}

function createPost() {
    const content = document.getElementById('post-content').value;
    if (content) {
        const username = document.getElementById('logged-in-user').textContent;
        const post = { username, content };
        posts.push(post);
        document.getElementById('post-content').value = '';
        displayPosts();
    }
}

function assignTask() {
    const assignee = document.getElementById('assignee').value;
    const taskDescription = document.getElementById('task-description').value;
    if (assignee && taskDescription) {
        const task = { assignee, taskDescription };
        console.log('Task Assigned:', task);
    }
}

function displayPosts() {
    const postsList = document.getElementById('posts');
    postsList.innerHTML = '';
    posts.forEach(post => {
        const li = document.createElement('li');
        li.textContent = `${post.username}: ${post.content}`;
        postsList.appendChild(li);
    });
}
