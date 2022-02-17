import axios from "axios";

export const getMarketData = async () => {
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=24h`)
        return response.data
    } catch (e) {
        console.log(e)
    }
}