function App() {
  return (
    <div>
      <h1> First Component</h1>
      <Fruit />
      <Color></Color>
    </div>
  )
}

function Fruit() {
  return (
    <h1>Apple</h1>
  )
}

function Color() {
  return (
    <h1>Red</h1>
  )
}

export default App;