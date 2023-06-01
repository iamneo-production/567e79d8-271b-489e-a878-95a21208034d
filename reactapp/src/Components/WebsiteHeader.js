import React from "react";
import {
  ActionIcon,
  Box,
  Button,
  createStyles,
  Header,
  Group,
  UnstyledButton,
  Text,
  Divider,
  Burger,
  Drawer,
  rem,
  Tooltip,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: rem(42),
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("780")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("780")]: {
      display: "none",
    },
  },
}));

const drawerdata = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Explore",
    link: "/",
  },
  {
    title: "Why Us?",
    link: "/",
  },
  {
    title: "Featured Properties",
    link: "/",
  },
  {
    title: "Contact",
    link: "/",
  },
];

function WebsiteHeader() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const { classes, theme } = useStyles();
  const navigate = useNavigate();

  const links = drawerdata.map((item) => (
    <UnstyledButton
      className={classes.link}
      key={item.title}
      onClick={(event) => {
        event.preventDefault();
        navigate(item.link);
        closeDrawer();
      }}
    >
      <Group noWrap align="center">
        <div>
          <Text>{item.title}</Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  const headerLinks = drawerdata.map((item) => (
    <UnstyledButton
      className={classes.link}
      key={item.title}
      onClick={(event) => {
        event.preventDefault();
        navigate(item.link);
        closeDrawer();
      }}
    >
      <Group noWrap align="center">
        <div>
          <Text color="white">{item.title}</Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box>
      <Header
        height={60}
        px="md"
        style={{
          backgroundColor: "#00274C",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Burger
          opened={drawerOpened}
          onClick={toggleDrawer}
          className={classes.hiddenDesktop}
        />
        <Group position="apart">
          <Group>
            <Title style={{ fontSize: 20, color: "#FFFFFF" }}>NestWorX</Title>
          </Group>
        </Group>

        <Group className={classes.hiddenMobile}>{headerLinks}</Group>

        <Tooltip label="Profile">
          <div>
            <Group position="center" my="xl">
              <div>
                <Text color="white">Login</Text>
              </div>
              <Button
                variant="outline"
                sx={{
                  border: "1px solid white",
                  borderRadius: 5,
                  color: "#FFFFFF",
                }}
              >
                Register
              </Button>
            </Group>
          </div>
        </Tooltip>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="70%"
        padding="md"
        title={
          <Text style={{ color: "#00274C", fontWeight: 500 }}>Nestworx</Text>
        }
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <Box mx="-md">
          <Divider
            mb="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.3"}
          />
          {links}
        </Box>
      </Drawer>
    </Box>
  );
}

export default WebsiteHeader;
