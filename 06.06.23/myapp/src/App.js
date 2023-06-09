//  import logo from './logo.svg';
  // import './index.css';
//   import "./App.css"
// import Card from "./component/card";
// import Navbar from "./component/navbar";

// function App() {

//     return (
//       <div>
//          <Navbar/>
//          <Card
//          username="SEKHAR"
//          image="https://i.pinimg.com/originals/c8/68/e0/c868e065df7c1ae8e63dd07d4299c20e.jpg"/>
//       </div>
//     );
    
  
// }

// export default App;
// import logo from './logo.svg';
import './App.css';
import Navbar from "./component/navbar";
import Card from "./component/card";


function App() {
  const arr =[
    {
      email: "sekharsumansaho@gmail.com",
      profile: "https://wallpapercave.com/wp/wp4835728.jpg",
    },
    {
      email: "sekharsumansaho@gmail.com",
      profile: "https://wallpapercave.com/wp/wp4835728.jpg",
    },{
      email: "sekharsumansaho@gmail.com",
      profile: "https://wallpapercave.com/wp/wp4835728.jpg",
    }

  ];
  return(
    <div>
    <Navbar/>
    {arr.map((el) => {
      return(
        <Card
    username={el.email}
    image = {el.profile} />
      );
    })

    }
    </div>
  );
  
}

export default App;