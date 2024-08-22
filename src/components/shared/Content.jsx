import TopicNav from './TopicNav'
import ImageViewer from './ImageViewer'
import Button from '../ui/button/Button'

function Content({topics, totalImages, getImageLinks, imageLinks, setModalVisible}) {
    return (
        <main>
            {imageLinks.length
                ? <TopicNav topics={topics} getImageLinks={getImageLinks}/>
                : <nav></nav>}
            <div className='main__content'>
                {imageLinks.length
                    ? <ImageViewer totalImages={totalImages} imageLinks={imageLinks}/>
                    : <TopicNav topics={topics} getImageLinks={getImageLinks}/>}
            </div>
            {imageLinks.length
                ? <div className='main__load-button'>
                    <Button onClick={() => setModalVisible(true)}>Загрузить картинку</Button>
                </div>
                : <div></div>}
        </main>
    )
}

export default Content