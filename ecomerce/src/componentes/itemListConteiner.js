 import React from 'react'

 function ItemListConteiner(props) {
     return (
         <div className='contenedor'>
             <article>
                 <h2>{props.producto1}</h2>
                 <img>{props.imagen}</img>
             </article>
         </div>
     )
 }

 export default ItemListConteiner;