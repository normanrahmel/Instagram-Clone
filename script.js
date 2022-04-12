let posts = [{
        'author': 'Tagesschau',
        'image': 'img/likejpg.jpg',
        'description': 'Test 1',
        'location': 'München'
    },
    {
        'author': 'Tagesschau',
        'image': 'img/Bild5.jpg',
        'description': 'Test 1',
        'location': 'München'
    },
    {
        'author': 'Tagesschau',
        'image': 'img/Bild7.jpg',
        'description': 'Test 1',
        'location': 'München'
    },
    {
        'author': 'Tagesschau',
        'image': 'img/scoialnetwork.jpg',
        'description': 'Test 1',
        'location': 'München'
    }, {
        'author': 'Tagesschau',
        'image': 'img/Bild3.jpg',
        'description': 'Test 1',
        'location': 'München'
    }, {
        'author': 'Tagesschau',
        'image': 'img/Bild2.jpg',
        'description': 'Test 1',
        'location': 'München'
    }, {
        'author': 'Tagesschau',
        'image': 'img/Bild1.jpg',
        'description': 'Test 1',
        'location': 'München'
    }

];

function showhPosts() {
    let containerPosts = document.getElementById('containerPosts')
    containerPosts.innerHTML = "";
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        containerPosts.innerHTML += templateShowPosts(post);
    }

}

function templateShowPosts(post) {
    return /*html*/ `
    <div class="overlayPost">
        <div class="onePost">
        <div>${post['author']}</div>
        <div>${post['location']}</div>
        <img class="postImg" src="${post['image']}">
        <div>${post['description']}</div>
        </div>
    </div>
    `;
}