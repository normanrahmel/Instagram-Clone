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

            <div class="headerPost" >
                <img class="iconsPost"  src="${post['image']}" alt="">
                <h4>${post['author']}</h4>
            </div>

            <div class="locationPost">
                   <h5> ${post['location']}</h5>
            </div>

            <div class="postImg">
                <img src="${post['image']}">
            </div>

            <div class="likeCommentSection">
                <img src="img/icons/heart.png">
                <img src="img/icons/arrowpng.png">
                <img src="img/icons/comments.png">
                <img src="img/icons/save.png">
            </div>

            <div>${post['description']}</div>
        </div>
    
    `;
}