// import RegistrationComponents from "./NetflixComponents/RegistrationComponents";
import NetflixFaqComponet from "./NetflixComponents/NetflixFaqComponet";
import NetflixFooterComponent from "./NetflixComponents/NetflixFooterComponent";
import NetflixHeaderComponent from "./NetflixComponents/NetflixHeaderComponent";
import NetflixMainComponent from "./NetflixComponents/NetflixMainComponent";
import NetflixGalleryOneComponent from "./NetflixComponents/NetflixGalleryOneComponent";
import NetflixGalleryTwoComponent from "./NetflixComponents/NetflixGalleryTwoComponent";
import NetflixGalleryThreeComponent from "./NetflixComponents/NetflixGalleryThreeComponent";
import NetflixGalleryFourComponent from "./NetflixComponents/NetflixGalleryFourComponent";
import "./NetflixIndexComponent.css"

function NetflixIndexComponent(){
  return(
    <div className="netflix_index">
      <div className="welcome">
        <header>
          <NetflixHeaderComponent/>
        </header>
        <main>
          <NetflixMainComponent/>
        </main>
      </div>
      <div className="gallery">
        <NetflixGalleryOneComponent/>
      </div>
      <div className="gallery">
        <NetflixGalleryTwoComponent/>
      </div>
      <div className="gallery">
        <NetflixGalleryThreeComponent/>
      </div>
      <div className="gallery">
        <NetflixGalleryFourComponent/>
      </div>
      <section>
        <NetflixFaqComponet/>
      </section>
      <footer>
        <NetflixFooterComponent/>
      </footer>
    </div>
  );
}

export default NetflixIndexComponent;