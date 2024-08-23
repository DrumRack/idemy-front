import {useState} from 'react'
import Pagination from '../ui/Pagination/Pagination'
import config from '../../config'

const URL = config.url
const PORT = config.port

function ImageViewer({totalImages, imageLinks}) {
    const [image, setImage] = useState(0)

    function changeImage(page) {
        setImage(page)
    }

    return (
        <div className='image-viewer'>
            <img src={`${URL}:${PORT}/${imageLinks[image]}`} alt="Content image"/>
            <Pagination totalImages={totalImages} image={image} changeImage={changeImage}/>
        </div>
    )
}

export default ImageViewer