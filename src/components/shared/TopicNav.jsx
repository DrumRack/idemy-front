import Button from '../ui/button/Button'

function TopicNav({topics, getPicLinks}) {
    return (
        <nav>
            {topics.map(topic =>
                <Button onClick={() => getPicLinks(topic)} key={topic}>
                    {topic}
                </Button>)}
        </nav>
    )
}

export default TopicNav