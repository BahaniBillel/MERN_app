import { useContext } from "react";
import { WorkoutsContext } from "../context/WorkoutContext";

function useWorkoutsContext() {
  const context = useContext(WorkoutsContext);
if (!context) {
    throw Error('use e')
}
  return context;
}

export default useWorkoutsContext;
