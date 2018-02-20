import React, { Component } from 'react';
import { View, 
    Text, 
    TouchableWithoutFeedback, 
    StyleSheet, 
    Image 
} from 'react-native';
import { Episode } from './season/Episode';

import upIcon from '../../../content/icons/up-arrow.png';
import downIcon from '../../../content/icons/down-arrow.png';

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
                <View style={ styles.seasson }>
                    <View style={ styles.seassonRow }>
                        <Text style={ styles.seassonText }>Seasson { this.props.season.seasson }</Text>
                        <View>
                            <Image 
                                source={ this.state.isOpen ? upIcon : downIcon }
                                style={ styles.seassonImage }
                            />
                        </View>
                    </View>
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
    seasson: {
        marginBottom: 10,
    },
    seassonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 15
    },
    seassonText: {
        flex: 1,
        marginRight: 20,
        color: '#828080',
        fontSize: 15
    },
    seassonImage: {
        width: 30, 
        height: 30,
    }
});

