import React from 'react';
import { calculateTips } from '../actions/tipsCalculated';

export default class CalculateScreen extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            amount: this.props.tips.screenCalculate.amount,
            porcent: this.props.tips.screenCalculate.porcent,
            tips:  this.props.tips.screenCalculate.tips,
            total: this.props.tips.screenCalculate.total
    
        };

    }
   
    onAmountChange = (e = null) =>{

        const amount = e !== null ? e : this.props.tips.screenCalculate.amount;
        
        this.props.tips.dispatch(calculateTips({amount: parseFloat(amount) || 0, porcent: this.props.tips.screenCalculate.porcent}));
        this.setState({amount: parseFloat(amount) || ''});
        
    }

    handleOptionChange = (attr) => {    

        this.props.tips.dispatch(calculateTips({amount: this.props.tips.screenCalculate.amount, porcent: parseInt(attr.target.value)}));
    
    }
   
    render() {

        return (

            <div>
                <div className="screen">
                    <h1 className="margin-text">Tipulator</h1>
                    <div className="margin-text">
                        
                        <h3 className="total-text">Grand Total</h3>
                        <h1>${this.props.tips.screenCalculate.total.toFixed(2) || 0.00 }</h1>
                        
                    </div>
                </div>
               
                <input 
                    className="input-text" 
                    type="number" 
                    id="amount" 
                    placeholder="Your Bill Amount Here"
                    value={this.state.amount > 0 ? this.state.amount : ''} 
                    onChange={(e)=>(
                        this.onAmountChange(e.target.value)
                    )}
                 />

                 {this.props.tips.screenCalculate.tips > 0 &&
                    <div className="tips-label">
                        <h3 className="text-tips-left">Tips: ${parseFloat(this.props.tips.screenCalculate.tips).toFixed(2)}</h3>
                        <h3 className="text-tips-right" onClick={this.onAmountChange}>X</h3>
                    </div>
                }

                <div className="section">
                    <div className="porcent-val">

                        <label className="container-radio">
                        
                        <input 
                            type="radio"  
                            name="porcent" 
                            value="10" 
                            checked={this.props.tips.screenCalculate.porcent  === 10} 
                            onChange={(e)=>{
                                this.handleOptionChange(e);
                                console.log("click");
                            }} 
                        />

                        <span className="checkmark"></span>
                            <span className="span-text">10%</span>
                        </label>

                    </div>

                    <div className="porcent-val">
                        <label className="container-radio">
                        
                        <input 
                            type="radio" 
                            name="porcent" 
                            value="15" 
                            checked={this.props.tips.screenCalculate.porcent === 15} 
                            onChange={(e)=>{
                                this.handleOptionChange(e);
                                console.log("click");
                            }} 
                        />
                        
                        <span className="checkmark"></span>
                            <span className="span-text">15%</span>
                        </label>

                    </div>

                    <div className="porcent-val">
                        <label className="container-radio">
                        
                        <input 
                            type="radio" 
                            name="porcent" 
                            value="20" 
                            checked={this.props.tips.screenCalculate.porcent  === 20} 
                            onChange={(e)=>{
                                this.handleOptionChange(e);
                            }} 
                        />
                        <span className="checkmark"></span>
                        <span className="span-text">20%</span>
                        </label>

                    </div>
                
                </div>

                <input 
                    className="input-text" 
                    type="number" 
                    placeholder="Custom %" 
                    onChange={(e)=>(
                        this.handleOptionChange(e)
                    )} 
                 />

            </div>

        );

    }

}