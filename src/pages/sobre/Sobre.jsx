
import Header from "../../components/Header/Header"
import css from "../../assets/css.png"
 import html from "../../assets/Html.png"
 import java from "../../assets/javascript.png"
 import styled from "../../assets/styled.png"
import react from "../../assets/react.png"
import * as S from "./styled"

export default function Sobre() {
  return (
    <S.Main>
        <Header />
        <S.Container>
          <div>
          <h2>Sobre mim</h2>
          <p>Meu nome e João Wictor de Oliveira Carvalho, tenho 24 anos, sou da Cidade de Timbaúba - PE. Trabalho como Analista de Suporte na empresa Rosa Master,
            atuo como Dev Front-end, desenvolvendo projetos interno na empresa para aprimorar mais ainda os meus conhecimento e adiquir experencia na area da programação como Front-End.
          </p>
          </div>
          <span>
          <h2>Habilidades</h2>
          <div>
          <img src={html} alt="" />
          <img src={css} alt="" />
          <img src={java} alt="" />
          <img src={react} alt="" />
          <img src={styled} alt="" />
          </div>
          </span>
        </S.Container>
    </S.Main>
  )
}
