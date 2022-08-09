import PropTypes from 'prop-types';
import { Box } from 'utils/Box';
import {
  ProfileImage,
  Username,
  Userinfo,
  StatList,
  StatItem,
  StatLabel,
  StatQuantity,
} from 'components/Profile/Profile.styled';

export function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <Box
      display="inline-flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      color={'gray'}
      border={'gray'}
      borderRadius={'sm'}
      boxShadow={'normal'}
      mr="auto"
      ml="auto"
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        py={5}
      >
        <ProfileImage src={avatar} alt="User avatar" />
        <Username>{username}</Username>
        <Userinfo>{`@${tag}`}</Userinfo>
        <Userinfo>{location}</Userinfo>
      </Box>

      <StatList>
        <StatItem>
          <StatLabel>Followers</StatLabel>
          <StatQuantity>{followers}</StatQuantity>
        </StatItem>
        <StatItem>
          <StatLabel>Views</StatLabel>
          <StatQuantity>{views}</StatQuantity>
        </StatItem>
        <StatItem>
          <StatLabel>Likes</StatLabel>
          <StatQuantity>{likes}</StatQuantity>
        </StatItem>
      </StatList>
    </Box>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
