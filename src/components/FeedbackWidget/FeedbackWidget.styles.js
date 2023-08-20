import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const FeedbackButton = styled.button`
  padding: 8px 15px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${props =>
    props.type === 'good' ? '#4caf50' : props.type === 'bad' ? '#f44336' : '#2196f3'};
  &:hover {
    background-color: ${props =>
      props.type === 'good' ? '#45a049' : props.type === 'bad' ? '#e53935' : '#1976d2'};
  }
`;
