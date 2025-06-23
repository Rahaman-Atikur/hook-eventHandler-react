import './App.css'
function App() {
  function handleClick(){
    alert("I am Clicked");
  }
  const anotherButton=()=>{
    alert("I am also Clicked");
  }
  const addNumber=(num)=>{
    let number = num + 5;
    alert(number);
  }
    return (
    <>
      <h1>React</h1>
      <button onClick={handleClick}>Click Me</button> <br />
      <button onClick={anotherButton}>Click Me</button> <br />
      <button onClick={()=>addNumber(10)}>ADD NUMBER</button>
    
    </>
  )
}
export default App
