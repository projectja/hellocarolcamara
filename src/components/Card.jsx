import React from 'react'

export default function Card({empresa}) {
  //  console.log("la empresa en card es interesante . quinto commit " + empresa[0].author)

    return (      
        <>
        
        {empresa? ( 
          <p>
             {/*esto es un comentario */}
             {empresa[0]?.author}
          </p>
        ) : (
          <p>
             No existe
          </p>
        )}
      </>
    );
  }

 
