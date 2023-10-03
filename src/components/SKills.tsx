import React, { useState, useEffect } from 'react';
import ReactCardFlip from 'react-card-flip';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styles from '../styles/Skills.module.css';

const skillsList = [
  { name: 'Next.js', knowledge: 80 },
  { name: 'Nodejs', knowledge: 70 },
  { name: 'Expressjs', knowledge:75 },
  { name: 'FireBase', knowledge: 80 },
  { name: 'MongoDB' , knowledge: 70 },
  // Add more skills with their knowledge levels
];

const Skills = () => {
  const [isFlipped, setIsFlipped] = useState(Array(skillsList.length).fill(false));
  const [sliderValues, setSliderValues] = useState(Array(skillsList.length).fill(0));

  useEffect(() => {
    // Initialize the slider values based on knowledge levels
    const initialSliderValues = skillsList.map((skill) => skill.knowledge);
    setSliderValues(initialSliderValues);
  }, []);

  const handleCardClick = (index :number ) => {
    const newIsFlipped = [...isFlipped];
    newIsFlipped[index] = !newIsFlipped[index];
    setIsFlipped(newIsFlipped);
  };

  return (
    <div className={styles.skillsPage}>
      <h1 className={styles.Zuhaib}>Skills</h1>
      <div className={styles.cardContainer}>
        {skillsList.map((skill, index) => (
          <ReactCardFlip isFlipped={isFlipped[index]} flipDirection="horizontal" key={index}>
            <div className={styles.skillCard} onClick={() => handleCardClick(index)}>
              <div className={styles.cardFront}>
                <h3>Click to see skills</h3>
              </div>
            </div>
            <div className={styles.skillCard} onClick={() => handleCardClick(index)}>
              <div className={styles.cardBack}>
                <h3>{skill.name}</h3>
                <Slider
                  min={0}
                  max={100}
                  value={sliderValues[index]}
                  disabled
                />
              </div>
            </div>
          </ReactCardFlip>
        ))}
      </div>
    </div>
  );
};

export default Skills;
