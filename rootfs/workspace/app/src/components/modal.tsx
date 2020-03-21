import styled from 'styled-components'
import { Fixed } from './position'


const Modal = styled(Fixed).attrs({
  top: '50%',
  left: '50%',
  overflow: 'auto',
  transform: 'translate(-50%, -50%)',
  maxWidth: '100vw',
  maxHeight: '100vh',
})``;
Modal.displayName = 'Modal';

export default Modal
