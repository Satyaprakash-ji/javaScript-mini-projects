const generateBtn = document.querySelector(".generate");
const memeName = document.querySelector(".meme-name");
const memeImage = document.querySelector(".meme-image");

function getMeme(){
    fetch("https://api.imgflip.com/get_memes")
    .then((res) => res.json())
    .then((data) => {
        let randomMeme = (Math.random() *100).toFixed()
        const {name, url} = data.data.memes[randomMeme]

        memeName.innerText = name
        memeImage.src = url
    })
}
getMeme();

generateBtn.addEventListener("click", () => getMeme())