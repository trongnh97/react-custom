import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store";
import { cloneDeep } from "lodash";

import InputText from "components/InputText";
import Title from "components/Title";
import { fetchPhotos, setName } from "stores/photoSlice";
import { SOMETHING } from "../constants/server";

function Home() {
  const name = useSelector((state: RootState) => state.photos.name);
  const dispatch = useDispatch<AppDispatch>();
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [something, setSomething] = useState(cloneDeep(SOMETHING));

  useEffect(() => {
    dispatch(fetchPhotos({ page: 1, limit: 10 }));
  }, [dispatch]);

  function handleChangeCount() {
    setCount(count + 1);
    dispatch(setName("trong"));
  };
  function handleChangeRadio(id: number) {
    let arr: any = [];
    something.forEach((item) => {
      if (item.id === id) {
        const a = {...item, checked: true};
        arr.push(a);
      } else {
        const a = {...item, checked: false};
        arr.push(a);
      }
    });
    setSomething(arr);
    
  };
  const handleChangeInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }, []);

  return (
    <div className="container">
      <h1>Home {count} - {name}</h1>
      <Title />
      <InputText value={text} onChange={handleChangeInput} />
      <button onClick={handleChangeCount}>Change count</button>
      <div className="mt-5">
        {something.map((item) => {
          return(
            <div className="form-check" key={item.id}>
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                checked={item.checked}onChange={() => handleChangeRadio(item.id)}
              />
              <label className="form-check-label">{item.label}</label>
            </div>
          );
        })}
        
      </div>
    </div>
  );
}

export default Home;
