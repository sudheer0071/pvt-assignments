import axios from 'axios'
import { useEffect, useState } from "react" 
import { useRecoilState, useSetRecoilState } from 'recoil'; 
import { numwords,wordss, typereffectt, currentindex} from '../atoms';
export function Assgnment3(){  
  const [numWords, setNumWords] = useRecoilState( numwords);
  const [words, setWords] = useRecoilState(wordss); 
  const [typereffect, setTyperEffect] = useRecoilState(typereffectt)
  const [currentIndex,setCurrentIndex] = useRecoilState(currentindex) 
  // const [allAtoms, setAtoms] = useRecoilState(allatoms)  

 useEffect(()=>{ 
  if (words.length==0) {
     setTyperEffect (' ')
    return;
  }
  // let currentIndex = 0
 const interval=setInterval(() => {
     if (currentIndex<words.length) {
      const nextword = words[currentIndex];
        setTyperEffect((prev)=> prev+" "+nextword)
      setCurrentIndex((prev)=>prev+1)
  }  else{
    clearInterval(interval)
  }
}, 100); 
return ()=>clearInterval(interval)
},[words,currentIndex])
  async function generateWords() {
    const response = await axios.get(`https://random-word-api.herokuapp.com/word?number=${numWords}`);
    const words = response.data; 
    const letters = words.join(' ') 
    setWords(words); 
   setTyperEffect('')
  setCurrentIndex(0)
  }
 
  return (
    <div>
      <input
      className='generate'
        type="number"
        placeholder="Enter number of words" 
        onChange={(e) => setNumWords(e.target.value)}
      />
      <button onClick={generateWords}>Generate</button>
      <div className="para">{typereffect}</div>
    </div>
  );
}
