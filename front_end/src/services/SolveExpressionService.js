const axios = require('axios')

export default axios.create({
    baseURL: "https://localhost:8080/api/arithmeticoperation/"
});