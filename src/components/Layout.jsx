import React from 'react';
import Menu from './Menu';

const Layout = ({children}) => (

    <div className="App">
        <Menu />
        <main className="Main">{children}</main>
        
    </div>
    

)
export default Layout
