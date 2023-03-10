import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

// const data= [
//     {id:1,img:"inflation.jpg",name:"Inflation rate", text:"Armenia's annual inflation rate eased to 8.3 percent in December of 2022, from 8.8 percent in the previous month. "},
//     {id:2,img:"economy2.jpg",name:"Economic growth",text:"Armenia’s economy has shown resilience to recent shocks thanks largely to prudent macroeconomic management – a flexible exchange rate, active inflation targeting regime, effective fiscal rule – and a sound financial sector. Although the economy has performed better than anticipated earlier in 2022, geopolitical challenges continue to weigh on Armenia’s medium-term growth prospects.   "},
//     {id:3,img:"static.jpg",name:"Static of Armenian economy",
//      text:"Armenia’s economy has shown resilience to recent shocks thanks largely to prudent macroeconomic management – a flexible exchange rate, active inflation targeting regime, effective fiscal rule – and a sound financial sector. Although the economy has performed better than anticipated earlier in 2022, geopolitical challenges continue to weigh on Armenia’s medium-term growth prospects.  "}
//     ]
   function Main(){
  const [state,setState]= useState([])
  useEffect(()=>{
      fetch("http://localhost:3001")
      .then ((res)=>{
          return res.json()
      })
        .then ((data)=>{
             setState(data)
        })
          
  },[])
console.log(state);


return (
    <main>
      <div className="MainPart">
        {state.map((el,i) => {
          return (
            <div key={i} className="imgs">
             <Link to={`/item/${el.id}`}> 
                <img src={el.img} alt={el.alt} />
                <h2 className="ptag">{el.name}</h2>
              </Link>
            </div>
          );
        })}
      </div>
    </main>
)}

function Item() {
  const {id} = useParams();
  const [state,setState]= useState({})
  useEffect(()=>{
      fetch("http://localhost:3001/economy/"+id)
      .then ((res)=>{
          return res.json()
      })
        .then ((data)=>{
             setState(data)
        })
          
  },[])
  console.log(state);
  // const data2 = state.find(el => el.id === parseInt(id));
  return (
    <div>
      <img src={state.img} alt=""/>
      <p >  {state.description} </p>
    </div>
  );
}

export {Main, Item} 
