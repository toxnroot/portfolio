import './skils.css';

// const image = [
//     'java-script.png',
//     'react.png',
//     'html.png',
//     'css.png',
//     'next.png',
//     'tailwind.png',
// ]
const images = [
    {
    img:"java-script.png",
    text:"Javascript"
    },
    {
    img:"react.png",
    text:"React Js"
    },
    {
    img:"html.png",
    text:"Html"
    },
    {
    img:"css.png",
    text:"Css"
    },
    {
    img:"next.png",
    text:"Next JS"
    },
    {
    img:"tailwind.png",
    text:"Tailwind"
    },
    {
    img:"node.png",
    text:"Node Js"
    }
    ,{
        img:"git.png",
        text:"Git"
    },
    {
        img:"github.png",
        text:"Github"
    },
    {
        img:"jquery.png",
        text:"JQuery"
    },
    {
        img:"bootstrap.png",
        text:"Bootstrap"
    },
    {
        img:"sass.png",
        text:"Sass"
    },
    {
        img:"redux.png",
        text:"Redux"
    },
    {
        img:"firebase.png",
        text:"Firebase"
    }
]
const Skils = () => {
    return (
        <div className="skills">
        <h1>Skills</h1>
        <div className="container">
            {
                images.map((img, index) => {
                    return (
                        <div key={index} className='con'>
                            <img src={img.img} alt={img.text} className='mg'/>
                            <div className='text'>
                                <p>{img.text}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
            
        </div>
    );
}

export default Skils;
