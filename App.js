import React from 'react';
import Routes from './src/navigation/Routes'
import { AuthProvider } from './src/services/AuthProvider';

const App = () => {

    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    )
}

export default App;