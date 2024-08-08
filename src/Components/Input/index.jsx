import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 5.6rem;
  display: flex;
  align-items: center;
  background-color: #262529;
  border-radius: 1rem;
  padding: 0.3rem;
  margin-bottom: 1rem;

  > input {
    background: transparent;
    border: none;
    outline: none;
    color: #f4ede8;
    font-size: 1.6rem;
    font-weight: normal;
    margin-left: 1rem;

    &::placeholder {
      font-family: ${(props) => props.fontFamily || '"Roboto Slab", serif'};
      font-weight: normal;
      color: #948f99;
    }
  }

  svg {
    color: #948f99;
    margin-left: 1rem;
  }
`;

const InputField = styled.input.attrs((props) => ({
  placeholder: props.placeholder,
  fontFamily: props.fontFamily,
}))`
  &::placeholder {
    font-family: ${(props) => props.fontFamily || '"Roboto Slab", serif'};
  }
`;

export function Input({ icon: Icon, fontFamily, ...rest }) {
  return (
    <Container fontFamily={fontFamily}>
      {Icon && <Icon size={20} />}
      <InputField {...rest} fontFamily={fontFamily} />
    </Container>
  );
}