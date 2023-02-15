import { Link } from 'react-router-dom'
import './AboutUs.css'
import PP from './PP.jpeg'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutUs = props => {
    return (
        <>
      <div>
        <h1>About Us</h1>
        <br></br>
        <img src={PP} alt="about us" width="200px" height="200px"/>
        <br></br>
        <br></br>
        <p>
          I am Khalifa AlFalasi. I am a senior in CAS; I am majoring in Computer Science and minoring in Creative Writing. I call Abu Dhabi my home.
        </p>
        <br></br>
        <p>
          Despite having a campus in Abu Dhabi, I decided to enroll in the NYU New York campus full time because I wanted to live in a different place for a few years. There is much to be learned from living abroad, and one semester isn't enough, in my opinion.
        </p>
        <br></br>
        <p>
            I have several hobbies; my favorite is writing fiction stories. I also love consuming fiction in all forms. My favorite form of fiction is anime.
            I do not know what my current favorite anime is, so I won't be answering this question.
        </p>
      </div>
      </>
    );
  };

// make this component available to be imported into any other file
export default AboutUs