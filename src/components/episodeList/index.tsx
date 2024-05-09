import { CourseType, EpisodeType } from "@/src/services/courseService";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";

interface props {
  episode: EpisodeType;
  course: CourseType;
}

const EpisodeList = function ({ episode, course }: props) {
  const router = useRouter();

  const handleSecondsToMin = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    function toString(num: number) {
      return num.toString().padStart(2, "0");
    }

    const result = `${toString(minutes)}:${toString(seconds)}`;

    return result;
  };

  const handleEpisodePlayer = () => {
    router.push(`/course/episode/${episode.order - 1}?courseid=${course.id}`);
  };

  return (
    <>
      <div className={styles.episodeCard} onClick={handleEpisodePlayer}>
        <div className={styles.episodeOrderTime}>
          <p className={styles.episodeOrder}>Episode {episode.order}</p>
          <p className={styles.episodeTime}>
            {handleSecondsToMin(episode.secondsLong)}
          </p>
        </div>
        <div className={styles.episodeTitleDescription}>
          <p className={styles.episodeTitle}>{episode.name}</p>
          <p className={styles.episodeDescription}>
            {episode.synopsis}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            odio ullam reprehenderit corrupti totam consectetur repellendus
            pariatur rerum reiciendis dolor odit, iste esse nisi libero
            obcaecati magnam mollitia nobis sapiente enim. Cupiditate, soluta
            ab, ratione unde dolor recusandae laborum id repellendus quis
            accusamus facilis saepe dicta beatae consequatur ullam libero.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, non.
          </p>
        </div>
      </div>
    </>
  );
};

export default EpisodeList;
