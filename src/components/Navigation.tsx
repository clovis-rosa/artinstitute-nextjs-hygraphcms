import React, { useEffect, useState } from 'react'
import IonIcon from '@reacticons/ionicons'
import Link from 'next/link'
import styled from 'styled-components'
import { menudb } from '@/data/menudb'

interface NavMenu {}

export default function Navigation() {
  const [mounted, setMounted] = useState<boolean>(false)
  const [click, setClick] = useState<boolean>(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  useEffect(() => {
    document.body.style.overflowY = click == true ? 'hidden' : 'auto'
  }, [click])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <StyledNavigation>
      <Branding>
        <Link href="/" onClick={closeMobileMenu} aria-label="back to home">
          Sao Paulo Institute of Art
        </Link>
      </Branding>

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
        {click === true ? (
          <IonIcon name="close-outline" />
        ) : (
          <IonIcon name="menu-outline" />
        )}
      </MobileMenu>
    </StyledNavigation>
  )
}

const StyledNavigation = styled.header`
  max-width: 84rem;
  margin: 0 auto;
  padding: 3rem 2rem;

  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: height 0.2s ease;
  backface-visibility: hidden;

  @media only screen and (max-width: 768px) {
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
  }
`

const Branding = styled.div`
  a {
    font-size: 1.7rem;
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.025em;
    color: black;
    text-decoration: none;
    border-bottom: 1px solid rgba(35, 31, 32, 0);
    cursor: pointer;

    @media only screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
`

const Nav = styled.nav<{ click: boolean }>`
  display: flex;
  justify-content: flex-end;
  flex: 1;

  @media only screen and (max-width: 768px) {
    position: fixed;
    top: 6rem;
    left: 0;
    z-index: 10;
    width: 100%;
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
      transition: all 0.2s ease-in-out;
    }
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    list-style: none;

    @media only screen and (max-width: 768px) {
      flex-direction: column;
      gap: 0;
    }

    li {
      @media only screen and (max-width: 768px) {
        width: calc(100% - 2rem);

        &:not(:first-of-type) {
          border-top: 2px solid #d6d6d6;
        }
      }

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

        @media only screen and (max-width: 768px) {
          width: 100%;
          display: block;
          padding: 1.5rem 0;

          &:hover {
            border-bottom: 1px solid transparent;
          }
        }
      }
    }
  }
`

const MobileMenu = styled.div`
  span {
    display: inline-flex !important;
    align-items: center !important;
    height: 2.5rem !important;
    width: 2.5rem !important;

    svg {
      margin: 0.25rem;
      stroke: black;
      cursor: pointer;
    }
  }

  @media only screen and (min-width: 768px) {
    display: none !important;
  }
`
