import {useState} from 'react'
import Pagination from '../ui/Pagination/Pagination'
import config from '../../config'

const URL = config.url
const PORT = config.port

function ImageViewer({totalImages, picsLinks}) {
    const [image, setImage] = useState(0)

    function changeImage(page) {
        setImage(page)
    }

    return (
        <div>
            <img src={`${URL}:${PORT}/${picsLinks[image]}`} alt="Content image"/>
            <Pagination totalImages={totalImages} changeImage={changeImage}/>
        </div>
    )
}

export default ImageViewer