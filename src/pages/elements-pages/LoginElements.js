import styled from 'styled-components'
import {HiOutlineXCircle} from 'react-icons/hi'



export const Modal = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: rgba(0,0,0, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
  z-index: 100;
  overflow-wrap:hidden;
  
`;


export const ModalSection = styled.div`
  width: 600px;
  height: 350px;
  background-color: #ffff;
  border-radius: 15px;
  padding:20px;
  
  @media screen and (max-width: 560px) {
    height: 400px;
    width: 320px;
    min-width: 320px;
  }
`;

export const ModalWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;


export const DropCheckIcon = styled(HiOutlineXCircle)`
  height: 30px;
  width: 40px;
  color: 'gray';
  margin-left: 90%;
  margin-top: -8%;
 

  cursor:pointer;

  @media screen and (max-width: 560px) {
    height: 20px;
    width: 20px;
  }
`;

export const ModalTop = styled.div`
  flex: 0.2;
  width: 100%;
  padding: 0 30px;
  display: flex;
  flex-direction: row;
  
 
`;

export const ModalTitle = styled.h2`
  font-size: 24px;

 
  cursor: default;
  
  @media screen and (max-width: 560px) {
    font-size: 18px;
  }
`;

export const ModalBottom = styled.div`
 
`;

export const ModalSubtitleDiv = styled.div`
  
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
width: 550px;
 padding: 0.9em;
  margin: 0.5em;
  color: ${props => props.inputColor || "black"};
  border: 2px solid lightgray;

  border-radius: 3px;
  @media screen and (max-width: 560px) {
    font-size: 12px;
    width: 250px;
  }

`;


export const ModalButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  text-decoration: none;
  font-size: 20px;
  width: 550px;
  padding: 5px 0;
  
  color: #fff;
  font-weight: bold;
  background-color: red;
  border: 2px solid lightgray;
  transition: all 0.2s ease-in-out;
  border-radius: 5px;

  :hover {
    background-color: red;
  }

  @media screen and (max-width: 560px) {
    font-size: 15px;
    width: 250px;
  }
`;
