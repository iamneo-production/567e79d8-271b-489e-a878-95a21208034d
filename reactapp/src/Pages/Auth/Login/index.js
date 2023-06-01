import {
  Badge,
  Box,
  Button,
  Grid,
  Group,
  Image,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";

const Styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default function Login() {
  const navigate = useNavigate();
  return (
    <Grid>
      <Grid.Col span={12}>
        <Title style={{ color: "white", textAlign: "center" }}>
          Welcome to Nestwor<span style={{ color: "#FF7F50" }}>X</span>
        </Title>
        <Text style={{ color: "white", textAlign: "center" }}>
          Find your dream property with ease
        </Text>
        <Box>
          <Box style={Styles.container}>
            <TextInput
              fullWidth
              placeholder="Search location..."
              style={{ width: "50%", margin: 20 }}
            />
          </Box>
          <Group style={Styles.container}>
            <Badge
              style={{
                backgroundColor: "#3462A7",
                color: "#FFFFFF",
                cursor: "pointer",
              }}
              onClick={(e) => {}}
            >
              Buy
            </Badge>
            <Badge
              style={{
                backgroundColor: "#3462A7",
                color: "#FFFFFF",
                cursor: "pointer",
              }}
            >
              Rent
            </Badge>
            <Badge
              style={{
                backgroundColor: "#3462A7",
                color: "#FFFFFF",
                cursor: "pointer",
              }}
            >
              Lease
            </Badge>
            <Badge
              style={{
                backgroundColor: "#3462A7",
                color: "#FFFFFF",
                cursor: "pointer",
              }}
            >
              Sell
            </Badge>
            {/* <Button style={{ backgroundColor: "#3462A7" }}>Buy</Button>
            <Button style={{ backgroundColor: "#3462A7" }}>Rent</Button>
            <Button style={{ backgroundColor: "#3462A7" }}>Lease</Button>
            <Button style={{ backgroundColor: "#3462A7" }}>Sell</Button> */}
          </Group>
        </Box>
      </Grid.Col>
      <Grid.Col span={4} style={Styles.container}>
        <Box>
          <Image src="" />
          <Text style={{ color: "white", textAlign: "center" }}>
            Sell Smart, Sell Fast, Sell with Confidence
          </Text>
        </Box>
      </Grid.Col>
      <Grid.Col span={4} style={Styles.container}>
        <Box>
          <Image src="" />
          <Text style={{ color: "white", textAlign: "center" }}>
            Discover the Key to Your Ideal Home
          </Text>
        </Box>
      </Grid.Col>
      <Grid.Col span={4} style={Styles.container}>
        <Box>
          <Image src="" />
          <Text style={{ color: "white", textAlign: "center" }}>
            Unlock the Perfect Rental Home for Your Lifestyle
          </Text>
        </Box>
      </Grid.Col>
    </Grid>
  );
}
