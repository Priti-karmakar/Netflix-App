import './NetflixMainComponent.css'
import NetflixRegistrationComponents from './SmallerComponent/NetflixRegistrationComponents';

export default function NetflixMainComponent(){
    return(
        <div className='netflix-main'>
            <div className='text-center text-white netflix-content'>
                <h1 className='fw-bold p-2'>Unlimited movies, TV shows and more</h1>
                <h3 className='p-2'>Watch anywhere. Cancel anytime.</h3>
            <NetflixRegistrationComponents/>
            </div>
        </div>
    );
}