import axios from 'axios'

const searchImage = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=nF8d0I0uWnjfMpaJ584m1Ki44iI-co4mkrS38HY1464'
    
    const response = await axios.get(url, {
        params:{
            query: term
        }
    })
    console.log(term)
    console.log(response.data.results)

    return response.data.results
}

export default searchImage