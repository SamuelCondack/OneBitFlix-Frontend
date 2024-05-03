import useSWR from "swr";
import styles from "../../../../styles/slideCategory.module.scss";
import courseService from "@/src/services/courseService";
import SlideComponent from "../../common/slideComponent";

const FavoriteCategory = function () {
  const { data, error } = useSWR("/favorites", courseService.getFavCourses);

  if (error) return error;
  if (!data)
    return (
      <>
        <p>loading...</p>
      </>
    );

  return (
    <>
      <p className={styles.titleCategory}>My list</p>
      {data.data.courses.length >= 1 ? (
        <SlideComponent course={data.data.courses} />
      ) : (
        <p className="text-center pt-3 h5">
          <strong>You don't have any courses in the list</strong>
        </p>
      )}
    </>
  );
};

export default FavoriteCategory;
