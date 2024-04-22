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
     display: flex;
    justify-content: center;
    flex-direction: column;
    border: none;
    width: 100%;
    height: 80%;

    section{ 
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 80%;
        @media (max-width: 500px) {
        flex-wrap: wrap;
    }
    } 

     div{
        border: none;
        width: 80vw;
        height: 80vh;
        border-radius: 10px;
        margin: 1rem;
        h3{
            text-align: center;
        }
        img{
            height: 24vh;
            width: 20vw;
           
        }
    } 

`;

export const Title = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #591C21;
    border: none;
    width: 100%;
    height: 20%;
    font-size: 2rem; 

    `

export const Card = styled.span`
border: none;
border-radius: 10px;
height: 35vh;
display: flex;
flex-direction: column;
align-items: center;

text-align: center;

 img {
    border: none;
    height: 20vh;
 }

 button{
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 20px;
        height: 20px;
    }
    border: none;
    width: 10vw;
    height: 5vh;
    background-color: #591C21;
    border-radius: 10px;
    font-size: 1.rem;
 }

section{
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 0 0 10px 10px;
    height: 15vh;
    width: 20vw;
    background-color: white;
    font-size: 1.2rem;
    font-family: "Roboto", sans-serif;   
}

@media (max-width: 500px) {
border: none;
width: 40vw;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;

text-align: center;

 img {
    border: none;
    height: 25vh;
    width: 30vw;
 }

 button{
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 20px;
        height: 20px;
    }
    border: none;
    width: 20vw;
    height: 5vh;
    background-color: #591C21;
    border-radius: 10px;
    font-size: 1.rem;
 }

section{
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 0 0 10px 10px;
    height: 30vh;
    width: 28vw;
    background-color: white;
    font-size: 1.2rem;
    font-family: "Roboto", sans-serif;   
} 
} 

`;

export const Cards = styled.section`
    border:  none;
    display: flex; 
    /* justify-content: space-around; */
    /* align-items: center; */
    background-color: #591C21;
    height: 90vh;
   

    .rec-pagination{
        display: none;
    }

    

    @media (max-width: 500px) {
        flex-wrap: wrap;
    }
`;