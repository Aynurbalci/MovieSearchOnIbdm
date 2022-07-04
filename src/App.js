import './App.css';

const Person=()=>{
    return(
        <>
<h1>Name:Aynur</h1>
<h2>Last name: balci</h2>
<h2>Age:30</h2>


        </>
    )
}
const App = () => {

    const name = "aynur";
    const isNameShowing=true;
    return ( 
    <div className = "App" >
        <h1>
        hello</h1> {name ?(<>{name}</>):(<><h1>hiiii</h1>
        <h2>gfcjcj</h2></>) } 
        

        </div>
    );
}

export default App;