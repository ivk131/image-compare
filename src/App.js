
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from './components/Card';
import HomeScreen from './components/Home';
import InfiniteScroll from './components/InfiniteScroll';

const handlescroll=(e)=>{
  let bottom = e.target.scrollHeight-e.target.clientHeight-e.target.scrollTop<50
  if(bottom){
    console.log("reach to bottom")
  }


}

function App() {
  return (
    <div className='' style={{display:'flex',flexDirection:'column'}} >
      <div className='' style={{height:'400px',overflow:'auto',display:'flex',flexWrap:'wrap',marginBottom:'10px'}} onScroll={handlescroll} >
      <HomeScreen/>

      </div>
      <div >
        <InfiniteScroll/>

      </div>
     
      
      

    

    </div>
  );
}

export default App;
