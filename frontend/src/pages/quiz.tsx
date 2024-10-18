import Options from "../components/Options";
import Button from "../components/Button";
import Progress from "../components/Progress";
import reducer from "../reducer/index";
import { initialState } from "../reducer/store";
import isRender from "../utils/isRender";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { useEffect, useReducer, useRef } from "react";

type QuizPropsType = {
  setUsername: React.Dispatch<any>;
  username: string;
};

function Quiz({ setUsername, username }: QuizPropsType) {
  const [
    {
      status,
      questions,
      categories,
      index,
      answer,
      points,
      seconds,
      nextQuestion,
      sequence,
      bonus,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  const userRef = useRef("");

  useEffect(() => {
    if (questions.length % 10 !== 0) return;
    const fetchQuestions = async () => {
      try {
        const questions = await fetch("http://localhost:3001/quiz");
        const data = await questions.json();

        dispatch({ type: "refreshQuestion", payload: data });
      } catch (error) {
        console.log(error);
        dispatch({ type: "fail", payload: null });
      }
    };
    fetchQuestions();
  }, [index]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const questions = await fetch("http://localhost:3001/quiz");
        const data = await questions.json();
        
        dispatch({ type: "success", payload: data });
      } catch (error) {
        console.log(error);
        dispatch({ type: "fail", payload: null });
      }
    };
    fetchQuestions();
  }, []);

  useEffect(() => {
    if (nextQuestion === 0) return;

    const timeoutId = setTimeout(() => {
      dispatch({
        type: "nextQuestion",
        payload: questions[index].correct_answers,
      });
    }, 1000);


    return () => clearTimeout(timeoutId); 

  }, [nextQuestion]);

  return (
    <div className="my-12">
      {isRender(status, "loading") && <Loader />}
      {isRender(status, "error") && <Error />}
      {isRender(status, "ready") && (
        <div className="m-8 text-center">
          <h1 className="font-Nunito md:text-4xl text-2xl font-black m-8 text-center">
            You have 4 minutes to answer how many question you can.
          </h1>
          <div className="flex flex-col items-center">
            {!username && (
              <input
                onChange={({ target }) => (userRef.current = target.value)}
                type="text"
                placeholder="type your nickname ..."
                className="input input-bordered input-warning w-full max-w-xs m-4"
              />
            )}
            <Button
              style="btn btn-active btn-lg md:text-lg"
              setClick={() => (
                dispatch({ type: "start", payload: null }),
                setUsername({ type: "setNickname", payload: userRef.current })
              )}
              title={"Start Quiz"}
            />
          </div>
        </div>
      )}
      {isRender(status, "finish") && (
        <div className="m-8 text-center">
          <h1 className="font-Nunito md:text-4xl text-2xl font-black m-8 text-center">
            You have 2 minutes to answer how many question you can.
          </h1>
          <Button
            style="btn btn-active btn-lg md:text-lg"
            title={"Restart Quiz"}
            setClick={() => dispatch({ type: "restartQuiz", payload: null })}
          />
        </div>
      )}
      {isRender(status, "start") && (
        <div className="m-6">
          <div className="mx-auto">
            <Progress
              username={username || "player"}
              categories={categories}
              seconds={seconds}
              dispatch={dispatch}
              index={index}
              points={points}
              sequence={sequence}
              bonus={bonus}
            />
            <div>
              <h4
                className="terminal-box text-lg p-4 md:text-2xl w-full 
              justify-start h-full text-xl mb-4 text-center"
              >
                {questions[index].question}
              </h4>
            </div>
            <div className="options">
              <Options
                dispatch={dispatch}
                answerOptions={questions[index].answers}
                correctAnswer={Number(questions[index].correct_answers)}
                answer={answer}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
