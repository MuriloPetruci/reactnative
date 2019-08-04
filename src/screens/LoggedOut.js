import React, { Component } from 'react';
import colors from '../styles/colors';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
} from 'react-native';

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import RoundedButton from '../components/buttons/RoundedButton';

export default class LoggedOut extends Component {
    onFacebookPress() {
        alert('Facebook button pressed');
    }
    onCreateAccountPress() {
        alert('criar conta');
    }

    onMoreOptionsPress() {
        alert('more options button pressed');
    }
    render() {
        return (  
            <View style={styles.wrapper}>
            <View style={styles.welcomeWrapper}>
            <Image source={require('../img/zty-logo.png')} style={styles.logo}/>
            <Text style={styles.welcomeText}>Welcome</Text>
            <RoundedButton 
              text="Continue with Facebook"
              textColor={colors.verde}
              background={colors.white}
              icon={<Icon name="facebook" size={20} style={styles.facebookButtonIcon}/>}
              handleOnPress={this.onFacebookPress}
              />
              <RoundedButton 
              text="Crie sua conta"
              textColor={colors.white}
              handleOnPress={this.onCreateAccountPress}
              />
              <TouchableHighlight style={styles.moreOptionsButton}
              onPress={this.onMoreOptionsPress}
              >
              <Text style={styles.moreOptionsButton}>outros testg</Text>
              </TouchableHighlight>
              
              <View style={styles.termsAndConditions}>
              <Text style={styles.termsText}>terminandooo</Text>
              </View>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        display: 'flex',
        backgroundColor: colors.verde,   
    },
    welcomeWrapper: {
        flex: 1,
        display:'flex',
        marginTop: 30,
        padding: 20,
    },
    logo: {
        width: 200,
        height: 60,
        marginTop: 50,
        marginBottom: 30,
    },
    welcomeText: {
        fontSize: 30,
        color: colors.white,
        fontWeight: '400',
        marginBottom: 40,
    },
    facebookButtonIcon: {
        color: colors.verde,
        position: 'relative',
        left: 20,
        zIndex: 8,
    },
    moreOptionsButton: {
      marginTop: 10,
    },
    moreOptionsButtonText: {
        color: colors.white,
        fontSize: 16,
    },
    termsAndConditions: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginTop: 15,
    },
    termsText: {
      color: colors.white,
      fontSize: 13,
      fontWeight: '600',
    }
});