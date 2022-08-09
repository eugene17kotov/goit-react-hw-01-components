import PropTypes from 'prop-types';

import {
  ListItem,
  FriendImage,
  FriendName,
  OnlineCheck,
} from 'components/FriendList/FriendListItem.styled';

export function FriendListItem({ avatar, name, isOnline }) {
  return (
    <ListItem>
      <OnlineCheck isOnline={isOnline} />
      <FriendImage src={avatar} alt={`${name} avatar"`} width="48" />
      <FriendName>{name}</FriendName>
    </ListItem>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
