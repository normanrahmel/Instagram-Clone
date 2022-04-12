let posts = [{
        'author': 'Instagram',
        'image': 'img/likejpg.jpg',
        'description': 'Test 1',
        'location': 'Berlin'
    },
    {
        'author': 'Business Insider',
        'image': 'img/Bild5.jpg',
        'description': 'Test 1',
        'location': 'London'
    },
    {
        'author': 'New York Times',
        'image': 'img/Bild7.jpg',
        'description': 'Test 1',
        'location': 'New York'
    },
    {
        'author': 'The-Social-Network',
        'image': 'img/scoialnetwork.jpg',
        'description': 'Test 1',
        'location': 'silicon valley'
    }, {
        'author': 'Nature-lakes',
        'image': 'img/Bild3.jpg',
        'description': 'Test 1',
        'location': 'Montreal'
    }, {
        'author': 'Lakes_&_Mountains',
        'image': 'img/Bild2.jpg',
        'description': 'Test 1',
        'location': 'Bali'
    }, {
        'author': 'Nature',
        'image': 'img/Bild1.jpg',
        'description': 'Test 1',
        'location': 'Bremen'
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

        <div class="containerPost">
            <div>${post['author']}</div>
            <div>${post['location']}</div>
            <img class="postImg" src="${post['image']}">
            <div>${post['description']}</div>
        </div>
    
    `;
}