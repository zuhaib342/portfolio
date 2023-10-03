import React from "react";
import { useEffect } from "react";
import styles from "../styles/Work.module.css";

const Work = () => {
  return (
    <div className={styles.workPage}>
      <h1 className={styles.Zuhaib}>My Work</h1>
      <h3 className={styles.Zuhaib1}>
        Throughout my career, I've consistently delivered outstanding results
        through creativity,<br /> collaboration, and adaptability. I excel in
        problem-solving and bring a valuable blend of skills <br /> to every project.
        My commitment to excellence and continuous learning drives success and <br />
        innovation.
      </h3>
      <div className={styles.cardContainer}>
        {/* Card 1 */}
        <div className={styles.card}>
          <a href="https://raffels-app.vercel.app/">
            <img src="Raffels-app.png" alt="Work 1" />
          </a>
        </div>
        {/* Card 2 */}
        <div className={styles.card}>
          <a href="https://event-app-deploy-xbpb.vercel.app/">
            <img src="event-planner.png" alt="Work 2" />
          </a>
        </div>
        {/* Card 3 */}
        <div className={styles.card}>
          <a href="https://watery-throat.surge.sh/">
            <img src="Nordic-Rose.png" alt="Work 3" />
          </a>
        </div>
        
      </div>
      <div className={styles.cardContainer}>
        {/* Card 1 */}
        <div className={styles.card}>
          <a href="https://aimm.vercel.app/">
            <img src="Work4.jpg" alt="Work 1" />
          </a>
        </div>
        {/* Card 2 */}
        <div className={styles.card}>
          <a href="https://github.com/zuhaib342">
            <img src="github.png" alt="Work 2" />
          </a>
        </div>
          {/* Card 2 */}
          <div className={styles.card}>
          <a href="">
            <img src="work6.jpg" alt="Work 6" />
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default Work;
