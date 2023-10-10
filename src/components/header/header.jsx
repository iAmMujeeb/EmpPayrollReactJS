import React from 'react';
import './header.css';
import Logo from '../../assets/images/logo.png';

const header = () => { 
    return (
        <>
            <header class="header content-header">
                <div class="logo-content">
                    <img src={Logo} alt="Logo Image" />
                    <div>
                        <span class="emp-text content-header">EMPLOYEE</span>
                        <span class="emp-text emp-payroll">PAYROLL</span>
                    </div>
                </div>
            </header>
        </>
    )
}

export default header;