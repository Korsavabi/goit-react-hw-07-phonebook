import transition from "styled-transition-group"
import styled from 'styled-components';

export const ERROR = styled.h1`
text-align: center;
margin: 50px 0;
font-size: 48px;
`;
export const DIV = styled.div`
text-align: center;
`;
export const Div = transition.div.attrs({
	unmountOnExit: true,
	mountOnEntry: true,
	timeout: 250,
})`
position: absolute;
width: 300px;
top: 10px;
left: 10px;
padding: 10px 20px;
background: rgb(71, 71, 255);
box-shadow: 2px 2px white, 4px 4px rgb(71, 71, 255);
border-radius: 8px;
text-align: center;
color: white;
  &:enter { opacity: 0; 
    transform: translateX(-100%); }
  &:enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:exit { opacity: 1;
  transform: translateX(0); }
  &:exit-active {
    opacity: 0;
    transform: translateX(-100%);
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`

export const Title = transition.h1.attrs({
	// unmountOnExit: true,
	// // mountOnEntry: true,
	timeout: 500,
})`
font-size: 38px;
text-align: center;
&:appear{
    animation: focus-in-contract-bck 1000ms cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
  &:appearActive {
    animation: focus-in-contract-bck 1000ms cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
  @keyframes focus-in-contract-bck {
    0% {
      letter-spacing: 1em;
              transform: translateZ(300px);
              filter: blur(12px);
      opacity: 0;
    }
    100% {
              transform: translateZ(12px);
              filter: blur(0);
      opacity: 1;
    }
  }
`