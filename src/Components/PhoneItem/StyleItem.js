import styled from 'styled-components';
import transition from "styled-transition-group";

export const List = styled.ul`
list-style: none;
margin: 30px auto;
`;
export const Item = transition.li.attrs({
    unmountOnExit: true,
    mountOnEntry: true,
    timeout: 800,
})`
display: flex;
    padding: 3px 60px;
    border: 1px solid;
    width: 700px;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 15px;
    &:hover{
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
    &:focus{
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
    &:enter{
        animation: task 800ms ease-in alternate-reverse;
    }
      &:enter-active {
        animation: task 800ms ease-in alternate-reverse;
      }
      &:exit-active {
        animation-duration: 800ms;
        animation-name: hinge;
    }
    @keyframes task {
        0% {
          opacity: 0;
          transform: translateX(0);
        }
        30% {
          opacity: 0.7;
          transform: translateX(30px);
        }
        100% {
          opacity: 0;
          transform: translateX(-200px);
        }
      }
      @keyframes hinge {
        0% {
          transform-origin: top left;
          animation-timing-function: ease-in-out;
        }
        20%,
        60% {
          transform: rotate3d(0, 0, 1, 80deg);
          transform-origin: top left;
          animation-timing-function: ease-in-out;
        }
        40%,
        80% {
          transform: rotate3d(0, 0, 1, 60deg);
          transform-origin: top left;
          animation-timing-function: ease-in-out;
          opacity: 1;
        }
        to {
          transform: translate3d(0, 700px, 0);
          opacity: 0;
        }
      }
`;
export const Button = styled.button`
    outline: none;
    border: 1px solid black;
    cursor: pointer;
    padding: 20px 50px;
    font-size: 20px;
    font-weight: 800;
    background: rgb(71, 71, 255);
    box-shadow: 2px 2px white, 4px 4px rgb(71, 71, 255);
    margin: 5px;
    cursor: pointer;
    border-radius: 10px;
    color: white;
    transition: .2s linear;
    &:hover{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
    &:focus{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
`;
export const Text = styled.p`
font-size: 48px;
font-weight: 900;
margin: 0;
padding-right: 30px;
`;