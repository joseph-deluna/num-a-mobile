const defaultHeaders = {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzU2ZDMzZGRiNTc1MGIwZGE2ZDc5YTc3ZmQxN2QzZiIsInN1YiI6IjVkY2MwMjExNzlhMWMzMDAxMzQ0OThjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ecELYc1Wa92w3ecAIpbOmJtTLVjIRumnwx4NQqAIvQI',
    'Content-Type': 'application/json',
  }
  
  function generateHeaders(headers = {}) {
    return {
      ...defaultHeaders,
      ...headers,
    }
  } 
  
  function generateUrl(path) {
    return `https://api.themoviedb.org/3/${path}`
  }
  
  export function get(url, config = {}) {
    const headers = generateHeaders(config.headers)
    const apiUrl = generateUrl(url)
    
    return fetch(apiUrl, {
      method: 'GET',
      headers,
    }).then((res) => {
      // Whatever you want here
      return res.json();
    });
  }

  export function post(url, body, config = {}) {
    let headers = generateHeaders(config.headers)
    const apiUrl = generateUrl(url)
    headers = {
        ...headers,
        'Content-Type': 'application/json;charset=utf-8'
    }
    
    return fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(body),
      headers,
    }).then((res) => {
      // Whatever you want here
      return res.json();
    });

    axios.post('/list', body)
  }