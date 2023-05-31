import './module.scss'
import square from '../assets/images/square.svg'

function Module() {
    return (
        <div id='section_2' className="module">
            <h1>Система работы с ЭЦП полностью решает эти задачи за счет:</h1>
            
            <ul>
                <div className='line'></div>
                <li><img src={square} />Уведомления ответственных лиц<br/>
                    об окончании действия ЭЦП</li>
                <li><img src={square} />Наличия удобного интерфейса<br/> пользователя для настройки ЭЦП<br/> и лицензий КриптоПро</li>
                <li><img src={square} />Централизованного хранения ЭЦП</li>
                <li><img src={square} />Предоставления удобного API<br/> для операций с ЭЦП</li>
                <li><img src={square} />Уведомления ответственных лиц<br/>
                    об окончании действия лицензии<br/> КриптоПро</li>
                <li><img src={square} />Обновления ЭЦП без остановки<br/> сервисов, которые осуществляют<br/> операцию копирования</li>
            </ul>
        </div>
    );
}

export default Module;
