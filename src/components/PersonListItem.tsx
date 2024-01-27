import React from 'react';
import { ListItem } from 'react-onsenui';

interface PersonListItemProps {
  id: string;
  name: string;
  picture: string;
  onClick?: () => void;
}

const PersonListItem = ({
  id,
  name,
  picture,
  onClick,
}: PersonListItemProps) => {
  return (
    <ListItem key={id} onClick={onClick} tappable={!!onClick}>
      <div className='left'>
        <img className='list-item__thumbnail' src={picture} alt={name} />
      </div>
      <div className='center'>{name}</div>
    </ListItem>
  );
};

export default PersonListItem;
