const Total = (params) => {
  console.log("params",params);
  const { result } = params;
  return <p>Number of exercises {result}</p>;
};
export default Total;
