const {increment, decrement} = require('../action/redux')

const counter = (state = 0, action) => {
    switch(action.type){
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state -1;
    }
}


module.exports = counter;