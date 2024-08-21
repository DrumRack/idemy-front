import TopicNav from './TopicNav'
import ImageViewer from './ImageViewer'
import Button from '../ui/button/Button'

function Content({topics, totalImages, getPicLinks, picsLinks, setModalVisible}) {
    return (
        <main>
            {picsLinks.length
                ? <TopicNav topics={topics} getPicLinks={getPicLinks}/>
                : <nav></nav>}
            <div className='main__content'>
                {picsLinks.length
                    ? <ImageViewer totalImages={totalImages} picsLinks={picsLinks}/>
                    : <TopicNav topics={topics} getPicLinks={getPicLinks}/>}
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