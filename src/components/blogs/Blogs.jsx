import {useState, useEffect} from 'react';
import axios from 'axios';
import './Blogs.css'


const SRC = "https://raw.githubusercontent.com/grv-upes/testing-blogs/main/blogs.json"


const DisplayFrame = ({src}) =>{

    // const [src, setSrc]  = useState("");

    // useEffect(()=>{
    //   async function fetchPage(){
    //     const res = await axios.get(url);
    //     setSrc(res["data"]);
    //   }
    //   fetchPage();
    // },[])

    return (
      <>
      <div className="llll">
        <iframe srcDoc={src} width="400px" height="300px" frameborder="1"/>
      </div>
        <hr/>
      </>
    );
}

function Blogs() {
  // const [isResult, setIsResult] = useState(false);
  // const [result, setResult] = useState({enteries:[]});
  
  const [text, setText] = useState('');
  const [result, setResult] = useState(false);

  // useEffect(()=>{
  //   setResult({enteries:[]});
  //   async function fetchData(){
  //     const res = await axios.get(`${SRC}`);
  //     let entries = result["enteries"]
  //     for(let i=0; i<res["data"]["enteries"].length; ++i){
  //       entries.push(res["data"]["enteries"][i])
  //     }
  //     setResult({enteries: entries});
  //     console.log(result["enteries"]);
  //   }
  //   fetchData();
  //   setIsResult(true);
  // }, [])

  const setIt = (event) => {
    setText(event.target.value);
  }

  const clickHandle = (event) => {
    setResult(true);
  }

  return (
      <div className="blogs-main">
         <textarea
          type="text" 
          placeholder="Enter Your Secret Key" 
          onChange={setIt}
          />

          <button onClick={clickHandle}>Run</button>
        {result && 
          <DisplayFrame src={text} />
        }
        {/* {!isResult &&
          <h1>Loading......</h1>
        }
        {isResult &&
          result["enteries"].map((item)=>{
             return <DisplayFrame key={Date.now()+(Math.random()*999)} url={item["url"]} />
          })
        } */}
      </div>
  );
}

export default Blogs;
