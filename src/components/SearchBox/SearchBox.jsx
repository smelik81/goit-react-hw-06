import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { useId } from "react";
import { filterContact } from "../../redux/filtersSlice";

export default function SearcBox() {
  const inputId = useId();

  const dispatch = useDispatch();
  const name = useSelector((state) => state.filters.name);

  const handleInputChange = (event) => {
    const value = event.target.value;
    dispatch(filterContact(value));
  };
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <label htmlFor={inputId} className={css.label}>
          Find contacts by name
        </label>
        <input
          id={inputId}
          type="text"
          className={css.input}
          value={name}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}
