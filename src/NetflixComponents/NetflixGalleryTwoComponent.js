import "./NetflixGalleryTwoComponent.css";

export default function NetflixGalleryTwoComponent(){
    return(
        <div className="pic2">
             <div className="netflix-galTwoImg">
                <img alt="galleryTwo" width="550px" className="img2"/>
            </div>
            <div className='text-white netflix-galTwoPara'>
                <h1 className='fw-bold p-2'>Download your shows<br/>to watch offline</h1>
                <h3 className='p-2 fs-5'>Save your favourites easily and always have<br/>something to watch.</h3>
            </div>
        </div>
    );
}