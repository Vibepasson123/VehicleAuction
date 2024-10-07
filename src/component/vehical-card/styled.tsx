import styled from 'styled-components/native';
export const VehicleTitleHeaderContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 100%;
  height: 30px;
  padding-left:10px;
`;

export const TitleText = styled.Text`
  color: gray;
  font-size: 14px;
  padding-left:10px;

`;
export const CardFooter = styled.View`
  position: absolute;
  align-self: flex-end;
  right: 12px;
  bottom: 10px;
  height: 40px;
  width: 30%;
  flex-direction:row;
  align-items: center;
  justify-content: space-evenly;
`;
