export function LikeBtn() {
  return <button>Like and subscribe</button>;
}

export function Hello() {
  let myName = "Mayank";
  return <h3>This is the future and I am {myName}</h3>;
}

export function Random() {
  let number = Math.random() * 100 + 200;
  return <h1 style={{'background-color': 'blue'}}>Random Number is : {Math.round(number)}</h1>;
}
