import { Link } from "react-router-dom";
import * as S from "./styled"
import linkedin from "../../assets/linke.png"
import git from "../../assets/git.png"
import insta from "../../assets/instagram.png"
import photo from "../../assets/photo.png"

export default function Header() {
  return (

   <S.Header>
        <S.BoxLogo>
        <img src={photo} alt="Foto" />   
        <S.Title>João Wictor</S.Title>
        <S.Text>Front-end Developer</S.Text>
        </S.BoxLogo>
    <S.BoxMenu>
        <ul>
            <S.Lista><Link to="/">Inicio</Link></S.Lista>
            <S.Lista><Link to="/sobre">Sobre</Link></S.Lista>
            <S.Lista><Link to="/projeto">Projetos</Link></S.Lista>
        </ul>
    </S.BoxMenu>

        <S.BoxIcon>
            <a href=""><img src={linkedin} alt="" /></a>
            <a href=""><img src={insta} alt="" /></a>
            <a href=""><img src={git} alt="" /></a>
        </S.BoxIcon>
   </S.Header>
  )
}
