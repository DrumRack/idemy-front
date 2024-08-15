import Button from '../ui/button/Button'
import config from '../../config'

const URL = config.url
const PORT = config.port

function Content({topics, getPicLinks, picsLinks, setModalVisible}) {
    return (
        <main>
            {picsLinks.length
                ? <nav>
                    {topics.map(topic =>
                        <Button onClick={() => getPicLinks(topic)} key={topic}>
                            {topic}
                        </Button>)}
                </nav>
                : <nav></nav>}
            <div className='main__content'>
                {picsLinks.length
                    ? <img src={`${URL}:${PORT}/${picsLinks[0]}`} alt="Content image"/>
                    : <div>
                        {topics.map(topic =>
                            <Button onClick={() => getPicLinks(topic)} key={topic}>
                                {topic}
                            </Button>)}
                    </div>}
            </div>
            {picsLinks.length
                ? <div className='main__load-button'>
                    <Button onClick={() => setModalVisible(true)}>Загрузить картинку</Button>
                </div>
                : <div></div>}
        </main>
    )
}

export default Content