import styled from 'styled-components';

export const Button = styled.button`
    outline: none;
    border: 1px solid black;
    cursor: pointer;
    padding: 10px 20px;
    background: rgb(71, 71, 255);
    box-shadow: 2px 2px white, 4px 4px rgb(71, 71, 255);
    margin: 15px;
    padding: 20px 30px;
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
export const Input = styled.input`
width: 300px;
    height: 25px;
    padding: 10px;
    font-size: 28px;
    box-shadow: 2px 2px white, 4px 4px rgb(71, 71, 255);
    &:hover{
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
    &:focus{
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }

`;
export const Text = styled.p`
font-size: 36px;
    font-weight: 900;
`;
export const TodoForm = styled.form`
border: 1px solid black;
width: 500px;
padding: 50px;
margin: 0 auto;
`;
