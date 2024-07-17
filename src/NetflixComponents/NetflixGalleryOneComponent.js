import "./NetflixGalleryOneComponent.css";

export default function NetflixGalleryOneComponent(){
    return(
        <div className="pic1">
            <div className='text-white netflix-galOnePara'>
                <h1 className='fw-bold p-2'>Enter on your TV</h1>
                <h3 className='p-2 fs-5'>Watch on smart TVs, PlayStation, Xbox, Chromecast,<br/>Apple TV, Blu-ray players and more.</h3>
            </div>
            <div className="netflix-galOneImg">
                <img alt="galleryOne" width="550px" className="img1"/>
            </div>
        </div>
    );
}