import React from 'react';
import '../App.css'
import { Button } from './Button';
import './HeroComponent.css';



function HeroComponent() {
    return (
        <div className="Hero-Component">
            <h1>Adventure Awaits</h1>
            <p>What are you waiting for</p>
            <div className='hero-btn'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Get Started
                </Button>    
            </div>
        </div>
    )
}

export default HeroComponent
