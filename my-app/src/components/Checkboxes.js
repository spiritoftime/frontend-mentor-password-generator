import CheckBox from "./CheckBox";

const Checkboxes = ({ dispatchHandler, checkboxes }) => {
  return (
    <div>
      {checkboxes.map((checkbox, idx) => {
        return (
          <CheckBox
            id={idx}
            key={idx}
            content={checkbox}
            dispatchHandler={dispatchHandler}
          ></CheckBox>
        );
      })}
    </div>
  );
};

export default Checkboxes;
