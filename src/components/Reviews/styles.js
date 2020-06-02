import styled from 'styled-components'

export const Section = styled.section`
  text-align: center;
  & h1 {
    letter-spacing: -2px;
    font-size: 2rem;
    color: ${({ theme }) => theme.darkBlue};
    margin-bottom: 60px;
  }
  .carousel-dots {
    display: block;
    width: 100%;
    padding: 0;
    margin-top: 1em;
    list-style: none;
    text-align: center;
  }

  .carousel-dots li {
    position: relative;

    display: inline-block;

    width: 20px;
    height: 20px;
    margin: 0 5px;
    padding: 0;

    cursor: pointer;
  }

  .carousel-dots li button {
    font-size: 0;
    line-height: 0;

    display: block;

    width: 20px;
    height: 20px;
    padding: 5px;

    cursor: pointer;

    color: transparent;
    border: 0;
    outline: none;
    background: transparent;
  }

  .carousel-dots li button:hover,
  .carousel-dots li button:focus {
    outline: none;
  }

  .carousel-dots li button:hover:before,
  .carousel-dots li button:focus:before {
    opacity: 1;
  }

  .carousel-dots li button:before {
    font-family: 'slick';
    font-size: 40px;
    line-height: 20px;

    position: absolute;
    top: 0;
    left: 0;

    width: 20px;
    height: 20px;

    content: '•';
    text-align: center;

    opacity: .25;
    color: black;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .carousel-dots li.carousel-dots-active button:before {
    opacity: .75;
    color: ${({ theme }) => theme.brightRed};
  }
`

export const Div = styled.div`
  margin: 40px 0;
`
