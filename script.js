const likeBtn = document.getElementById("likeBtn")
const dislikeBtn = document.getElementById("disLikeBtn")

let counterLikes = 60
let counterDislike = 2
likeBtn.innerText = `👍 ${counterLikes}`
dislikeBtn.innerText = `👎 ${counterDislike}`

function handelLike() {
        
        counterLikes++
        counterDislike = 2
        likeBtn.innerText = `👍 ${counterLikes}`
        dislikeBtn.innerText = `👎 ${counterDislike}`
        likeBtn.disabled = true
        dislikeBtn.disabled = false
        setCookies()
        
   
}

function handleDislike() {
    counterLikes = 60
    counterDislike++

    dislikeBtn.innerText = `👎 ${counterDislike}`
    likeBtn.innerText = `👍 ${counterLikes}`
    dislikeBtn.disabled = true
    likeBtn.disabled = false
    setCookies()
}


function setCookies(){
    document.cookie = "voted=true; SameSite=Strict Max-Age=60"
}

