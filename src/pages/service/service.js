import './service.css'
import CardService from '../../componnet/card-service/card-service'
import Card from '../../componnet/card/card'
function Service(){
    return(
        <div className="service">
            <h1 className="title">Service</h1>
            <div class="container">
                    <Card title='Ecommerce' des='Custom and secure eCommerce solutions to enhance your store, from designing attractive user interfaces to payment integration and performance support.'/>
                    <Card title='Landing Page' des='Create high-converting landing pages tailored to your goals, with compelling design and clear calls to action that drive results and engage visitors.'/>
                    <Card title='Web Portfolio' des='Showcase your work with a stunning portfolio that highlights your skills, creativity, and achievements, designed to impress and inspire potential clients.'/>
                    <Card title='Other Services' des='Innovative solutions tailored to your needs—from custom web applications to seamless integrations, designed to optimize your business processes'/>
            </div>
            
        </div>
    )
}

export default Service