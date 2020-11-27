const axios = require('axios')

class SolveExpression {

    solveExpression = async (leftN, operation, rightN) => {
        try {
            return await axios.get('http://localhost:8080/', {
                params: {
                    leftN: leftN,
                    arithmeticOperation: operation,
                    rightN: rightN
                }
            })
        } catch (error) {
            console.log(error)       
        }
    }
    
}

