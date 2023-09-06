import {
  Calendar,
  ChevronDownIcon,
  ChevronUpIcon,
  NavbarIcon,
  CloseNavbarIcon,
  Planning,
  Reminder,
  TodoIcon,
} from './Icon';
import { Link } from '@chakra-ui/react';
import { Button, IconButton, List, ListItem, Image, Flex } from '@chakra-ui/react';
import Menu from './Menu';
import { useState } from 'react';

const featureMenu = [
  { icon: TodoIcon, text: 'Todo List' },
  { icon: Calendar, text: 'Calendars' },
  { icon: Reminder, text: 'Reminders' },
  { icon: Planning, text: 'Planning' },
];
const companyMenu = [
  { icon: '', text: 'History' },
  { icon: '', text: 'Our Team' },
  { icon: '', text: 'Blog' },
];

const downIcon = (
  <IconButton
    aria-label="Menu"
    icon={<ChevronDownIcon />}
    size="min"
    bg="transparent"
    _hover={{ bg: 'transparent' }}
  />
);

const upIcon = (
  <IconButton
    aria-label="Menu"
    icon={<ChevronUpIcon />}
    size="min"
    bg="transparent"
    _hover={{ bg: 'transparent' }}
  />
);

export default function Navbar() {
  const [show, setShow] = useState({ feature: false, company: false });
  const [showNavbar, setShowNavbar] = useState(true);

  const showFeaturesMenu = () => {
    setShow({ ...show, feature: !show.feature });
  };

  const showCompanyMenu = () => {
    setShow({ ...show, company: !show.company });
  };

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <Flex as="nav" align="center" py={5} px={{ base: 5, lg: 10 }}>
      <Image src="./logo.svg" alt="Snap" />
      <Flex
        as={List}
        size={{ base: 'base', lg: 'lg' }}
        display={{ base: showNavbar ? 'flex' : 'none', lg: 'flex' }}
        userSelect="none"
      >
        <ListItem display={{ lg: 'none' }}>
          <IconButton
            onClick={toggleNavbar}
            aria-label="Close Menu"
            icon={<CloseNavbarIcon />}
            size="min"
            bg="transparent"
            float="right"
          />
        </ListItem>
        <ListItem onClick={showFeaturesMenu} position="relative">
          <Link>Features {show.feature ? upIcon : downIcon}</Link>
          <Menu show={show.feature} items={featureMenu} />
        </ListItem>
        <ListItem onClick={showCompanyMenu} position="relative">
          <Link>Company {show.company ? upIcon : downIcon}</Link>
          <Menu show={show.company} items={companyMenu} />
        </ListItem>
        <ListItem>
          <Link>Careers</Link>
        </ListItem>
        <ListItem>
          <Link>About</Link>
        </ListItem>
        <ListItem ml={{ lg: 'auto' }}>
          <Button variant="outline" border="none" width={{ base: '100%' }}>
            Login
          </Button>
        </ListItem>
        <ListItem>
          <Button variant="outline" width={{ base: '100%' }}>
            Register
          </Button>
        </ListItem>
      </Flex>
      <IconButton
        onClick={toggleNavbar}
        aria-label="Menu"
        icon={<NavbarIcon />}
        bg="transparent"
        ml="auto"
        display={{ lg: 'none' }}
      />
    </Flex>
  );
}
