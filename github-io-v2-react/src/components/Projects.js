

const myProjects = [
    {
        id:1,
        name: "Tourcafe",
        description: "developed using HTML5, jQuery & Bootstrap3",
        link: "https://bahnimanborah.github.io/Website-for-MNC/home.htm",
        imgSrc: "/project1.png"
    },
    {
        id:2,
        name: "Scada system",
        description: "Clean coding using only HTML5, JavaScript and Bootstrap3",
        link: "https://bahnimanborah.github.io/Utilities/ProgressBar/tank.html",
        imgSrc: "/project2.png"
    },
    {
        id:3,
        name: "Guess the Number",
        description: "I created this game to test my luck before doing anything that requires luck. It's not a fortune teller, it's just for fun. Developed using HTML5, Skeleton CSS & JavaScript ES6 based",
        link: "https://bahnimanborah.github.io/GuessTheNumberGame/",
        imgSrc: "/project3.jpg"
    },
    {
        id:4,
        name: "My Task List",
        description: "HTML5, Materliazie CSS & JavaScript ES6 based Task List app, create and save Tasks !",
        link: "https://bahnimanborah.github.io/TaskList/",
        imgSrc: "/project4.jpg"
    },
    {
        id:5,
        name: "Registration Form",
        description: "HTML5 & JavaScript based simple form",
        link: "https://bahnimanborah.github.io/Utilities/Form/formrepresentation.html",
        imgSrc: "/project5.png"
    },
    {
        id:6,
        name: "Loan Calculator",
        description: "Developed using HTML5, Bootstrap4 & JavaScript ES6 Events",
        link: "https://bahnimanborah.github.io/SimpleLoanCalculator/",
        imgSrc: "/project6.jpg"
    },
    {
        id:7,
        name: "Book List - Library",
        description: "Developed using HTML5, Bootstrap4 & JavaScript ES6 Classes",
        link: "https://bahnimanborah.github.io/BookList/",
        imgSrc: "/project7.jpg"
    }
];

const Projects = () => {
    return (
        <div className="row mt-5">
            {/* Add some description to the page here */}
            <>
            {myProjects.map((project) => (
            
            <div className="col-md-3 mt-3" key={project.id}>
                <div className="card h-100 border-primary bg-dark">
                    <img src={project.imgSrc} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title text-primary">{project.name}</h5>
                        <p className="card-text text-light">{project.description}</p>
                        <a href={project.link} target="_blank" className="btn btn-primary">Live Demo</a>
                    </div>
                </div>
            </div>
            
            ))}
            </>
        </div>
    )
}


export default Projects
