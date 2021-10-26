import React from 'react';
import {BsMoonStarsFill} from 'react-icons/bs';
import {BsMoonStars} from 'react-icons/bs';

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
                    <>
                      <BsMoonStarsFill />
                      <span>Light Mode</span>
                    </>
                    ) : (
                    <>
                      <BsMoonStars />
                      <span>Dark Mode</span>
                    </>
                    )
                }
                </button>
            </div>
        </Wrapper>
    )
}

export default Header
