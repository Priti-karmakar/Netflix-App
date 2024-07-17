function NetflixRegistrationComponents() {
    return (
        <div className="w-75 m-auto">
            <p className="text-center text-white fs-5">Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="input-group input-group-lg text-dark">
                <div className="form-floating">
                    <input type="email" className="form-control text-dark" id="floatingInput" placeholder=""/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <button className="btn btn-danger">Get Started <span className="bi bi-chevron-right"></span></button>
            </div>
        </div>
    );
}

export default NetflixRegistrationComponents;