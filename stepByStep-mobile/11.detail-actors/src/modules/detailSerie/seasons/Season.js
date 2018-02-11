import React, { Component } from 'react';
import { View, 
    Text, 
    TouchableWithoutFeedback, 
    StyleSheet, 
    Image 
} from 'react-native';
import { Episode } from './season/Episode';

class Season extends Component {
    
    constructor() {
        super();
        this.state = {
            isOpen: false
        }
    }

    toogle() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return(
            <TouchableWithoutFeedback 
                title='toggle' 
                onPress={ this.toogle.bind(this) }
            >
                <View>
                    <Text>Seasson { this.props.season.seasson }</Text>
                    <Text>Toogle</Text>

                    <View>
                        { this.state.isOpen ? this.props.season.episodes.map(episode => 
                            <Episode 
                                key={ episode.title } 
                                episode={ episode } 
                            />) : null
                        }
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}    

export { Season };

const styles = StyleSheet.create({
    seassonImage: {
        width: 30, 
        height: 30,
    }
});

