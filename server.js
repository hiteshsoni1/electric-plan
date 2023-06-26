const express = require('express');
const app = express();
const PORT = 3001;

console.lo
// Step 1: Generate Token
app.get('/generate-token', (req, res) => {

  import('node-fetch')
  .then((module) => {
    const fetch = module.default;
    fetch('https://devcore02.cimet.io/v1/generate-token', {
      method: 'POST',
      headers: {
        'Api-key': '4NKQ3-815C2-8T5Q2-16318-55301'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log('data', data.data.token)
      const authToken = data.token; // Extract the generated token from the response

      // Step 2: Access Products using the generated token
      fetch('https://devcore02.cimet.io/v1/plan-list', {
        method: 'POST',
        headers: {
          'Api-key': '4NKQ3-815C2-8T5Q2-16318-55301',
          'Content-Type':'application/json',
          'Auth-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcGlfa2V5IjoiNE5LUTMtODE1QzItOFQ1UTItMTYzMTgtNTUzMDEiLCJzdWIiOjQzOCwiaXNzIjoiaHR0cHM6Ly9kZXZjb3JlMDIuY2ltZXQuaW8vdjEvZ2VuZXJhdGUtdG9rZW4iLCJpYXQiOjE2ODc1NDU2ODMsImV4cCI6MTY4NzU1NjQ4MywibmJmIjoxNjg3NTQ1NjgzLCJqdGkiOiJpM1JkeEpvR0NDTW9sR3JFIn0.Ub3FZ47UEa2wwhSq75bbOht_98zfm3BZ6WScIsta06w'
        },
        body: JSON.stringify({
          session_id: 'eyJpdiI6IkVNUkZ1N0hlSHhHSnJ3Vjl4aUlxc0E9PSIsInZhbHVlIjoieFlxa1wvVDYxQWl5U2pxMDFcL0R6ZVVvdEN6Mkk0R29TRDN3ZnN0U3VGcER0cEFMa2NVb0xNcDJudjlRTHRUbGJkIiwibWFjIjoiMTE0MmU0MGE5YmJhMzY4Nzc4MDExNmZkNTI1MjZhMGE3OTQyMDZmOTc1MTVmZDM1Mzc3ZmJmNjhmMzllOGYxYSJ9'
        })
      })
      .then(response => response.json())
      .then(products => {
        // Process the products response
        res.json(products);
      })
      .then(res => {console.log(res); return res})
      .catch(error => {
        // Handle any errors
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
      });
    })
    .catch(error => {
      // Handle any errors
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});