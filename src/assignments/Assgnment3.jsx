import axios from 'axios'
import { useEffect, useState } from "react"

export function Assgnment3(){ 
    
  const [numWords, setNumWords] = useState(0);
  const [words, setWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typingEffect, setTypingEffect] = useState(''); 

  useEffect(() => {
    if (words.length === 0) {
      setTypingEffect('');
      return;
    } 
    // let currentWordIndex = 0;
    const interval = setInterval(() => {
      if (currentWordIndex < words.length) {
        const nextword = words[currentWordIndex]
        setTypingEffect((prev) => prev + ' ' + nextword);
        setCurrentWordIndex(currentWordIndex+1);
      } else {
        clearInterval(interval);
      }
    }, 100); 

    return () => clearInterval(interval);
  }, [words,currentWordIndex]);

  async function generateWords() {
    const response = await axios.get(`https://random-word-api.herokuapp.com/word?number=${numWords}`);
    const words = response.data;
    const typeWords = words.join(' ') + ' '
    const letters = typeWords.split('')
    setWords(words);
    setTypingEffect('');
    setCurrentWordIndex(0)
  }
 
  return (
    <div>
      <input
        type="number"
        placeholder="Enter number of words"
        onChange={(e) => setNumWords(parseInt(e.target.value))}
      />
      <button onClick={generateWords}>Generate</button>
      <div className="para">{typingEffect}</div>
    </div>
  );
}
