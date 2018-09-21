import React, { Component } from 'react';
import{
	StyleSheet,
	Image,
	Text,
	View
}from 'react-native';

const details = {
	author: {
		name: 'Author',
		author:'J.K.Rowling',
		country: 'Country : England',
		image: require('./img/author.jpg'),
	},

	overview: {
		name:'Overview',
		author: 'J.K.Rowling',
		image:require('./img/author.jpg'),
		articles: "Adaptation of the first of J.K. Rowling's popular children's novels about Harry Potter, a boy who learns on his eleventh birthday that he is the orphaned son of two powerful wizards and possesses unique magical powers of his own. He is summoned from his life as an unwanted child to become a student at Hogwarts, an English boarding school for wizards. There, he meets several friends who become his closest allies and help him discover the truth about his parents' mysterious deaths."
	},
}

export default class DetailsScreen extends Component<Props>{
	static navigationOptions = ({navigation}) => {
		return{
			title: details[navigation.getParam('details')].name,
		};
	};

	render(){
		let detail = this.props.navigation.getParam('details');

		return(
			<View style={styles.container}>
				<Text style={styles.title}>
					{details[detail].author}
				</Text>

				<Image style={styles.image}
					source = {details[detail].image}
				/>

				<Text style={styles.content1}>
					{details[detail].country}
				</Text>

				<Text style={styles.content}>
					{details[detail].articles}
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },
  image: {
      width: 360,
      height: 360,
  },
  content:{
  	fontSize: 12,
    fontWeight: 'bold',
    margin: 20,
  },
  content1:{
  	fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
  },
});