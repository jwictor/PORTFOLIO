import Header from "../../components/Header/Header"
import Card from "./Card"
// import React, { Component } from 'react';
// import carro from "../../assets/carro.jpg"
 import protheus from "../../assets/Protheus.png"
 import mec from "../../assets/mec.png"
 import self from "../../assets/self.png"
 import ritmo from "../../assets/ritmo.png"
 import prime from "../../assets/prime.png"

// import git from "../../assets/git.png"
import * as S from "./styled"
import Carousel from 'react-elastic-carousel';


export default function Projetos() {

  
  return (

    <S.Main>
        <Header />
        <S.Container>
        <S.Title>
        <h2>Projetos</h2>
        </S.Title>   
        <S.Cards>
        <Carousel enableAutoPlay autoPlaySpeed={4000}>
            <Card imagem={mec} texto={'Projeto do Mec Feito em React utilizando UseEffect'} link={''}/>
            <Card imagem={self} texto={'Projeto de uma loja de produtos naturais Selfcare'}/>
            <Card imagem={ritmo} texto={'Projeto para um site de musica - Ritmo na Batida'} link={''}/>
            <Card imagem={prime} texto={'Projeto do Prime Video'} link={'https://codesandbox.io/s/desafio-prime-video-g8jmrn?file=/css/style.css'}/>
            <Card imagem={protheus} texto={'Projeto Desenvolvido em react ultilizando API rest do ERP Protheus.'}/>     
        </Carousel>
        </S.Cards>
        </S.Container>
    </S.Main>
  )
// }
}