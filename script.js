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
let loggedAuthor = 'Affe_der_Nation'

function showhPosts() {
    let containerPosts = document.getElementById('containerPosts')
    containerPosts.innerHTML = "";
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        containerPosts.innerHTML += templateShowPosts(post, i);
    }

}

function templateShowPosts(post, i, j) {
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
                <h5 id="likesPlus${i}"> ${post['likes']} likes</h5>
            </div>
            <div class="descriptionPost">${post['description']}</div>
            
            <div class="input-group mb-3 inputPost">
                <img src="img/icons/emoticon.png">
                <input id="commentInput${j}" class="commentInput form-control" type="text" placeholder="Kommentar" aria-label="Recipient's username" aria-describedby="button-addon2">
                <button class="btn btn-outline-secondary postButton" type="button" id="button-addon2${i}">Post</button>
            </div>
        <div>            
    `;
}


//Like-Section
function like(i) {
    if (document.getElementById(`iconLike${i}`).src.endsWith('img/icons/red.png')) {
        document.getElementById(`iconLike${i}`).src = 'img/icons/heart.png';
        document.getElementById(`likesPlus${i}`).innerHTML = posts[i].likes - 1;
        showhPosts();
    } else {
        showhPosts();
        document.getElementById(`iconLike${i}`).src = 'img/icons/red.png';
        document.getElementById(`likesPlus${i}`).innerHTML = posts[i].likes + 1;
    }
}


// comment Section

function postComment(j) {
    let com = document.getElementById(`commentInput${j}`);

    if (com.value.length == 0) {
        alert('Bitte Text eingeben');
    } else {
        posts[j].comments.push(com.value);
        save();
        com.value = ``;
    }
    showhPosts();
}

function generateComments(j) {
    let htmlCode = '';

    for (let i = 0; i < posts[j].comments.length; i++) {
        htmlCode += `
        <div class="article-direction">
        <span><b>${loggedAuthor}</b></span>  <span>${posts[j].comments[i]}</span>
        </div>
        `
    }
    return htmlCode;
}

// save at local storage

function save() {
    let postsAsText = JSON.stringify(posts);
    // hier Speicher ich mein JSON im loacal Storage
    localStorage.setItem('comments', postsAsText);
}

// load from local Storage

function load() {
    let postsAsText = localStorage.getItem('comments', posts);

    if (postsAsText) { posts = JSON.parse(postsAsText); }
}