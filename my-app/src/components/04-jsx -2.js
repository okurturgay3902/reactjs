import React from "react";
const Jsx2 = () => {

  const yas =15;

  return (
    <div>

        {/*Ternary yontemi */}
      {yas>=15 ? <h2>Icerik 15 ve ustune ozel</h2> : {}}

        {/*Short Circuit yontemi */}
      {yas>=15 && <h2>Icerik 15 ve ustune ozel</h2> }

      {yas>=15 || <h2>Icerik 15 yas alti icin ozel</h2> }
   
    </div>
  );
};
export default Jsx2;