import './main.scss'
import MacBook from '../assets/images/macbook.svg'

function Main() {
  return (
    <div className="main" id='main'>
      <div className="top-module">
        <h1 className="ttl">Модуль<br /> наложения<br/> подписи</h1>
        <button>купить</button>
      </div>
      <div className="macbook">
        <img src={MacBook} />
      </div>
    </div>
  );
}

export default Main;
