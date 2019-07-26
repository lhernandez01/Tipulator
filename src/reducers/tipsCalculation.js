const tipsCalculeteDefaultState = {
    amount: 0,
    porcent: 10,
    tips:  0,
    total: 0
};

export default (state = tipsCalculeteDefaultState, action) => {

    switch(action.type){

        case 'CALCULATE':
            const newPorcent = action.newValue.porcent;
            const newAmount = parseFloat(action.newValue.amount);
            const tip = (newAmount * (newPorcent/100)) || 0;
            
            return {

                amount: newAmount,
                porcent: newPorcent,
                tips:  tip,
                total: tip + newAmount

            };

        default:
            return state;

    }
};