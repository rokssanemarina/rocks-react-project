import './App.css'
import Sobre from './Componets/Sobre'
import TedLasso from './Componets/TedLasso'
import Ruptura from './Componets/Ruptura'
import imagem from './assets/video-ruptura.gif'
import Sandman from './Componets/Sandman'

function App() {

  return (
    <div className="App">
     <header className='titulo'>
     <h1>Oi, deixa eu te apresentar algumas séries/filmes legais</h1>
     </header>
     <div className='rocks-about'>
      <Sobre nome="Meu nome é Rokssane e não Rocky Blaboa " 
      about="Eu tenho 26 anos e atualmente estou em trasição de carreira do Maketing para a tecnologia e sim eu gosto demais de séries, filmes, animações e cultura pop em geral" 
      imagem="https://avatars.githubusercontent.com/u/109772792?v=4"
      question=" prontos para a listinha ? "
      />
     </div>
     <div className='cartaozinho'>
      <div>
      <TedLasso titulo="Ted Lasso (appletv+)" 
     sobre="Imagina um técnico de futbol americano se metendo no meio da bola redonda, é básicamente que a série entrega, além de muitas mensagens de otimismo e lições de trabalho em equipe (Roy kent is fucking everywhere!)" 
     imagem="https://gifs.cackhanded.net/ted-lasso/pilot/dancing.gif"/>
      </div>
      <div>
        <Ruptura nome="Ruptura (appletv+)" 
        about="saca numa serie de ficção ciencifica onde você tem duas vidas diferentes (trabalho e normal) onde nenhuma das duas se conecta de alguma forma e dentro da sua cabeça tem um chip que faz isso. É bem essa série" 
        imagem="https://64.media.tumblr.com/966fa871b3a3f1684860b87d1fb54ace/8384d994bea4506f-67/s500x750/3efa457a0f2585304e9d379b02c0ed6c9b4d4766.gifv"/>
      </div>
      <div>
        <Sandman nome ="Sandman (netflix)" 
        about="Veio dos livros de mil páginas do Neil Gaiman que conta a história de um endeless que fica preso por uns anos ai e corre atras das coisas dele e ainda tem mais 6 irmãos que não gosta dele (exceto alguns)" 
        imagem="https://64.media.tumblr.com/f26a2cd13bf9d349c3255339c966d503/fa334d629ef55c66-b3/s1280x1920/5848b0ba8f46214ebe402849a1857eee32fb93d9.gifv"/>
      </div>
     </div>
     <footer> Criado por <strong>rokssane marina</strong></footer>
    </div>
  )
}

export default App
