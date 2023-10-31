# LAB POKEFETCH

![pokemon](https://media1.giphy.com/media/rAm0u2k17rM3e/giphy.gif)

## Description
Yesterday we learned about APIs and how to use them. Today we will be using the Pokemon API to create a simple PokeWiki.

## Objectives
- Learn how to use fetch.
- Learn how to use nested fetches.
- Combine fetch with DOM manipulation.

### Iteration 1 | Create the html
Create a simple html page with a title and a ul.
Style it so the title has a similar style to the Pokemon logo (look for a fancy font, make the background blue and the letters yellow).

### Iteration 2 | Get the data and display it
Use the Pokemon API `https://pokeapi.co/api/v2/pokemon/` to get the first 20 pokemons and display their name in the ul you created in the previous iteration using JS (fetch). Each pokemon should be a li with the name inside an h2.

- IMPORTANT: add also an id to each li element with the name of the pokemon. We will need it later.

So, the final html should look like this:
```html
  <body>
    <h1>PokeWiki</h1>
    <ul>
      <li id="bulbasur">
        <h2>bulbasur</h2>
      </li>
      <li id="ivysaur">
        <h2>ivysaur</h2>
      </li>
      <li id="venesaur">
        <h2>venusaur</h2>
      </li>
      ... AND SO ON

    </ul>
  </body>

```

### Iteration 3 | Style the list
Each li should look like a card with a background color, a border, a border radius, a shadow... Make them look pretty! Use the flexbox to display the cards in a row and flex-wrap to wrap them in multiple rows if needed. To add a separation between the cards you can use `gap`.


### Iteration 4 | Add one image
As you probably noticed, the pokeAPI request is not giving us the image URL to display each pokemon. What we get is a URL to get more information about each pokemon:

```json
{
    "name": "bulbasaur",
    "url": "https://pokeapi.co/api/v2/pokemon/1/"
}
```

We need to make another request to get the image URL. The URL we need to use is the one we get in the previous request.

Can we use the same fetch we used before? Yes, we can! We just need to make another fetch inside the first one. This is called a nested fetch.

```javascript
fetch('https://pokeapi.co/api/v2/pokemon/')
  .then(response => response.json())
  .then(data => {
    // data is the response we get from the first fetch

    // here is where you should iterate over the data and create the li elements

    // we need to make another fetch to get the image url of the first pokemon in the list
    fetch(data.results[0].url)
      .then(response => response.json())
      .then(pokemonData => {
        // this "pokemonData" is the response we get from the second fetch
        // we can get the image url from here, I wonder where it is...
        // pokemonData.something???
        // let's create an img element and add it to the li
        const element = document.createElement('img');
        element.src = pokemonData.// I wonder where the image url is...
        // we need to add the img element to the li
        // we can use appendChild for that
        const li = document.getElementById(data.results[0].name);
        li.appendChild(element);
      })
  })
```

On this example we see how to make a nested fetch. We make a fetch to get the list of pokemons, then we make another fetch to get the image url of the first pokemon in the list.

How can I fetch ALL the pokemons in just a few lines of code?🤔

### Iteration 5 | Add all the images
Convert the previous iteration into something that is fetching all the images and adding them to the corresponding li element.

### BONUS | Refactor
Refactor your code to make it more readable and reusable. We have now a lot of code inside the fetches, let's move the second fetch to a separate function and call it from inside the first fetch.

Can you think of a way to make the code even more readable? Maybe we can create a function that creates the li elements and another one that adds the image to each li element. Then we can call those functions from inside the fetches.