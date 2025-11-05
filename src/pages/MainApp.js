import React from 'react';
import DataComponent from '../components/DataComponent';

function MainApp() {
    return (
        <div style={{ padding: '20px', background: '#e0f7fa' }}>
            <h1>Welcome to the Main Site (yourdomain.com)</h1>
            <p>This is the page for the root domain.</p>
            <DataComponent />
        </div>
    );
}
export default MainApp;