import { Container } from './style'

export function ButtonText({ title, icon: Icon, isActive = false, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
     
     <button
      $isactive={isActive.toString()}
      {...rest}
     >
      {title}
     </button>
    </Container>
  )
}