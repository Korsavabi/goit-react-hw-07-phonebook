import transition from "styled-transition-group";


export const Input = transition.input.attrs({
    unmountOnExit: true,
    mountOnEntry: true,
    timeout: 800,
})`
    width: 300px;
    height: 25px;
    padding: 10px;
    font-size: 28px;
    box-shadow: 2px 2px white, 4px 4px rgb(71, 71, 255);
    margin: 0 auto;
    display: block;
    &:hover{
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
    &:focus{
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
    &:appear{
        animation: task 800ms ease-in alternate-reverse;
    }
      &:appear-active {
        animation: task 800ms ease-in alternate-reverse;
      }
      &:appear-done {
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