import Content from "./components/content";
import Header from "./components/header";
import Total from "./components/total";
const part1 = "Fundamentals of React";
const exercises1 = 10;
const part2 = "Using props to pass data";
const exercises2 = 7;
const part3 = "State of a component";
const exercises3 = 14;
const contentData = [
  { part: part1, exercise: exercises1 },
  { part: part2, exercise: exercises2 },
  { part: part3, exercise: exercises3 },
];
let result = 0;
const App = () => {
  return (
    <div>
      <Header />
      {contentData.map(({ part, exercise }, index) => (
        <Content key={index} part={part} exercise={exercise} />
      ))}
      {contentData.map(({ exercise }, index) => {
        result += exercise;
        console.log("result", result);
        console.log(contentData.length);
        console.log(index);
        if (contentData.length - 1 == index) {
          console.log("open");
          return <Total key={index} result={result} />;
        }
      })}
    </div>
  );
};

export default App;
