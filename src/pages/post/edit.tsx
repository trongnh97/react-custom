import { useParams } from "react-router-dom";
import dayjs from 'dayjs';
import { useState } from "react";

function EditPost() {
  const params = useParams();
  const [nowOld, setNowOld] = useState(0);
  const [nowNew, setNowNew] = useState(0);

  function handleOld() {
    setNowOld(dayjs().minute());
  };
  function handleNew() {
    setNowNew(dayjs().minute());
  };

  return(
    <div>
      <h2>Edit post - {nowOld} - {nowNew}</h2>
      <button onClick={handleOld}>old</button>
      <button onClick={handleNew}>new</button>
    </div>
  );
}

export default EditPost;
