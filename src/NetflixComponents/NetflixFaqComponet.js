import "./NetflixFaqComponet.css"

import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import NetflixRegistrationComponents from "./SmallerComponent/NetflixRegistrationComponents";

export default function NetflixFaqComponent(){
    return(
       <div className="text-white bg-black netflix_faq">
            <h1 className="text-center fw-bold mb-5 faq_header">Frequently asked questions</h1>
            <div>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            What is Netflix?
                            </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                        <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, 
                                        movies, anime, documentaries and more – on thousands of internet-connected devices.</p>
                                        <p>You can watch as much as you want, whenever you want, without a single ad – all for 
                                        one low monthly price. There's always something new to discover, and new TV shows and
                                        movies are added every week.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                How much does Netflix cost?
                            </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed 
                                monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Where can I watch?
                            </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com 
                                from your personal computer or on any internet-connected device that offers the Netflix app, including 
                                smart TVs, smartphones, tablets, streaming media players and game consoles.</p>
                                <p>
                                You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads 
                                to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                How do I cancel?
                            </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account 
                                online in two clicks. There are no cancellation fees – start or stop your account anytime.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                What can I watch on netflix?
                            </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                Netflix has an extensive library of feature films, documentaries, TV shows, 
                                anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                Is netflix good for kids?
                            </button>
                            </h2>
                            <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy 
                                family-friendly TV shows and films in their own space.</p>
                                <p>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of 
                                content kids can watch and block specific titles you don’t want kids to see.</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="mt-5">
                <NetflixRegistrationComponents/>
            </div>
        </div>
    );
}