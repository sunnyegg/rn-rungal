import React, { Component } from 'react'
// import { View, Text, Button} from 'react-native'
import { View, Text, Card, CardItem, Button } from 'native-base'

class Profile extends Component{
  constructor(props){
    super(props)
    this.state ={
      user: this.props.navigation.getParam('username')
    }
  }
  render(){
    return(
      <>
      <View style={{padding: 20, backgroundColor: 'black'}}>
      <Card style={{borderWidth: 40, borderColor: 'black', margin: 20, padding: 20, borderRadius: 15}}>
        <CardItem>
          <Text>{this.state.user.user1}</Text>
        </CardItem>
        <CardItem>
          <Text>{this.state.user.user2}</Text>
        </CardItem>
      </Card>
      </View>
      <View>
        <Button danger onPress={() => this.props.navigation.navigate('Home')} > 
          <Text>Go to Home</Text>
        </Button>
      </View>
      </>
    )
  }
}

export default Profile