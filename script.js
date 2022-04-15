let posts = [{
        'author': 'Instagram',
        'image': 'img/likejpg.jpg',
        'description': '<b>Instagram</b> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        'location': 'Berlin',
        'likes': 13,
        'isLiked': false,
        'comments': []
    },
    {
        'author': 'Business Insider',
        'image': 'img/Bild5.jpg',
        'description': '<b>Business Insider</b> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        'location': 'London',
        'likes': 8665,
        'isLiked': false,
        'comments': []
    },
    {
        'author': 'New York Times',
        'image': 'img/Bild7.jpg',
        'description': '<b>New York Times</b> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        'location': 'New York',
        'likes': 2665,
        'isLiked': false,
        'comments': []
    },
    {
        'author': 'The-Social-Network',
        'image': 'img/scoialnetwork.jpg',
        'description': '<b>The-Social-Network</b> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        'location': 'Silicon-Valley',
        'likes': 153,
        'isLiked': false,
        'comments': []
    }, {
        'author': 'Nature-lakes',
        'image': 'img/Bild3.jpg',
        'description': '<b>Nature-lakes</b> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        'location': 'Montreal',
        'likes': 2513,
        'isLiked': false,
        'comments': []
    }, {
        'author': 'Lakes_&_Mountains',
        'image': 'img/Bild2.jpg',
        'description': '<b>Lakes_&_Mountains</b> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        'location': 'Bali',
        'likes': 3,
        'isLiked': false,
        'comments': []
    }, {
        'author': 'Nature',
        'image': 'img/Bild1.jpg',
        'description': '<b>Nature Lorem</b> ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        'location': 'Bremen',
        'likes': 13534,
        'isLiked': false,
        'comments': []
    }

];

function showhPosts() {
    let containerPosts = document.getElementById('containerPosts')
    containerPosts.innerHTML = "";
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        containerPosts.innerHTML += templateShowPosts(post, i);
    }

}

function templateShowPosts(post, i) {
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
                <img id="iconLike${i}" onclick="like(${i})" src="img/icons/heart.png">
                <img src="img/icons/arrowpng.png">
                <img src="img/icons/comments.png">
                <img src="img/icons/save.png">
            </div>
            <div class="sectionLikes">
                <h5> ${post['likes']} likes</h5>
            </div>
            <div class="descriptionPost">${post['description']}</div>
            
            <div class="input-group mb-3 inputPost">
                <img src="img/icons/emoticon.png">
                <input id="userComment${i}" class="commentInput" type="text" class="form-control" placeholder="Kommentar" aria-label="Recipient's username" aria-describedby="button-addon2">
                <button class="btn btn-outline-secondary postButton" type="button" id="button-addon2${i}">Post</button>
            </div>
        <div>            
    `;
}

function like(i) {
    document.getElementById(`iconLike${i}`).src = 'img/icons/red.png';
    document.getElementById(`iconLike${i}`).innerHTML = posts[i].likes + 1;
}

function addComment(post, i) {
    let userComment = document.getElementById(`userComment${i}`).value;
    //comments.push(userComment.value);
    posts[i]['comments'].push(userComment.value);
}