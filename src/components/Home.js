import React,{useEffect,useState} from 'react'
//import ComparisonTable from './ComparisonTable';
//import ComparisonTable from './ComparisonTable';
import Photo from './Photo';

function HomeScreen() {
    const [image,setImage] = useState([]);
    const[loader,setLoader] = useState(true);
    const [page,setPage] = useState(1);

    useEffect(()=>{
        fetchData(page)

      },[page])


    async function fetchData(page){
        if({loader}){

            await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limits=2`).then((res)=>res.json()).then((res2)=>{
            if(page>1){
                let newData= [...image,...res2]
                setImage(newData)
                
                
            }else{
                setImage(res2)
                
            }
             } ).catch((error)=>console.log(error))

            setLoader(false)


        }

        
        else{
            console.log('loader is false')
        }
        
    }

    console.log(image);

    const handleScroll=(e)=>{
        let bottom = e.target.scrollHeight-e.target.clientHeight-e.target.scrollTop<70
      
        if(bottom){
            let page_ = page+1;
            setPage(page_)
            setLoader(true)
        }


    }
  

  


    return (
        <div style={{height:'600px',overflow:'auto'}} >
             <h4>Photo Listing</h4>
      <hr/>

      <div style={{display:'flex',flexWrap:'wrap'}} onScroll={handleScroll} >
     {image.map(photo => (
      <Photo key={photo.id} photo={photo} />
     ))}
   </div>
  
     
        </div>
    )
}

export default HomeScreen
