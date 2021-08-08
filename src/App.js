import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import Chinamap from './map';

const useContainerDimensions = myRef => {
  const getDimensions = () => ({
    width: (myRef.current.offsetWidth) < 1000 ? myRef.current.offsetWidth : 1000,
    height: myRef.current.offsetHeight
  })

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const handleResize = () => {
      setDimensions(getDimensions())
    }

    if (myRef.current) {
      setDimensions(getDimensions())
    }

    //window.addEventListener("click", handleResize)
    window.addEventListener("resize", handleResize)

    return () => {
      //window.removeEventListener("click", handleResize)
      window.removeEventListener("resize", handleResize)
    }
  }, [myRef])

  return dimensions;
};

function App() {
  const componentRef = useRef(null);
  const { width, height } = useContainerDimensions(componentRef);

  if (width > 500) {
    return (
      <div className="App" ref={componentRef}>
        <h1>Chinese Provinces With More National People’s Congress (NPC) Deputies <br /> Are Not Necessary More Populous</h1>
        <Chinamap width = {width}/>
        <p>Source: <a href="http://www.npc.gov.cn/npc/dbmd13/dbmd.shtml">National People's Congress</a></p>
      </div>
    );
  } else {
    return (
      <div className="App" ref={componentRef}>
        <h3>Chinese Provinces With More National People’s Congress (NPC) Deputies <br /> Are Not Necessary More Populous</h3>
        <Chinamap width = {width}/>
        <p>Source: <a href="http://www.npc.gov.cn/npc/dbmd13/dbmd.shtml">National People's Congress</a></p>
      </div>
    );
  }


}

export default App;
