import Button from '../ui/button/Button'

function TopicNav({topics, getImageLinks}) {
    return (
        <nav>
            {topics.map(topic =>
                <Button onClick={() => getImageLinks(topic)} key={topic}>
                    {topic}
                </Button>)}
        </nav>
    )
}

export default TopicNav