import * as S from "./styled"
import git from "../../assets/git.png"
// eslint-disable-next-line react/prop-types
export default function Card({imagem, texto, link}) {
  return (
    <div>
      <S.Card>
      <img src={imagem} alt="" />
      <section>
      <p>{texto}</p>
      <a href={link}><button><img src={git} alt="" />Clique aqui</button></a>
      </section>
    </S.Card>
    </div>
  )
}
