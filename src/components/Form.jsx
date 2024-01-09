import { useState } from "react"


export default function Form({action}) {
  const [cif, setCif] = useState("");
  // console.log(e.target.value);
  console.log("el cif es "  + cif);
    return (
    <form onSubmit={e => {
      e.preventDefault();
      action(cif);
    }}>     
     <input onChange={e => setCif(e.target.value)} type="text" name="cif" value={cif} placeholder="Introducetexto" />
     <button type = "submit" >Submit</button>
  </form>  

  )
}
