export interface appProps {
  count: number;
}

function App({ count }: appProps) {
  return (
    <div className="App">
      <h1>Hello world React! Num: {count}</h1>
    </div>
  );
}

export default App;
