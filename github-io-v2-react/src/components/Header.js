//my header fixed variables
const quote = '"Experience is the teacher of all things"'
const quoteAuthor = 'Julius Caesar'

const Header = () => {
    return (
        <header>
        <img src="/wall.jpg" alt="myImage" className="img-fluid" />
        <figure className="text-center">
            <blockquote className="blockquote">
            <h1 className="display-4 text-light">{quote}</h1>
            </blockquote>
            <figcaption className="blockquote-footer">{quoteAuthor}</figcaption>
        </figure>
        </header>
    )
}

//create changing variables here

export default Header
