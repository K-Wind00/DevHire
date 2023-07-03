import axios from 'axios'

export const fetchAllJobs = async() => {
    try {
        const response = await axios.get('http://localhost:3000/offers')
        return response.data
    } catch (error) {
        throw new Error(error)
    }
}

