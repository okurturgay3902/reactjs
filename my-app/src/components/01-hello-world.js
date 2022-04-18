import Comp from './02-comp';

const HelloWorld = () => {
    const isim="Ali";

    const user = {
        userName:"Ali",
        passwordHint:"veli"
    }

    



    return( // JSX ortami, burda if kullanamayiz (tornory)
    <>
        <div id="d1" className="">
            Hello World
            <Comp/>
            <b>User name : {user.userName}</b>
        </div>

        <div id="d2">{isim}</div>  

    </>
    );
  // iceride tek tasiyici olmasi gerektigi icin <> </> kullaniyoruz
};

export default HelloWorld;