import React, { useState } from 'react';
import "./car.css";
let arr = [
  "https://static.thcdn.com/images/xlarge/webp/widgets/208-us/17/original-SkinMedica_NPD_1920x700-070317.png",
  "https://static.thcdn.com/images/xlarge/webp/widgets/208-us/34/original-1214-STDCRE-45048-Last-Chance-Sale-2022-Amends-4-HomePage_1920x700%5B1%5D-064034.jpg",
  "https://static.thcdn.com/images/xlarge/webp/widgets/208-us/48/original-BoD_1920x700_%281%29-074048.png",
  "https://static.thcdn.com/images/xlarge/webp/widgets/208-us/50/original-HomePage-1920x700-034050.jpeg"
]
let n = arr.length;
const Carousel = () => {

  let [s, sets] = useState(0);

  function handleClick(c) {
    if (s === 0 && c === -1) { sets(3); return }
    sets(s => (s + c) % n);
  }

  return (
    <div className='container'>
      <button onClick={() => handleClick(-1)}>{"<"}</button>
      <button onClick={() => handleClick(1)}>{">"}</button>
      <div className='car'  >
        {arr.map((e, i) => (
          <img src={e}
            style={{
              right: s * 99 + "vw",
            }}
            key={i} alt="hee hee hee" />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
