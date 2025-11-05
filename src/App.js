import { useSubdomain } from './hooks/useSubdomain';
import MainApp from './pages/MainApp';
import AdminPanel from './pages/AdminPanel';
import ClientDashboard from './pages/ClientDashboard';
import './App.css';

function App() {
    const subdomain = useSubdomain();

    // Route based on subdomain
    if (subdomain === 'admin') {
        return <AdminPanel />;
    } else if (subdomain === 'app') {
        return <ClientDashboard clientId="app" />;
    } else if (subdomain && subdomain !== 'www' && subdomain !== 'dev') {
        // Dynamic client subdomain (e.g., client1.yourdomain.com)
        return <ClientDashboard clientId={subdomain} />;
    }
    
    // Root domain shows main site (or 'dev' for localhost)
    return <MainApp />;
}

export default App;