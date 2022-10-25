import image from "../assets/images/3.jpg";
import classes from "../styles/Topic.module.css";

export default function Topic() {
  return (
    <a href="quiz.html">
      <div className={classes.topic}>
        <img src={image} alt="Video Title" />
        <p>Extremely Basic</p>
        <div className={classes.qmeta}>
          <p>10 Questions</p>
          <p>Score : Not taken yet</p>
        </div>
      </div>
    </a>
  );
}