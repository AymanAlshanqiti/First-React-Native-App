import React, { Component } from "react";
import { ScrollView, View, StyleSheet, Image } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Tab,
  Col,
  Row,
  Tabs
} from "native-base";

export default class LayoutExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Icon active name="left" type="AntDesign" />
          </Left>
          <Text>Header</Text>
          <Right>
            <Icon active name="bars" type="AntDesign" />
          </Right>
        </Header>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require("./assets/logo.png")} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
              <Right>
                <Text note>11h ago</Text>
              </Right>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={require("./assets/01.png")}
                style={{ height: 350, width: null, flex: 1 }}
              />
            </CardItem>
            <Row>
              <CardItem>
                <Col style={{ width: 150 }}>
                  <Left>
                    <Button transparent>
                      <Icon active name="like2" type="AntDesign" />
                      <Text note>167 Likes</Text>
                    </Button>
                  </Left>
                </Col>
                <Col style={{ width: 200 }}>
                  <Button transparent>
                    <Icon active name="comments-o" type="FontAwesome" />
                    <Text note>434 Comments</Text>
                  </Button>
                </Col>
              </CardItem>
            </Row>
          </Card>
        </Content>
      </Container>
    );
  }
}

// ------------ Styling ------------ //
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F9F9F9",
    borderRadius: 15,
    height: 700,
    shadowOffset: { width: 0, heigh: 0 },
    shadowOpacity: 0.9
  },
  cardContainer: {
    margin: "4% 4% 4% 4%",
    backgroundColor: "red",
    borderRadius: 15,
    height: 490,
    shadowOffset: { width: 0, heigh: 0 },
    shadowOpacity: 0.9,

    shadowColor: "#e1e1e1"
  },
  cardImage: {
    height: "100%",
    width: "100%"
  }
});
