import Button from '../ui/button/Button'

function Main({titles}) {
    return (
        <main>
            <nav>
                {titles.map(title => <Button key={title}>{title}</Button>)}
            </nav>
            <div className='content'>TEST</div>
        </main>
    )
}

export default Main