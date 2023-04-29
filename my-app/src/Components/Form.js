import "../Styles/Form.css";
//import MemesData from "./MemesData";
//anytime your component has changing values that should be saved and displayed we are most likely to be using State
import { useState, useEffect } from "react";

function Form(){
    
//    const [memeImage, setMemeImage] = useState("");

const [meme, setMeme] = useState(
      {
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1bij.jpg"
       }
    );

    function handleChange(event){
      const {name, value} = event.target   //destructure it
      setMeme(prevData => {
        return{
          ...prevData,
          [name]: value
        }
      })
    }
    

  //  const [allMeme, setAllMeme] = useState(MemesData);
  const [allMeme, setAllMeme] = useState([]);

  //  useEffect(() => {
  //   fetch("https://api.imgflip.com/get_memes")
  //     .then(res => res.json())
  //     .then(data => setAllMeme(data.data.memes))
  //  }, [])
  
/** useEffect takes a function as its parameter. if that function returns something it need to be cleanup function.
Otherwise, it should return nothing. if we make it async function, it automatically returns a promise instead of a
function or nothing. Therefore, if you want ot use async operation inside useEffect, you need to define the function
separately inside the callback function **/

  useEffect(() => {
    async function getMemems() {
      const res = await fetch("https://api.imgflip.com/get_memes")
      const data = await res.json()
      setAllMeme(data.data.memes)
    } 

    getMemems()
    
   }, [])

    
    function getMemeImage(){
        //console.log(MemesData.data.memes);
       // const memesArray = allMeme.data.memes;
        // const randomNumber = Math.floor(Math.random() * memesArray.length);
        const randomNumber = Math.floor(Math.random() * allMeme.length);
       // const url = memesArray[randomNumber].url;
      // setMemeImage(memesArray[randomNumber].url);
      // const url = memesArray[randomNumber].url;
      const url = allMeme[randomNumber].url;
      setMeme(prevMeme => {
        return {...prevMeme,
            randomImage: url

        }      
      })
    }

    return(
        <div className="main">
            <div className="form">
              <input type="text" placeholder="top text" name="topText" onChange={handleChange} value={meme.topText} className="form-input"/>
              <input type="text"  placeholder="botton text" name="bottomText" onChange={handleChange} value={meme.bottomText} className="form-input"/>
              <button className="form-button" onClick={getMemeImage}>Get a new meme image</button>
           </div>

           <div className="meme">
            <img src={meme.randomImage} className="meme-image"  />
            <h2 className="meme-text top">{meme.topText}</h2>
            <h2 className="meme-text bottom">{meme.bottomText}</h2>
           </div>
        </div>  
    )

}
export default Form;
















