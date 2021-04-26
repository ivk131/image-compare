import React, { useState } from 'react'
import ComparisonTable from './ComparisonTable';

function Photo(props) {
    const {photo} = props;
    const [compaire,setCopaire] = useState(false);

    const addToTable=(photo)=>{
      <ComparisonTable photo={photo} />

      setCopaire(true)

    }

    const removeFromeTable=(e)=>{
      console.log(e)
      setCopaire(false);
      

    }

    return (
        <div>
            <div className="card" style={{width:'18rem',margin:'10px'}} >
  <img src={photo.url} className="card-img-top" alt="phot"/>
  <div className="card-body">
    <h5 className="card-title">{photo.title} </h5>
    <p className="card-text"> {photo.id} </p>
    <h6 className="card-text"> {photo.url} </h6>
    {
      compaire?(<button type='button' className="btn btn-danger" onClick={removeFromeTable} > Remove </button>):(<button className="btn btn-primary" type='button'  onClick={addToTable} >Compaire</button>)
    }
   
  </div>
</div>
            
        </div>
    )
}

export default Photo
