import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { BasicModalProps } from './types';
import { ClientSocialMedia, ClientSocialMediaWrapper, ClientText, ClientTitle, ModalBox, ModalContainer } from './styles';
import { Divider, IconButton } from '@mui/material';
import { Facebook } from '@mui/icons-material';

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
                <p>
                  Conoce sobre el reto: <a href={client?.challenge} target="_blank">{client?.challenge}</a>
                </p>
              </ClientText>
            </ModalContainer>
            <ClientSocialMediaWrapper>
              {
                client.socialMedias?.map((socialMedia) => (
                  <IconButton
                    key={socialMedia.icon}
                    sx={{ marginRight: "10px" }}
                    onClick={() => window.open(socialMedia.url, "_blank")}
                  >
                    <img
                      src={socialMedia.icon}
                      alt={socialMedia.username}
                      width="30px"
                      height="30px"
                    />
                  </IconButton>
                ))
              }
            </ClientSocialMediaWrapper>
          </ModalBox>
        </Fade>
      </Modal>
    </div>
  );
}

export default BasicModal;
