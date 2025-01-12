import './Card.css'

type CardProps = {
    title: string,
    imgPath: string,
    bodyText: string,
    redirect: string;
};

const Card: React.FC<CardProps> = ({ title, imgPath, bodyText, redirect }) => {
    return (    
        <div className="card">
            <a href={redirect} className='link'>
                <img src={imgPath} className='cardImage'></img>
                <h2 className='title'>{title}</h2>
                <div className='body'>
                    {bodyText.split('\n').map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>
            </a>
        </div>
    )
}

export default Card