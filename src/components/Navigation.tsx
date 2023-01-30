import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { menudb } from '@/data/menudb'

interface NavMenu {}

export default function Navigation() {
  const [mounted, setMounted] = useState(false)
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  useEffect(() => {
    document.body.style.overflowY = click ? 'hidden' : 'auto'
  }, [click])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <NavbarStyles>
      <Link
        href="/"
        className="logo"
        aria-label="back to home"
        onClick={closeMobileMenu}
      >
        Sao Paulo Institute of Art
      </Link>

      <Nav onClick={handleClick} click={click}>
        <ul>
          {menudb.map(({ id, label, href }) => (
            <li key={id}>
              <Link href={href} aria-label={label}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </Nav>
      <MobileMenu onClick={handleClick}>
        {click ? <MobileMenuClose /> : <MobileMenuOpen />}
      </MobileMenu>
    </NavbarStyles>
  )
}

const NavbarStyles = styled.header`
  height: 96px;
  /* padding: 2rem 0 3rem 0; */
  padding: 3rem 0;
  min-width: 320px;
  display: flex;
  justify-content: space-between;
  /* align-items: baseline; */
  align-items: center;
  z-index: 100;
  transition: height 0.2s ease;
  /* transition: all 0.6s ease; */
  backface-visibility: hidden;

  max-width: 1280px;
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
  }

  a.logo {
    font-size: 1.7rem;
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.025em;
    color: black;
    text-decoration: none;
    border-bottom: 1px solid rgba(35, 31, 32, 0);
    cursor: pointer;
  }
`

const Nav = styled.nav<{ click: boolean }>`
  display: flex;
  justify-content: flex-end;
  flex: 1;

  @media only screen and (max-width: 768px) {
    position: fixed;
    top: 96px;
    left: 0;
    width: 100%;
    /* width: ${({ click }) => (click ? '100%' : '-100%')}; */
    display: flex;
    visibility: ${({ click }) => (click ? 'visible' : 'hidden')};
    opacity: ${({ click }) => (click ? '1' : '0')};
    padding-bottom: 24px;
    flex-direction: column;
    background: white;
    z-index: 1;
    backface-visibility: hidden;
    transition: all 0.2s ease-in-out;

    &::after {
      content: '';
      visibility: ${({ click }) => (click ? 'visible' : 'hidden')};
      position: absolute;
      top: 100%;
      right: 0;
      left: 0;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(8px);
      pointer-events: none;
      transition: all 0.2s ease-in-out;
    }
  }

  ul {
    display: flex;
    align-items: center;
    list-style: none;

    @media only screen and (max-width: 768px) {
      flex-direction: column;
    }

    li {
      margin-left: 24px;
      font-size: inherit;
      font-weight: 500;
      white-space: nowrap;

      a {
        font-size: 0.8rem;
        font-weight: normal;
        line-height: 1.5;
        text-transform: uppercase;
        color: rgba(35, 31, 32, 0.85);
        text-decoration: none;
        transition: all 0.2s ease-in-out;
        border-bottom: 1px solid rgba(35, 31, 32, 0);
        cursor: pointer;

        &:hover {
          border-bottom: 1px solid rgba(35, 31, 32, 0.85);
        }
      }

      @media only screen and (max-width: 768px) {
        width: calc(100% - 32px);
        margin: 0;
        font-size: 18px;

        &.show-mobile {
          display: block;
        }

        &:not(:first-of-type) a:not(.button) {
          border-top: 2px solid #d6d6d6;
        }

        a {
          width: 100%;
          display: block;
          padding: 24px 0 24px 12px;
        }
      }
    }
  }
`

const MobileMenu = styled.div`
  svg {
    margin: 0 4px;
    stroke: black;
    cursor: pointer;
  }

  @media only screen and (min-width: 768px) {
    svg {
      display: none;
    }
  }
`

const MobileMenuOpen = () => {
  return (
    <svg
      id="headerMobileMenuOpen"
      className="menu"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 18h7m-7-6h14M5 6h14"></path>
    </svg>
  )
}

const MobileMenuClose = () => {
  return (
    <svg
      id="headerMobileMenuClose"
      className="menu"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
    >
      <path
        d="M17 7L7 17m10 0L7 7"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  )
}
