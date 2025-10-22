import { useEffect, useState } from "react";

export default function Joker() {
  let [joke, setNewJoke] = useState({});

  const URL = "http://www.official-joke-api.appspot.com/random_joke";

  const getJoke = async () => {
    let response = await fetch(URL);
    let jsonResponse = await response.json();
    setNewJoke({
      setup: jsonResponse.setup,
      punchline: jsonResponse.punchline,
    });
  };

  useEffect(() => {
    async function getFirstJoke() {
      let response = await fetch(URL);
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      setNewJoke({
        setup: jsonResponse.setup,
        punchline: jsonResponse.punchline,
      });
    }
    getFirstJoke();
  }, []);

  return (
    <div>
      <h3>Joker</h3>
      <p>{joke.setup}</p>
      <p>{joke.punchline}</p>
      <button onClick={getJoke}>Get New Joke</button>
    </div>
  );
}
