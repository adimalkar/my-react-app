import { useEffect, useState } from 'react';

function DataComponent() { 
    const [data, setData] = useState(null); 
    const [loading, setLoading] = useState(true); 

    useEffect(() => { 
        // Make request to your Python backend [cite: 476]
        // IMPORTANT: Change this URL to your deployed API's URL
        fetch('https://api.credisync.online/api/data')
            .then(res => res.json()) 
            .then(data => { 
                setData(data); 
                setLoading(false); 
            })
            .catch(err => { 
                console.error('Error fetching data:', err); 
                setLoading(false); 
            });
    }, []); 

    if (loading) return <p>Loading data from Python API...</p>; 

    return (
        <div>
            <h3>Data from /api/data:</h3>
            <pre style={{ background: '#eee', padding: '10px' }}>
                {JSON.stringify(data, null, 2)}
            </pre>
        </div>
    );
}

export default DataComponent; 