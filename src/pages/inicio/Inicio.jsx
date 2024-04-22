import Header from "../../components/Header/Header";
import photo from "../../assets/photo.png"
import * as S from "./styled"

export default function Inicio() {
  return (
    <S.Main>
        <Header />
        <S.Container>
        <S.BoxInicio>
        <div>
        <h1>Olá Meu nome e João Wictor sou dev front-end</h1>
        <p>Não é a linguagem de programação que define o programador, mas sim sua lógica.</p>
        </div>
        <img src={photo} alt="" />
        </S.BoxInicio>
        </S.Container>
    </S.Main>
  )
}
