'use client';

import Link from 'next/link';

import styled from 'styled-components';

const NavBar = styled.nav`
    width: 100%;
    padding: 1rem 2rem;
    background-color: #1a1a1a;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #333;
    font-family: monospace;
`;

const NavLink = styled(Link)`
    color: #00ffcc;
    text-decoration: none;
    margin-right: 1.5rem;
    font-weight: bold;
    font-size: 1.2rem;

    &:hover {
        text-decoration: underline;
    }
`;



export default function Nav() {




    return (
        <NavBar>
            <div>
                <NavLink href="/">Home</NavLink>
                <NavLink href="/History">Game History</NavLink>
                <NavLink href="/New_game">New Game</NavLink>

            </div>
        </NavBar>
    );
}