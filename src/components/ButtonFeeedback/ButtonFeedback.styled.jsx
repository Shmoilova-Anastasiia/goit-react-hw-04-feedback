import styled from '@emotion/styled';

export const Button = styled.button`
margin: 20px;
font-size: 30px;
padding: 10px;
width: 200px;
color: #041b21;
border-radius: 5px;
border: 4mm ridge rgba(72, 124, 65, 0.4);
background: radial-gradient(circle, rgba(237, 226, 237, 1) 0%, rgba(86, 252, 70, 1) 100%);

:hover,
:focus {
    background: radial-gradient(circle, rgba(237,226,237,1) 0%, rgba(212,222,50,1) 100%);
    border: 4mm ridge rgba(212,222,50,1);
    transition: all 0.2s;
}
`