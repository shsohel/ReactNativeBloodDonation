import {
    DrawerContentScrollView, DrawerItem
} from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Caption, Drawer, Paragraph, Switch, Text, Title, TouchableRipple } from 'react-native-paper';



const DrawerNav = ( props ) => {
    // console.log( props )
    return (
        <View style={styles.drawerMain}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.insideUser}>
                        <Avatar.Image source={{ uri: 'https://picsum.photos/id/1/200/300' }} />
                    </View>
                    <View style={styles.userInfo}>
                        <Title style={styles.title}>Admin</Title>
                        <Caption style={styles.caption}>@prosohel</Caption>
                    </View>
                </View>
                <View style={styles.userInfoSection}>
                    <View style={styles.section}>
                        <Paragraph style={styles.paragraph}>80</Paragraph>
                        <Caption style={styles.caption}>Follower</Caption>
                    </View>
                    <View style={styles.section}>
                        <Paragraph style={styles.paragraph}>20</Paragraph>
                        <Caption style={styles.caption}>Following</Caption>
                    </View>

                </View>
                <View style={styles.navSection}>
                    <Drawer.Section >
                        <DrawerItem style={styles.navItem} label="Home" onPress={() => { props.navigation.navigate( 'Home' ) }} />
                        <DrawerItem style={styles.navItem} label="Departments" onPress={() => { props.navigation.navigate( 'Departments' ) }} />
                    </Drawer.Section>
                    <Drawer.Section>
                        <TouchableRipple>
                            <View style={styles.preference}>
                                <Text>Dark Mode</Text>
                                <Switch />
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView >
            <Drawer.Section style={styles.bottomDrawerSection}>
                <Drawer.Item label='Logout' onPress={() => { }} />
            </Drawer.Section>
        </View >
    )
}

export default DrawerNav



const styles = StyleSheet.create( {
    drawerMain: {
        flex: 1,
        padding: 15,

    },
    drawerContent: {
        flex: 1,
        backgroundColor: '#DEDEDE',

        justifyContent: 'center',
        alignItems: 'center'
    },
    userInfoScreen: {
        backgroundColor: 'red',
    },
    insideUser: {
        marginTop: 15
    },
    userInfo: {
        flex: 1,
        marginTop: 15,
        backgroundColor: '#FBBC06',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    paragraph: {
        marginRight: 6
    },
    title: {

    },
    caption: {
        fontFamily: 'Roboto',
        fontStyle: 'italic'
    },
    row: {

    },
    userInfoSection: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        backgroundColor: '#F8CFDD',
        paddingRight: 6,
        paddingLeft: 6
    },
    section: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    navSection: {
    },
    navItem: {

    },
    preference: {

    }

} )