// // PESSSYEEDDIIOUUTYYIK
// // Connect to the art museuueueem api
// // w=query with axios
// // download/add axios
// // console log
// // add state (province/territory)
// // add useEffect 
// // pick the infomation that we want to display
// // PROPZ
// // loop over array with 🗺 
// // display on page
// // create component with what we want to display on page
// // add search input with keyword(???)
// // title
// // webImage.url
// // principalOrFirstMaker
// // id
// // productionPlaces
// // key j7sQw9Ra
// // https://www.rijksmuseum.nl/api/en/collection
// import axios from 'axios';
// import { useState } from 'react';
// function App() {
//   const [art, setArt] = useState([]);
//   // creating a state with a value of art. will hold objects returned from api in an array (useState([]))
//   // value and setValue
//   const [userInput, setUserInput] = useState('');
//   // 
//   const getData = (event) => {
//     event.preventDefault();
//     console.log(event);
//     axios({
//       // using axios to make call to our API
//       url: `https://www.rijksmuseum.nl/api/en/collection`,
//       // method: `GET`,
//       // dataResponse: 'json',
//       params: {
//         // requests we are making in our API (specifics of the request)
//         key: `j7sQw9Ra`,
//         // access to our API
//         imgonly: true,
//         // requesting only results with images
//         q: userInput
//         // q is shorthand for search/query. userInput is not currently defined, but will be given a value later (string)
//       }
//     }).then((response) => {
//       // promise 
//       console.log(response.data.artObjects)
//       setArt(response.data.artObjects)
//       // setting the value of "art" to be the array of objects from our api.
//       // response is the json data from our api
//       // response.data is the relevant information about our art 
//       // response.data.artObjects is returning the array of artwork images and information 
//       // any time a state changes, it re-renders the code, and it restarts the function
//     })
//   }
//   const handleChange = (event) =>{
//     // defining a function that will change the userInput to what's typed in the <input>
//     setUserInput(event.target.value);
//     // console.log(event)a
//     // console.log(event.target)
//     // console.log(event.target.value)
//   }
//   return ( 
//     // creating html (and JSX) content to display on our page
//     <>
//     {/* creating form (required) to submit userInput on handleChange to getData */}
//     {/* submitting userInput with form onSubmit */}
//     {/* setUserInput defined in handleChange function. Calling handle change function when user types (console.log(event.target.value)) */}
//       <form onSubmit={getData}>
//         <input type="text" onChange={handleChange}></input>
//         <button type="submit">I support the arts</button>
//       </form>
//       <ul>
//         {/* creating unordered list to display list of art objects */}
//           {
//             art.map( (aaron) => {
//               // create new array (map) of information from previously defined setArt(response.data.artObjects) line 66)
//               return (
//                 // from the new array, display the selected results from setArt on page with semantic HTML elements, and javascript {} (jsx)
//                 // the specific properties(?) here are from the information provided by the api 
//                 <li key={aaron.id}>
//                   <h2>{aaron.title}</h2>
//                   <p>Lovingly handcrafted by this particular dead PERSON {aaron.principalOrFirstMaker}</p>
//                   <p>On display here: {aaron.productionPlaces[0]}</p>
//                   <img src={aaron.webImage.url} alt={aaron.title}></img>
//                 </li>
//               )
//             })
//           }
//       </ul>
//     </>
//   )
// }
// // title
// // webImage.url
// // principalOrFirstMaker
// // id
// // productionPlaces
// export default App;
// //export it on to another page 
// //  ????
// // profit



import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import PieceOfArt from './PieceOfArt';

// Query the Rijks museum API
// stor the results in state
// display those results on the page

function App() {

  const [art, setArt] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // side-effect to query API and
  // only run when the App component mounts
  useEffect(() => {
    // get art from the APi
    axios({
      url: 'https://www.rijksmuseum.nl/api/en/collection',
      method: 'GET',
      dataREsponse: 'json',
      params: {
        key: 'HnZplr4m',
        format: 'json',
        imgonly: true
      }
    }).then((response) => {
      // update 'art' state with response from API
      setArt(response.data.artObjects);
      setIsLoading(false);
    })
    // Add an empty array here to prevent the callback function from running every time our component re-renders!
  }, [])

  return (
    <div className="App">
    <h1>My Museum Art!</h1>

    {
      isLoading ? <p>Loading...</p> : art.map((artWork) => {
        return (
          <PieceOfArt 
        imgSrc={artWork.webImage.url}
        title={artWork.title}
        key={artWork.id}
        longTitle={artWork.longTitle}
        />
        )
      })
    }

    </div>
  );
}

export default App;
