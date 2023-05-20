import './module.scss'
import square from '../assets/images/square.svg'

function Module() {
    return (
        <div className="module">
            <h1>Модуль наложения полностью решает эти<br /> задачи за счет:</h1>
            
            <ul>
                <div className='line'></div>
                <li><img src={square} />Уведомление ответственных лиц<br/>
                    об окончании действия ЭЦП;</li>
                <li><img src={square} />Наличие удобного интерфейса<br/> пользователя для настройки ЭЦП и <br/>лицензий КриптоПро.</li>
                <li><img src={square} />Централизованное хранение ЭЦП;</li>
                <li><img src={square} />Предоставление удобного и просто API<br/> для операций с ЭЦП;</li>
                <li><img src={square} />Уведомление ответственных лиц<br/>
                    об окончании действия лицензии<br/> КриптоПро;</li>
                <li><img src={square} />Обновление ЭЦП без остановки<br/>сервисов, которые осуществляют<br/> операцию копирования;</li>
            </ul>
        </div>
    );
}

export default Module;
