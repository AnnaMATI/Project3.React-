export default function About(){
    const data2=[
        {text:"Today's Armenia is the industrial-agrarian country. The priority belongs to small-scale agricultural production. The country's GDP consists of agriculture – 31.1 %, industrial production – 21.8 %, trade - 8.7 %, construction – 8.5 %, transport – 5.1 %, other sectors - 24.9 %.The leading industries are mechanical engineering and metal working, chemical and petrochemical, nonferrous metallurgy, manufacture of building materials (including the ones based on the deposits of tuffs, pearlites, limestones, granites and marbles), foodstuffs and light industries.Agricultural grounds occupy about 44 % of all lands. The basic crops are melons and watermelons, potatoes, wheat, grapes, fruits, essential oil plants, tobacco, and sugar beet. Livestock sector specializes on dairy-meat cattle breeding, and sheep – breeding in the mountains Economy of Armenia is based on 5 regions which differ in natural and economic-geographical conditions and industrial specializations.Ararat (electric power, mechanical engineering, chemical industries, manufacture of building materials, and agriculture), Shirak (textile industry, mechanical engineering; livestock), Pridebed (copper, chemical industry; agriculture, mechanical engineering), Sevan-Agstevi (electric power, livestock, grains and tobacco), Syuniq (mining industry, agriculture, hydroelectric power industry and mechanical engineering).The main industrial centre of Armenia is Yerevan followed by Gyumri and Vanadzor.In the foreign trade import prevails. Main exports are processed brilliants, machinery and equipment, copper ore. Imported are gas, oil, foodstuffs, etc. The major trade partners in export: Belgium, Russia, Iran, Turkmenistan, the USA, Georgia; import- Russia, the USA, Great Britain, Iran, Turkey, Belgium. Goods turnover with Russia is about 20 % of the entire foreign trade of the republic.Many large Armenian enterprises belong to Russian companies.",
            img:"industry.jpg"
} ]
    return (
        <div>
           {data2.map((el,i)=>{
            return(
                <>
                <img src={el.img}/>
                <p> {el.text} </p>
                </>
           )
             } )}
        </div>
    )
}