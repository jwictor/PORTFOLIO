import styled from "styled-components";


export const Main = styled.main`
    border: none;
    height: 100vh;
    display: flex;
    background-color: #591C21;

    @media (max-width: 500px) {
        flex-direction: column;
    }
`;

export const Container = styled.section`

    background-color: #591C21;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
        font-size: 1.1rem;
    }
    div{
        width: 50%;
        color: white;
        display: flex;
        flex-direction: column;
        h2{
        //border: solid 3px red;
        width: 100%;
        height: 10vh;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 2rem;
    }
    }

    span{
        h2{
            font-size: 2rem;
            color: white;
        }
        margin-top: 100px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: none;
        width: 80vw;
        height: 30vh;

        div{
            flex-direction: row;
            margin-top: 100px;
            
        }

        img{
            height: 10vh;
            width: 7vw;
        }
    }

    
`;
