import Button from '../ui/button/Button'

function Main({topics, getPicsList}) {
    return (
        <main>
            <nav>
                {topics.map(topic =>
                <Button onClick={() => getPicsList(topic)} key={topic}>
                    {topic}
                </Button>)}
            </nav>
            <div className='content'>TEST</div>
        </main>
    )
}

export default Main