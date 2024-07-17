import "./NetflixLanguageSelectionComponent.css";

export default function NetflixLanguageSelectionComponent(){
    return(
        <select className="form-select language-select">
            <option lang="en" label="English" value="en-IN">English</option>
            <option lang="hi" label="हिंदी" value="hi-IN">हिंदी</option>
        </select>
    );
}