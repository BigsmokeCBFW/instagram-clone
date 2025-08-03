const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 212003
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 41000
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152357
    }
]

const mainEl = document.getElementById('main')

function renderPost() { 
    mainEl.innerHTML = posts.map((postObj) =>{
        const {name, username, location, avatar, post, comment, likes} = postObj
        return`
            <div class="post-container">
                <div class="user-info">
                    <img src="${avatar}" alt="${name}'s profile picture " class="avatar">
                    <span>
                        <h2 class="user-name">${username}</h2>
                        <h3 class="location-text">${location}</h3>
                    </span>
                </div>

                <img src="${post}" alt="selfie artwork from ${name}" class="post-img">

                <div class="post-content">
                    <div class="react-btn">
                        <img src="images/icon-heart.png" alt="like icon" class="icon">
                        <img src="images/icon-comment.png" alt="comment icon" class="icon">
                        <img src="images/icon-dm.png" alt="share icon" class="icon">
                    </div>
                    <h4>${likes.toLocaleString('en-US')}</h4>
                    <h5><span class="bold">${username}</span> ${comment}</h5>
                </div>
            </div>
    ` }).join("")

}

renderPost()