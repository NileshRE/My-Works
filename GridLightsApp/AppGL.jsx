import { useState } from 'react'
import '../GridLightsApp/indexgl.scss'

const AppGL = ()=>{
    const [order, setOrder] = useState([]);
    const [deactive, setDeactive] = useState(false);
    const config = [
        [1,1,1],
        [1,0,1],
        [1,1,1]
    ]

    const deactivateCells = ()=>{
        setDeactive(true)
        const timer = setInterval(()=>{
            setOrder((origOrder)=>{
                const newOrder = origOrder.slice()
                newOrder.pop();

                if(newOrder.length===0){
                    clearTimeout(timer)
                }

                return newOrder
            })
        }, 300)
    }

    const activateCells=(index)=>{
        const newOrder = [...order, index]
        setOrder(newOrder);
        console.log(newOrder);

        if(newOrder.length === config.flat(1).filter(Boolean).length){
            deactivateCells();
        }
    }

    const Cell =({filled,onClick, disabled, label})=>
     (<button type="button" disabled={disabled} aria-label={label} onClick={onClick} className={filled ? "cell cell-activated" : "cell"} />
    );

    return(
    <>
    <h2>Grid Lights</h2>
    <div className="wrapper">
        <div className="grid" style={{gridTemplateColumns:`repeat(${config[0].length}, 1fr)`}}>
            {config.flat(1).map((value, index)=>{
               return value ? <Cell key={index} label={`cell-${index}`} filled={order.includes(index)} onClick={()=>activateCells(index)} disabled={order.includes(index) || deactive} /> : <span />
            })}
        </div>
    </div>
    </>
)}


export default AppGL