import './technical.scss'
import square from '../assets/images/sw-4.svg'

function Technical() {
    return (
        <div className="technical">
            <h1 className='ttl'>Технические преимущества МНП</h1>

            <div className='block'>
                <ul>
                    <li><img src={square} />Хорошо документированный, открытый
                        HTTP - интерфейс для работы с ЭЦП;</li>
                    <li><img src={square} />Cloud ready решение – модуль реализован
                        в режиме, позволяющем выполнять
                        в облачных или гибридных сетях(Kubernetes);</li>
                    <li><img src={square} />Модуль оптимизирован для обработки большого количества одновременных запросов;</li>
                    <li><img src={square} />Поддержка различных систем мониторинга(Zabbix, Grafana и др);</li>
                    <li><img src={square} />Возможность как вертикального(добавление ресурсов), так и горизонтального(добавление серверов) масштабирования;
                    </li>
                    <li><img src={square} />
                        Интеграция с различными системами аутентификации заказчика(OAuth2, SAML, LDAP);

                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Technical;
