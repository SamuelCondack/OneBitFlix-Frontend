import useSWR from "swr";
import courseService from "@/src/services/courseService";
import SlideComponent from "../../common/slideComponent";
import styles from "../../../../styles/slideCategory.module.scss";
import PageSpinner from "../../common/spinner";

const NewestCategory = function () {
  const { data, error } = useSWR("/newest", courseService.getNewestCourses);

  if (error) return error;
  if (!data){
    return <PageSpinner />
  }
  return (
    <>
      <p className={styles.titleCategory}>NEWEST</p>
      <SlideComponent course={data.data} />
    </>
  );
};

export default NewestCategory;
