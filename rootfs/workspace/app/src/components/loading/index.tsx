import React from 'react';
import ReactDom from 'react-dom';
import { Fixed } from '../position';
import Modal from '../modal';
import ReactLoading from 'react-loading';

const Loading = (props: {loading: boolean}) => {
  const {loading} = props;
  if ( !loading ) return null;

  const parent = document.getElementsByTagName('body')[0];
  if ( !parent ) return null;

  return ReactDom.createPortal(
    (
      <div>
        <Fixed top={0} right={0} bottom={0} left={0} zIndex={2001} bg='rgba(64, 64, 64, 0.5)' />
        <Modal bg='transparent' zIndex={2001}>
          <ReactLoading type="bars" color="#444" />
        </Modal>
      </div>
    ),
    parent,
  );
};

export default Loading;
