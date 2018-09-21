import React, {Component} from 'react';
import{
	StyleSheet,
	Button, 
	View,
	Text
}from 'react-native';

export default class HomeScreen extends Component<Props>{
	static navigationOptions = {
		title: 'Harry Potter: The Soccerer Stone',
	};

	render(){
		return(
			<View style = {styles.container}>
				<Text style={styles.title}>
					Home
				</Text>

				<View style={styles.button}>
          			<Button
            			title="Author"
           				 onPress={() => {this.props.navigation.navigate('Details',{
            				details:'author',
        				})}}
          			/>
      		  	</View>

      		  	<View style={styles.button}>
          			<Button
            			title="Overview"
           				 onPress={() => {this.props.navigation.navigate('Details',{
            				details:'overview',
        				})}}
          			/>
      		  	</View>
      		</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
  button: {
      margin: 10,
  }
});