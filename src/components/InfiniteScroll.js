import React,{useState,useEffect} from 'react'
import Axios from 'axios';
function InfiniteScroll() {
    const[loader,setLoader] = useState(true);
    const[page,setPage] = useState(1);
    const[data,setData] = useState([]);

    // useEffect(()=>{
    //     fetchData(page)
    // },[])


    useEffect(()=>{
        fetchData(page)
       
    },[])

    
    async function fetchData(page){
        if({loader}){

            await fetch(`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limits=10`).then((res)=>res.json()).then((res2)=>{
            if(page>1){
                let newData= [...data,...res2]
                setData(newData)
                
                
            }else{
                setData(res2)
                
            }
             } ).catch((error)=>console.log(error))

            setLoader(false)


        }

        
        else{
            console.log('loader is false')
        }
        
    }

    console.log(data);

    const handleScroll=(e)=>{
        let bottom = e.target.scrollHeight-e.target.clientHeight-e.target.scrollTop<70
        if(bottom){
            let page_ = page+1;
            setPage(page_)
            fetchData(page);
            setLoader(true)
        }


    }


    return (
        <div className='' style={{height:'400px',overflow:'auto'}} onScroll={handleScroll} >
            <h4>Infinite Scroll</h4>
            <hr/>

            <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Email</th>
      <th scope="col">Name</th>
     
    </tr>
  </thead>
  <tbody>
  {
            data.map((item)=>(
                <tr key={item.id} >
        
      <th scope="row">{item.id} </th>
      <td>{item.email}</td>
      <td>{item.name} </td>
     
    </tr>
                
            ))
        }
    
    
    <div className="spinner-border" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
  </tbody>
</table>
            
        </div>
    )
}

export default InfiniteScroll
