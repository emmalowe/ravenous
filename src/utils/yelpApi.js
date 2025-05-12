const apiKey = '' // Enter your Yelp API key here

export async function getBusinesses(term, location, sortBy) {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            authorization: `Bearer ${apiKey}`
        }
    };
    
    // Using CORS Anywhere to bypass CORS issues
    // Note: This is not recommended for production use
    // Go to https://cors-anywhere.herokuapp.com/corsdemo to request temporary access
    const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}&limit=20`;

    try {
        let response = await fetch(url, options);
        if (response.ok) {
            let data = await response.json();
            return data.businesses;
        }
    } catch (error) {
        console.log('Error fetching data:', error);
    }
}