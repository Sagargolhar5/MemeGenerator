
let generateButton = document.querySelector(".generate-button")
let image = document.querySelector(".meme-image")
let memeTitle = document.querySelector(".meme-title")
let authorOut = document.querySelector(".author")

let API  = "https://meme-api.com/gimme/wholesomememes"


async function getData(){
  try{

    let res = await fetch(API)
    let data = await res.json()
    let {title, url, author} = data
    memeTitle.innerHTML = title
    image.src = url
    authorOut.innerHTML = author

  }catch(err){
    console.log(err)
  }
}
getData()

generateButton.addEventListener("click", () =>{
  getData() 
})