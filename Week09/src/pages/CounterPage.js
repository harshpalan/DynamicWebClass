import { useReducer } from "react";
import { produce } from "immer";
import Card from "../components/Card";
import Button from "../components/Button";

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const SET_VALUE_TO_ADD = "set_value_to_add";
const ADD_TO_COUNT = "add_to_count";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      state.count++;
      return;
    case DECREMENT_COUNT:
      state.count--;
      return;
    case SET_VALUE_TO_ADD:
      state.valueToAdd = action.payload;
      return;
    case ADD_TO_COUNT:
      state.count += state.valueToAdd;
      state.valueToAdd = 0;
      return;
    default:
      return;
  }
};

export default function CounterPage({ initialCount }) {
  //   const [count, setCount] = useState(initialCount);
  //   const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    // setCount(count + 1);
    dispatch({ type: INCREMENT_COUNT });
  };

  const decrement = () => {
    // setCount(count - 1);
    dispatch({ type: DECREMENT_COUNT });
  };

  const handleToChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    // setValueToAdd(value);
    dispatch({ type: SET_VALUE_TO_ADD, payload: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setCount(count + valueToAdd);
    // setValueToAdd(0);
    dispatch({ type: ADD_TO_COUNT });
  };

  return (
    <Card className="m-4">
      <h1 className="text-xl mb-4">Count is currently: {state.count}</h1>
      <div className="flex flex-row">
        <Button success outline rounded onClick={increment}>
          Increment
        </Button>
        <Button danger outline rounded onClick={decrement}>
          Decrement
        </Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a custom amount:</label>
        <input
          type="number"
          className="p-1 m-4 bg-slate-50 border border-slate-300"
          value={state.valueToAdd || ""}
          onChange={handleToChange}
        />
        <Button primary outline rounded type="submit">
          Add
        </Button>
      </form>
    </Card>
  );
}
