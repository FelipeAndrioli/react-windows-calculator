import axios from 'axios'

const EXPRESSION_REST_API_URL = 'http://localhost:8080/api/arithmeticoperation';

class SolveExpression {
    
    getResult(leftNumber, operation, rightNumber) {
            axios.get(EXPRESSION_REST_API_URL, { params: { 
                leftN: leftNumber, 
                arithmeticOperation: 
                operation, rightN: rightNumber
            }});        
        };
}

export default new SolveExpression()