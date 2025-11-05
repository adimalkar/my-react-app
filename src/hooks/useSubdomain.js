import { useState, useEffect } from 'react';

export const useSubdomain = () => { 
    const [subdomain, setSubdomain] = useState(null); 

    useEffect(() => { 
        try {
            const hostname = window.location.hostname; 
            const parts = hostname.split('.'); 

            // For client1.yourdomain.com -> 'client1' [cite: 432]
            if (parts.length > 2) { 
                setSubdomain(parts[0]); 
            } else if (hostname.includes('localhost')) { 
                // Local development [cite: 437]
                setSubdomain('dev'); // You can change 'dev' to test other subdomains
            } else {
                // Root domain [cite: 441]
                setSubdomain(null); 
            }
        } catch (err) { 
            console.error('Error extracting subdomain:', err); 
        }
    }, []); 

    return subdomain; 
};