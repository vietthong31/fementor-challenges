import { ListItem, List, ListIcon } from '@chakra-ui/react';

export default function Menu({ show, items }) {
  return (
    <List variant="nested" display={show ? 'block' : 'none'}>
      {items.map((e) => (
        <ListItem key={e.text} mb="0.5rem">
          {e.icon !== '' && <ListIcon as={e.icon} />}
          {e.text}
        </ListItem>
      ))}
    </List>
  );
}
