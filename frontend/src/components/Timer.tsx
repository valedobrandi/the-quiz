import { useEffect } from "react";
import { IAction } from "../interfaces/IAction";
import { useNavigate } from "react-router-dom";
type TimerPropsType = {
  dispatch: React.Dispatch<IAction>;
  seconds: number;
};
export default function Timer({ dispatch, seconds }: TimerPropsType) {
  const navigate = useNavigate();
  useEffect(() => {
    if (seconds === 0) {
      dispatch({ type: "finished", payload: null });
      navigate("/finish");
    }
    const id = setInterval(() => {
      dispatch({ type: "tick", payload: null });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch, seconds]);

  return (
    <div className="text-center flex items-center">
      <img className="h-7 mr-4" src="timer.svg" alt="statistics picture" />
      <p className="countdown font-mono text-3xl text-red-800">{seconds}</p>
    </div>
  );
}
