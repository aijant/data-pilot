import './buy.scss'

function Buy() {
    return (
        <div id='section_5' className="buy">
            <h1 className='ttl'>Покупка DataPilot</h1>
            <p>Пожалуйста, введите свой адрес электронной почты,<br /> мы вышлем письмо с новым паролем:</p>
            
            <form>
                <input type="text" placeholder='DataPilot  1.1' />
                <input type="text" placeholder='наименование лицензии' />
                <input type="text" placeholder='Описание лицензии' />
                <input type="emai" placeholder='Email' />
                <input type="number" placeholder='Стоимость' />
                <button>купить</button>
                <button>отмена</button>
            </form>
        </div>
    );
}

export default Buy;
