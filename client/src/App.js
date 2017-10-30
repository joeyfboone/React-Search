import React, { Component } from 'react';
import './App.css';
import articles from "./components/articles";
import Wrapper from "./components/Wrapper";

const test = [
  {
    "id": 1,
    "name": "SpongeBob",
    "image":
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Spongebob-squarepants.svg/666px-Spongebob-squarepants.svg.png",
    "occupation": "Fry Cook",
    "location": "A Pineapple Under the Sea"
  },
  {
    "id": 2,
    "name": "Mr. Krabs",
    "image":
      "https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131",
    "occupation": "Restaurant Owner",
    "location": "A Giant Anchor"
  },
  {
    "id": 3,
    "name": "Squidward",
    "image":
      "https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626",
    "occupation": "Cashier",
    "location": "An Easter Island Head"
  }
];

const App = () => (
  <Wrapper>
    <div>
    <articles
      headline={test[0].name}
      summary={test[0].id}
      link={test[0].image}
      
    /></div>
  </Wrapper>
);

export default App;
