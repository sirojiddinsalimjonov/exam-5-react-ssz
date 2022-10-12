import {Link} from 'react-router-dom'
import './Main.scss';
    
    function Main() {
        

        
    return(
        <>
        <section className="section__main">
            <div className="container">
                <div className="text__main">
                    <Link  className="text__novi liks">Новые объявления</Link>
                    <Link  className="text__layt liks">Лучщие предложение</Link>
                </div>
             
            </div>
        </section>
        </>
    )
}


export default Main;