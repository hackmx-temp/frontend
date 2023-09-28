import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { BasicModalProps } from './types';
import { SingleGallery } from '../SingleGallery';
import { ClientText, ClientTitle, ModalBox, ModalContainer } from './styles';
import { Divider } from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '20px',
  p: 4,
};

const BasicModal: React.FC<BasicModalProps> = ({
  isOpen,
  onClose,
  client,
}) => {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={onClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={isOpen}>
          <ModalBox>
            <ClientTitle>
              {client?.client || 'Not Found'}
            </ClientTitle>
            <Divider sx={{ marginTop: "5px", marginBottom: "20px" }} />
            <ModalContainer>
              <ClientText width={client.images ? 'auto' : '100%'}>
                {client?.projectDescription || 'Not Found'}
              </ClientText>
              {client.images && (
                <div>
                  <SingleGallery images={client.images} width='250px' height='250px' />
                </div>
              )}
            </ModalContainer>
          </ModalBox>
        </Fade>
      </Modal>
    </div>
  );
}

export default BasicModal;
