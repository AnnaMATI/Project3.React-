
export default function Economy(){
  
const state=[
{img:"chart.jpg", 
Text:"The Armenian economy contracted sharply in 2020, by 5.7%, mainly due to the 2020 Armenia-Azerbaijan war. In contrast it grew by 7.6 per cent in 2019,the largest recorded growth since 2007, while between 2012 and 2018 GDP grew 40.7%, and key banking indicators like assets and credit exposures almost doubled.While part of the Soviet Union, the economy of Armenia was based largely on industry—chemicals, electronic products, machinery, processed food, synthetic rubber and textiles; it was highly dependent on outside resources. Armenian mines produce copper, zinc, gold and lead. The vast majority of energy is produced with imported fuel from Russia, including gas and nuclear fuel for Armenia's Metsamor nuclear power plant.[29] The main domestic energy source is hydroelectric. Small amounts of coal, gas and petroleum have not yet been developed.Armenia's severe trade imbalance has been offset somewhat by international aid, remittances from Armenians working abroad, and foreign direct investment. Economic ties with Russia remain close, especially in the energy sector.The former government had made some improvements in tax and customs administration in recent years, but anti-corruption measures had been more difficult to implement in the period when the Republican Party of Armenia was in power. This is expected to change after the 2018 Armenian"}]
      return <div>
              {state.map((el,i)=>{
                return (
                    <>
                    <img  src={el.img} />
                    <p> {el.Text}</p>
                    </>
                )
              })}
            </div>
}
