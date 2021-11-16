import Header from './components/Header'

function App() {

  const name = 'Ashley'
  return <div className="container">
    <Header />
    Hello {name}, Welcome Back!
  </div>;
}

export default App;
