import Button from '../ui/button/Button'

function Main({topics, getPicLinks, picsLinks}) {
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
            <div className='content'>
                {picsLinks.length
                    ? <img src={`http://95.163.242.46:8000/${picsLinks[0]}`} alt="Content image"/>
                    : <div style={{display: 'flex', justifyContent: 'center'}}>
                        {topics.map(topic =>
                            <Button onClick={() => getPicLinks(topic)} key={topic}>
                                {topic}
                            </Button>)}
                    </div>}
            </div>
        </main>
    )
}

export default Main