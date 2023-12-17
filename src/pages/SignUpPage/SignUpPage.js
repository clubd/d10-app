import "./SignUpPage.scss"


function SignUpPage() {
    return (
        <>
        <div className="signup__container">
            <form className="signup__form">
                <label htmlFor="username" className="signup__label signup__label-name">Nombre</label>
                <input className="signup__input signup__input-name" type="text" id="username" name="username"/>
                <label htmlFor="nikckname" className="signup__label signup__label-name">Username</label>
                <input className="signup__input signup__input-nickname" type="text" id="nickname" name="nickname"/>
                <label htmlFor="email" className="signup__label signup__label-email">Correo Electronico</label>
                <input className="signup__input signup__input-email" type="text" id="email" name="email"/>
                <label htmlFor="password" className="signup__label signup__label-password">Password</label>
                <input className="signup__input signup__input-email" type="password" id="password" name="password"/>
                <label htmlFor="confirmation" className="signup__label signup__label-check">Confirm Password</label>
                <input className="signup__input signup__input-email" type="password" id="confirmation" name="confirmation"/>
                <input className="signup__button" type="submit" placeholder="Enviar" />
            </form>
        </div>
        </>
    )
}

export default SignUpPage 