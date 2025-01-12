import './Card.css'

type CardProps = {
    title: string,
    imgPath: string,
    bodyText: string;
};

const Card: React.FC<CardProps> = ({ title, imgPath, bodyText }) => {
    return (    
        <div className="card">
            <img src={imgPath}></img>
            <h2>{title}</h2>
            <p>{bodyText}</p>
        </div>
    )
}

export default Card