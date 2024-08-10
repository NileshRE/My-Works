import { useEffect, useState } from "react"
import "../EMI Calculator/Calcstyles.scss"
import { Tenures } from "./utils/constants";

const EMICalculator = ()=>{
    const [cost, setCost] = useState(0);
    const [interest, setInterest] = useState(10);
    const [fee, setFee] = useState(1);
    const [downPayment, setDownPayment] = useState(0);
    const [tenure, setTenure] = useState(12);
    const [emi, setEmi] = useState(0);

    const calculateEMI=(downpayment)=>{
        if(!cost) return;
        const loanAmount = cost-downpayment;
        const ROI = interest/100;
        const EMIY = tenure/12;

        const EMI = (loanAmount*ROI*(1+ROI)**EMIY)/((1+ROI)**EMIY-1);
        return Number(EMI/12).toFixed(0);
    }

    const calculateDp=(installments)=>{
        if(!cost) return

        const downPayPercent = 100-(installments/calculateEMI(0))*100;
        return Number((downPayPercent/100)*cost).toFixed(0);
    }

    useEffect(()=>{
        if(!(cost>0)){
            setDownPayment(0);
            setEmi(0);
        }
        const EMI = calculateEMI(downPayment);
        setEmi(EMI);
    },[tenure])

    const updateEMI = (e)=>{
        if(!cost) return

        const price = Number(e.target.value);
        setDownPayment(price.toFixed(0))

        const EMI = calculateEMI(price);
        setEmi(EMI);
    }

    const updateDownPayment=(e)=>{
        if(!cost) return

        const installments = Number(e.target.value);
        setEmi(installments.toFixed(0));

        const dp = calculateDp(installments);
        setDownPayment(dp);
    }


    return(
        <>
            <h2>EMI Calculator</h2>
            <div className="emicalc">
                <p>Total Cost of Asset</p>
                <input type="number" value={cost} onChange={(e)=>{setCost(e.target.value)}} placeholder="Total cost of Asset" />
                <p>Interest Rate (in %)</p>
                <input type="number" value={interest} onChange={(e)=>{setInterest(e.target.value)}} placeholder="Enter rate of interest applicable" />
                <p>Processing Fee (in %)</p>
                <input type="number" value={fee} onChange={(e)=>{setFee(e.target.value)}} placeholder="Enter processing Fees applicable" />
                <p>Down Payment</p>
                <label htmlFor="downpayment">{downPayment}</label>
                <input id="downpayment" type="range" value={downPayment} min={0} max={cost} onChange={updateEMI} />
                <p>Total Down Payment-{(Number(downPayment)+(cost-downPayment)*fee/100).toFixed(0)}</p>
                <p>Loan Amount per month</p>
                <label htmlFor="loan">{emi}</label>
                <input id="loan" type="range" value={emi} min={calculateEMI(cost)} max={calculateEMI(0)} onChange={updateDownPayment} />
                <p>Total Loan-{(emi*tenure).toFixed(0)}</p>
                <p>Tenure</p>
                <div className="tenure-container">
                {Tenures.map((t)=>{
                    return(
                    <button key={t} className={`${t===tenure ?"selected" : "tenure"}`} onClick={()=>setTenure(t)}>{t}</button>
                )})}
                </div>
            </div>
        </>
    )
}



export default EMICalculator