import "./NetflixGalleryFourComponent.css";

export default function NetflixGalleryFourComponent(){
    return(
        <div className="pic4">
             <div className="netflix-galFourImg">
                <img alt="galleryFour" width="550px" className="img4"/>
            </div>
            <div className='text-white netflix-galFourPara'>
                <h1 className='fw-bold p-2'>Create profiles for kids</h1>
                <h3 className='p-2 fs-5'>Send children on adventures with their favourite<br/>
                 characters in a space made just for them—free with<br/>
                 your membership.</h3>
            </div>
        </div>
    );
}