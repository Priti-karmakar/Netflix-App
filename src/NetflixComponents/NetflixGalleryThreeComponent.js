import "./NetflixGalleryThreeComponent.css";

export default function NetflixGalleryOneComponent(){
    return(
        <div className="pic3">
            <div className='text-white netflix-galThreePara'>
                <h1 className='fw-bold p-2'>Watch everywhere</h1>
                <h3 className='p-2 fs-5'>Stream unlimited movies and TV shows on your<br/>phone, tablet, laptop, and TV.</h3>
            </div>
            <div className="netflix-galThreeImg">
                <img alt="galleryThree" width="550px" className="img3"/>
            </div>
        </div>
    );
}