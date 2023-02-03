import Link from 'next/link'
import styled from 'styled-components'

export default function CardInfo() {
  return (
    <StyledInfo>
      <h3>
        Stay Informed:{' '}
        <span>
          <Link href="/" aria-label="subscribe">
            Sign up
          </Link>{' '}
          to receive bimonthly emails from SPIArt.
        </span>
      </h3>
    </StyledInfo>
  )
}

const StyledInfo = styled.div`
  background: #e9e8e8;
  padding: 1rem;
  margin: 2rem 0 1.5rem 0;

  h3 {
    font-size: 1.03rem;
    font-weight: 800;
    line-height: 1.5;
    letter-spacing: -0.01em;

    span {
      font-weight: 300;
      color: rgba(35, 31, 32, 0.85);

      a {
        text-decoration: none;
        color: inherit;
        border-bottom: 1px solid rgba(35, 31, 32, 0.85);
        transition: all 0.2s ease-in-out;

        &:hover {
          color: black;
          border-bottom: 1px solid black;
        }
      }
    }
  }
`
