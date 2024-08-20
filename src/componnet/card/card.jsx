import './card.css';

const Card = (props) => {
  return (
        /* From Uiverse.io by alexruix */ 
            <div class="card1">
            <div class="card-details">
                <p class="text-title">{props.title}</p>
                <p class="text-body">{props.des}</p>
            </div>
            
            <a href={`mailto:mohammed.job.dev@gmail.com?subject=${props.title}&body=Hello, may I request this service`}><button class="card-button">Order Now</button></a>

            </div>
  );
};

export default Card;
