import React, {useState} from 'react'
import Form from './components/form'
import Card from './components/Card';


// el main.jsx es como el abuelo 
// El app es el padre y el main.jsx es superior como el abuelo
// En el main se dice simplemente que renderice el app
// crear un componente rapido react

// Ozymandias

export default function App() {
     const [empresa, setEmpresa] = useState([]);
     const submitForm = async(inputparam) => {    
          try {
            // const response = await fetch("https://jsonplaceholder.typicode.com/todos/" )
            const response = await fetch(`https://poetrydb.org/title/${inputparam}` )
            const data = await response.json();
            setEmpresa(data);
            console.log("empresa " + " " + empresa)
                           
          } catch (error) {
            throw new Error(`HTTP STATUS: ${response.status}`);
            
          }
        }
      
        
    //  }, [])
        
  return (
    <div>App

      <Form action={submitForm}/>
      <Card empresa={empresa} />

        
    </div>
  )
}
