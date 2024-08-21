import Button from '../ui/button/Button'
import ImageViewer from './ImageViewer'

function Content({topics, totalImages, getPicLinks, picsLinks, setModalVisible}) {
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
                    ? <ImageViewer totalImages={totalImages} picsLinks={picsLinks}/>
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