import Header from './components/header';
import Container from './components/container';
import Title from './components/title';


function App() {

  return (
    <div className="container my-3">      
      <Header />
      <Title title='O seu mercado digital' subtitle='Tudo o que você precisa, você encontra aqui!' />
      <Container/>
    </div>
  )
}

export default App
