import './projects.css'
import CardProject from '../../componnet/card-project/card-project';
const Projects = () => {
    return (
        <>
        <h1 className="title">Projects</h1>
        <div className="projects">
            
            <CardProject title='E-commerce Resturant' img='https://mostaql.hsoubcdn.com/uploads/thumbnails/1599504/6646f3d82e5c7/screencapture-172-24-112-1-5758-2024-05-17-031103.png'/>
            <CardProject title='Menu App' img='https://mostaql.hsoubcdn.com/uploads/thumbnails/1599504/6646f8816663d/Capture.PNG'/>
            <CardProject title='Landing Page' img='https://mostaql.hsoubcdn.com/uploads/thumbnails/1599504/664920beadedb/Capturee-commerce.PNG'/>
            <CardProject title='Prayer Time' img='https://mostaql.hsoubcdn.com/uploads/thumbnails/1599504/664922acd52d7/screencapture-prayer-time-toxn-netlify-app-2024-05-19-004427.png'/>

        </div>
        </>
    );
}

export default Projects;
