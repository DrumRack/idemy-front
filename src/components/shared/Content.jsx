import Button from '../ui/button/Button'

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
                    ? <img src={`http://89.108.88.35:8000/${picsLinks[0]}`} alt="Content image"/>
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