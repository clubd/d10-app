import './InitialPage.scss';
import Intro from "../../assets/videos/intro.mp4";


function InitialPage() {
    return (
        <section  className='initial'>
        <video className='initial__video' src={Intro} autoPlay loop muted />
        <button className='initial__button'>Registrarse</button>
        <button className='initial__button'>Iniciar Sesion</button>
        </section>
    )
}

export default InitialPage