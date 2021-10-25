import React from 'react';

import moonDark from '../../assets/dark.svg'
import moonLight from '../../assets/light.svg'

import {Wrapper} from './Header.styles';


type props = {
    themeToggler: () => void;
    isTheme: boolean;
}

function Header({isTheme, themeToggler}:props): JSX.Element {

    return (
        <Wrapper>
            <div>
                <h2>Presupuesto</h2>
                <button onClick={() => themeToggler()}>
                { isTheme? (
                    <img alt="themeLogo" src={moonDark} /> 
                    ) : (
                    <img alt="themeLogo" src={moonLight} />)
                }
                    Dark Mode
                </button>
            </div>
        </Wrapper>
    )
}

export default Header
