let posts = [{
        'author': 'Tagesschau',
        'image': '',
        'description': 'Test 1',
        'location': 'München'
    },
    {
        'author': 'Tagesschau',
        'image': '',
        'description': 'Test 1',
        'location': 'München'
    },
    {
        'author': 'Tagesschau',
        'image': '',
        'description': 'Test 1',
        'location': 'München'
    },
    {
        'author': 'Tagesschau',
        'image': '',
        'description': 'Test 1',
        'location': 'München'
    }

];

function showhPosts() {
    document.getElementById('containerPosts').innerHTML = "";
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        document.getElementById('containerPosts').innerHTML += templateShowPosts();
    }

}

function templateShowPosts(post) {
    return /*html*/ `
    <div>
        <img src="${post['image']}">
        <div>${post['author']}</div>
    </div>
    `;
}