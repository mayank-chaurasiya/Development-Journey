function ErrorMsg({ foods }) {
  return <>{foods.length === 0 ? <h3>I'm Hungry</h3> : null}</>;
}

export default ErrorMsg;
