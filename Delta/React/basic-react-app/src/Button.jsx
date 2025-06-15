function doSomething() {
  console.log("Hello");
}

export default function Button() {
  return (
    <div>
      <button onClick={doSomething}>Click me!</button>
    </div>
  );
}
