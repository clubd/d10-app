import './InitialPage.scss';
import Intro from "../../assets/videos/d10-intro.mp4";


function InitialPage() {
    return (
        <section className='initial'>
            <div className='initial__video-container'>
                <div className='initial__overlay'>
                    <video className='initial__video' src={Intro} autoPlay loop muted />
                </div>
            </div>
            <div className='initial__content'>
                <button className='initial__button'>Registrarse</button>
                <button className='initial__button initial__button--login'>Iniciar Sesion</button>
            </div>
        </section>
    )
}

export default InitialPage