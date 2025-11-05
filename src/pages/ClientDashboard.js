import React from 'react';

// This component receives the client's ID from the subdomain [cite: 465]
function ClientDashboard({ clientId }) {
    return (
        <div style={{ padding: '20px', background: '#c8e6c9' }}>
            <h1>Client Dashboard ({clientId}.yourdomain.com)</h1>
            <p>Showing data for <strong>{clientId}</strong>.</p>
        </div>
    );
}
export default ClientDashboard;