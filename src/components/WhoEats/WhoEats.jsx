import React from 'react'
import './WhoEats.scss'
const whoEatArr = [`O’zida doimiy charchoq va holsizlik xis qiladiganlar`,`Saraton kasalligini oldini olishni istaganlar`,`Aqliy va jismoniy faoliyati pasayganlar`,`Bemorlikdan keyin oyoqqa tezroq turishni xohlaganlar`,`Jinsiy quvvati kamligidan aziyat chekadiganlar`,`Qarilikni sekinlashtirishni istaganlar`,`Tana va bo’g’imlarda doimiy og’riq xis qiladiganlar`]
function WhoEats() {
  return (
    <section className='whoEats__back'>
        <div className="whoEats__text container">
            <span>Koreya qizil jensheni ichimligini kimlar <br /> iste'mol qiladilar?</span>
            <ol className='whoEat__list'>
                {
                    whoEatArr && whoEatArr.map((e,i)=>(
                        <li key={i}>{e}</li>
                    ))
                }
            </ol>
        </div>
    </section>
  )
}

export default WhoEats