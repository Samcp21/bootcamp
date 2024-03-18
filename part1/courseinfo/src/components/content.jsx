const Content = (params) => {
  const { part, exercise } = params;
  return (
    <p>
      {part} {exercise}
    </p>
  );
};
export default Content;
