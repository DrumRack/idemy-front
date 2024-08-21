function Pagination({totalImages, changeImage}) {
    
    function getArrayNumbers(totalImages) {
        const result = []
        for (let i = 0; i < totalImages; i++) result.push(i + 1)
        return result
    }

    const pagesArray = getArrayNumbers(totalImages)

    return (
        <div className='page-wrapper'>
            {pagesArray.map(pageNum =>
                <span onClick={() => changeImage(pageNum - 1)} className='page' key={pageNum}>
                    {pageNum}
                </span>)}
        </div>
    )
}

export default Pagination