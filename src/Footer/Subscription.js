const  icon=[`https://cdn-icons-png.flaticon.com/512/2111/2111463.png`,
`https://cdn-icons-png.flaticon.com/512/2504/2504903.png`,
`https://cdn-icons-png.flaticon.com/512/3536/3536424.png`
]

export default function Sub(){
return(
    <footer className="foot">
            <div className="sub1">
                     <h3>SUBSCRIBE</h3>
                    <label> Your first name: <input name="firstName" /></label> 
                    <label> Your e-mail address: <input name="email" /> </label> 
                    <button type="submit">Submit form</button>
            </div>
           < div className="icon">
            <img src={icon[0]}/>
            <img src={icon[1]}/>
            <img src={icon[2]}/>
        </div>    
</footer>

)}



