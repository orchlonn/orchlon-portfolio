// import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <p className={styles.name}>Oscar Chinbat</p>
        <p>Full Stack software engineer</p>
        <p>
          I build pixel-perfect, engaging, and accessible digital experiences.
        </p>
      </div>
      <div className={styles.rightSide}>
        <p>
          I am a junior studying Computer Science at Central Washington
          University with a strong passion for software engineering. I have
          completed three internships, where I gained valuable experience in
          mobile app development, taking projects from concept to final product.
          My primary tools include React Native, Expo, Node.js, Angular, and
          Firebase, which I use to build custom iOS, Android, and web
          applications.
        </p>
      </div>
    </div>
  );
}
