import './buy.scss'

function Buy() {
    return (
        <div id='section_5' className="buy">
            <h1 className='ttl'>Покупка DataPilot</h1>
            <p>Оставьте заявку, и мы с Вами свяжемся:</p>
            
            <form>
                <div><input type="text" placeholder='ФИО' /></div>
                <div><input type="number" placeholder='Номер телефона' /></div>
                <div><input type="emai" placeholder='Email' /></div>
                <div><button className='buy'>купить</button></div>
            </form>
        </div>
    );
}

export default Buy;
