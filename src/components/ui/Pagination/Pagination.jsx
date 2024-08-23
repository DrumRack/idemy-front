function Pagination({totalImages, image, changeImage}) {
    
    function generatePageNumbers(totalImages) {
        const result = []
        for (let i = 0; i < totalImages; i++) result.push(i + 1)
        return result
    }

    const pagesArray = generatePageNumbers(totalImages)

    return (
        <div className='page-wrapper'>
            <span onClick={() => changeImage(image - 1)} className='page'>Предыдущая</span>
            {pagesArray.map(pageNum =>
                <span onClick={() => changeImage(pageNum - 1)} className={pageNum - 1 === image ? 'page current-page' : 'page'} key={pageNum}>
                    {pageNum}
                </span>)}
            <span onClick={() => changeImage(image + 1)} className='page'>Следующая</span>
        </div>
    )
}

export default Pagination