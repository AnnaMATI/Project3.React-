
const data= [
    {id:0,img:"inflation.jpg",text:"Armenia's annual inflation rate eased to 8.3 percent in December of 2022, from 8.8 percent in the previous month. "},
    {id:1,img:"economy2.jpg",text:"Armenia’s economy has shown resilience to recent shocks thanks largely to prudent macroeconomic management – a flexible exchange rate, active inflation targeting regime, effective fiscal rule – and a sound financial sector. Although the economy has performed better than anticipated earlier in 2022, geopolitical challenges continue to weigh on Armenia’s medium-term growth prospects.   "},
    {id:2,img:"static.jpg", text:"Armenia’s economy has shown resilience to recent shocks thanks largely to prudent macroeconomic management – a flexible exchange rate, active inflation targeting regime, effective fiscal rule – and a sound financial sector. Although the economy has performed better than anticipated earlier in 2022, geopolitical challenges continue to weigh on Armenia’s medium-term growth prospects.  "}
    ]
 export default  function Main(){
return (
    <main>
        <div className="MainPart">
            {data.map((el, i) => {
                return(
                    <>
                    <div className="imgs">
                        <img src={el.img}/>
                        <p  className="ptag">{el.text}</p>
                    </div>
                     </>
                )
            })}
               </div>
    </main>

)}

