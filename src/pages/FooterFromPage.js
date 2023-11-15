import React from 'react'
import logoNapa from "./../assets/icons/logoNapa.png"

function FooterFromPage() {
    return (
        <div className='w-100 d-flex justify-content-end' style={{ backgroundColor: '#174AA4', height: 170, padding: 30 }}>
            <div>
                <div style={{ padding: 10 }}>
                    <img src="../../assets/icons/logo.svg" alt="logo.svg" width={60} />
                </div>
                <div>
                    <img src={logoNapa} alt="logo.svg" width={120} />
                </div>
            </div>
        </div>
    )
}

export default FooterFromPage