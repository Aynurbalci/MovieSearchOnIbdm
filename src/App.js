import './App.css';

const Person=(props)=>{
    return(
        <>
<h1>Name:{props.name}</h1>
<h2>Last name: {props.lastname}</h2>
<h2>Age:{props.age}</h2>


        </>
    )
}
const App = () => {

    const name = "aynur";
    const isNameShowing=true;
    return ( 
    <div className = "App" >
        <Person name={'john'} lastname={'balci'}/>
         <Person name="aguk"  age={2+2} />
          <Person/>
           <Person/>
        

        </div>
    );
}

export default App;