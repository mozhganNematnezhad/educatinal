import { createContext, useState, useContext, useEffect } from "react";

import { getAllCourses, getAllArticle, getAllLessons } from "Services/Public";

const AllDataContext = createContext({
  course: [],
  article: [],
  lesson: [],
});

const AllDataState = ({ children }) => {
  const [data, setData] = useState({
    course: [],
    article: [],
    lesson: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getAllCourses(), getAllArticle(), getAllLessons()])
      .then(([course, article, lesson]) => {
        setData({
          course: course.data.result,
          article: article.data.result,
          lesson: lesson.data.result,
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <AllDataContext.Provider value={{ data, loading, setData,setLoading }}>
      {children}
    </AllDataContext.Provider>
  );
};

export default AllDataState;

export const ConsumeAllDataState = () => useContext(AllDataContext);



