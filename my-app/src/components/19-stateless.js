import React from 'react'

const Stateless = () => {

    let counter=10;

    const artir=()=>{
        counter++;
        console.log(counter);
        document.querySelector("body").innerHTML=counter;
        // Bu örnekte state kullanılmadı. document.queryselector ile React DOM
        // bypass edilerek doğrudan gerçek DOM a yazıldı
        // BU REACT İÇİN İSTENİLEN BİR DURUM DEĞİL
    }
  return (
    <div>
        <b>{counter}</b>
        <button onClick={artir}>Artir</button>

    </div>
  )
}

export default Stateless;