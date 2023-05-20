import './buy.scss'

function Buy() {
    return (
        <div className="buy">
            <h1 className='ttl'>Покупка DataPilot</h1>
            <p>Пожалуйста, введите свой адрес электронной почты,<br /> мы вышлем письмо с новым паролем:</p>
            
            <form>
                <div><input type="text" placeholder='DataPilot  1.1' /></div>
                <div><input type="text" placeholder='наименование лицензии' /></div>
                <div> <input type="text" placeholder='Описание лицензии' /></div>
                <div><input type="emai" placeholder='Email' /></div>
                <div><input type="number" placeholder='Стоимость' /></div>
                <div><button className='buy'>купить</button></div>
                <div><button className='cancel'>отмена</button></div>
            </form>
        </div>
    );
}

export default Buy;
