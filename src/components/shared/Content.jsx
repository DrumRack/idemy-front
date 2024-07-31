import Button from '../ui/button/Button'

function Content({topics, getPicLinks, picsLinks, setModalVisible}) {
    return (
        // <main>
        //     {picsLinks.length
        //     ? <nav>
        //         {topics.map(topic =>
        //             <Button onClick={() => getPicLinks(topic)} key={topic}>
        //                 {topic}
        //             </Button>)}
        //     </nav>
        //     : <nav></nav>}
        //     <div className='content'>
        //         {picsLinks.length
        //             ? <img src={`http://95.163.242.46:8000/${picsLinks[0]}`} alt="Content image"/>
        //             : <div style={{display: 'flex', justifyContent: 'center'}}>
        //                 {topics.map(topic =>
        //                     <Button onClick={() => getPicLinks(topic)} key={topic}>
        //                         {topic}
        //                     </Button>)}
        //             </div>}
        //     </div>
        // </main>
        <main>
            <div className='topic-nav'>
                {picsLinks.length
                ? <nav>
                    {topics.map(topic =>
                        <Button onClick={() => getPicLinks(topic)} key={topic}>
                            {topic}
                        </Button>)}
                </nav>
                : <nav></nav>}
            </div>
            <div className='content'>
                {picsLinks.length
                    ? <img src={`http://95.163.242.46:8000/${picsLinks[0]}`} alt="Content image"/>
                    : <div style={{display: 'flex', width: '60%', justifyContent: 'space-around', alignItems: 'center'}}>
                        {topics.map(topic =>
                            <Button onClick={() => getPicLinks(topic)} key={topic} style={{height: '50px', width: '100px'}}>
                                {topic}
                            </Button>)}
                    </div>}
            </div>
            <div className='load-button'>
                <Button onClick={() => setModalVisible(true)}>Загрузить картинку</Button>
            </div>
        </main>
    )
}

export default Content