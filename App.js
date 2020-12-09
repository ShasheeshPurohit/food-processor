import React, { useState } from "react";
import "./styles.css";

const foodDictionary = {
  "🍔": "Burger",
  "🍕": "Pizza",
  "🌭": "Hot Dog",
  "🥪": "Sandwich",
  "🌮": "Taco",
  "🌯": "Burrito",
  "🧆": "Falafel",
  "🥗": "Green Salad",
  "🍿": "Popcorn",
  "🧈": "Butter",
  "🧂": "Salt",
  "🥫": "Canned Food",
  "🍱": "Bento Box",
  "🍘": "Rice Cracker",
  "🍙": "Rice Ball",
  "🍚": "Cooked Rice",
  "🍛": "Curry Rice",
  "🍜": "Steaming Bowl",
  "🍝": "Spaghetti",
  "🍠": "Roasted Sweet Potato",
  "🍢": "Oden",
  "🍣": "Sushi",
  "🍤": "Fried Shrimp",
  "🍥": "Fish Cake with Swirl",
  "🥮": "Moon Cake",
  "🍡": "Dango",
  "🥟": "Dumpling",
  "🥠": "Fortune Cookie",
  "🥡": "Takeout Box",
  "🦪": "Oyster",
  "🍦": "Soft Ice Cream",
  "🍧": "Shaved Ice",
  "🍨": "Ice Cream",
  "🍩": "Doughnut",
  "🍪": "Cookie",
  "🎂": "Birthday Cake",
  "🍰": "Shortcake",
  "🧁": "Cupcake",
  "🥧": "Pie",
  "🍫": "Chocolate Bar",
  "🍬": "Candy",
  "🍭": "Lollipop",
  "🍮": "Custard",
  "🍯": "Honey Pot",
  "🍼": "Baby Bottle",
  "🥛": "Glass of Milk",
  "☕": "Hot Beverage",
  "🍵": "Teacup Without Handle",
  "🍶": "Sake",
  "🍾": "Bottle with Popping Cork",
  "🍷": "Wine Glass",
  "🍸": "Cocktail Glass",
  "🍹": "Tropical Drink",
  "🍺": "Beer Mug",
  "🍻": "Clinking Beer Mugs",
  "🥂": "Clinking Glasses",
  "🥃": "Tumbler Glass",
  "🥤": "Cup with Straw"
};

var foodList = Object.keys(foodDictionary);

export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState("");

  function emojiInputHandler(event) {
    // console.log(event.target);
    var meaning = foodDictionary[event.target.value];

    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }

    setEmojiMeaning(meaning);
  }

  function emojiClickHandler(item) {
    setEmojiMeaning(foodDictionary[item]);
  }

  return (
    <div className="App">
      <h1>Food Processor</h1>
      <input
        placeholder="Enter an emoji to know the meaning"
        type="text"
        onChange={emojiInputHandler}
      />
      <h2>{emojiMeaning}</h2>

      <h3>Emojis we know:</h3>
      {foodList.map(function (item) {
        return (
          <span
            onClick={() => emojiClickHandler(item)}
            id="foodItem"
            key={item}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
