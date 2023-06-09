// import React from 'react';
// import Card from './components/card';

// function App() {
//   return (
//     <div className="App">
//       <Card />
//     </div>
//   );
// }

// export default App;
// import logo from './logo.svg';


// import './App.css';
// import Card from './components/card';
// import { useEffect, useState } from 'react';

// function App() {
//   const [arr, setArr] = useState([]);

//   const getData = async() => {
//     await fetch("https://jsonplaceholder.typicode.com/photos", {
//       method: "GET"
//     })
//     .then(res => res.json()).then(data => {
//       const newData = data.splice(0,20);
//       setArr(newData);
//     });
//   }

//   useEffect(() => {
//     getData();
//   },[]);

//   console.log(arr);

//   return (
//     <div className="App">
//     {arr.map((el) => {
//       return(
//         <Card
//           key={el.id}
//           name={el.title}
//           image = {el.url} />
//       );
//     })

//     }
//     </div>
//   );
// }

// export default App;

import './App.css';
import Card1 from './components/card1';
import { useEffect, useState } from 'react';
function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const handleUpdate = (userId) => {
    const newTitle = prompt('Enter the new title:');
    if (newTitle) {
      const updatedUsers = users.map(user => {
        if (user.id === userId) {
          return { ...user, title: newTitle };
        }
        return user;
      });
      setUsers(updatedUsers);

      fetch(`http://localhost:8080/users/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: newTitle }),
      })
        .then(response => response.json())
        .then(updatedData => {
          console.log('Data updated:', updatedData);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  };

  return (
    <div>
      {users.map(user => (
        <card1
          key={user.id}
          title={user.title}
          body={user.body}
          onClick={() => handleUpdate(user.id)}
        />
      ))}
    </div>
  );
}


export default App;