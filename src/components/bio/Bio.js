import React from 'react';
import './Bio.css';
import { par1, par2, par3, par4, par5, par6, par7, par8, par9, par10, par11 } from './bio.json';

function Bio(){
    return(
        <div>
            <div>
                <h1 className="bio-main-title">Bio</h1>
            </div>
            <div className="bio-card-container">
                <p>{par1}</p>
                <p>{par2}</p>
                <p>{par3}</p>
                <p>{par4}</p>
                <p>{par5}</p>
                <p>{par6}</p>
                <p>{par7}</p>
                <p>{par8}</p>
                <p>{par9}</p>
                <p>{par10}</p>
                <p>{par11}</p>
            </div>
        </div>
    )
}

export default Bio;