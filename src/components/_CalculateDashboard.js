import React from 'react';
import { connect } from 'react-redux';
import CalculateScreen from './_Calculate-Screen';

const CalculateDashboard = (props)=> {
    
    return (

        <div>

            <div className="container">

                <CalculateScreen 
                    tips={props}
                />
            </div>
            
          
        </div>

    );

}

const mapStateProps = (state, props)=>{

    return {

        screenCalculate: state.tips

    }
    
}

export default connect(mapStateProps)(CalculateDashboard);
