import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { HeaderContainer, SubTitle, Title, orangeColor } from '../../style';

export const Header = () => {
  return (
    <HeaderContainer>
      <SubTitle>[Making your life easier]</SubTitle>
      <Title>Discovering the World</Title>
      <IconButton
        color='warning'
        sx={{
          position: 'absolute',
          top: 100,
          right: 50,
          backgroundColor: `${orangeColor}`,
          color: 'white',
        }}
      >
        <EditIcon />
      </IconButton>
    </HeaderContainer>
  );
};
