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
                        <Title style={styles.fullName}>SH SOHEL</Title>
                        <Caption style={styles.userName}>@prosohel</Caption>
                    </View>
                </View>
                <View style={styles.userInfoSection}>
                    <View style={styles.section}>
                        <Paragraph style={styles.donateTitle}>Last Blood Donate : </Paragraph>
                        <Caption style={styles.lastDonateDate}>March 31, 2022</Caption>
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
        //  padding: 15,

    },
    drawerContent: {
        flex: 1,
        backgroundColor: '#8a0303',

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
        backgroundColor: '#FEB139',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    fullName: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: '#143F6B'
    },
    userName: {
        fontFamily: 'Roboto',
        fontStyle: 'italic',
        fontWeight: '400',
        color: '#143F6B',
    },
    donateTitle: {
        fontFamily: 'Roboto',
    },
    lastDonateDate: {
        fontFamily: 'Roboto',
        fontStyle: 'italic',
        color: '#8a0303',
        fontWeight: 'bold',

    },
    paragraph: {
        marginRight: 6
    },
    title: {
        color: '#8a0303',
    },
    caption: {
        fontFamily: 'Roboto',
        fontStyle: 'italic',
        color: 'white',
    },
    row: {

    },
    userInfoSection: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        backgroundColor: '#F6F54D',
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
        label: {
            padding: 0,
            margin: 0,
            backgroundColor: 'red'
        }

    },
    preference: {

    }

} )