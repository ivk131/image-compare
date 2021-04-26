import React,{useState,useEffect} from 'react'

function ComparisonTable(props) {
    
    const [data,setData] = useState([]);
    const {image} = props;
    

    useEffect(()=>{
        setData([...data,...image]);
    },[image])

    console.log(image);

    return (
        <div>
            <h6>COMPARISON TABLE</h6>
            <hr/>
            <br/>
            <table className="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Image</th>
      <th scope="col">Url</th>
      <th scope="col">Title</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"> {image.id} </th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        </div>
    )
}

export default ComparisonTable
