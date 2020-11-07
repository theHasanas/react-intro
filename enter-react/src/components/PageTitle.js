const PageTitle = () => {
  function greet() {
    alert("hello!");
  }

  const greetWithArrow = () => {
    alert("hello with arrow!");
  };

  return <h1 onClick={greetWithArrow}>Hasan's Sick Portfolio</h1>;
};

export default PageTitle;
