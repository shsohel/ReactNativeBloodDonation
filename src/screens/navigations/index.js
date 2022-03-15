import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useSelector } from 'react-redux';
import DepartmentFormScreen from '../DepartmentFormScreen';
import DepartmentList from '../DepartmentList';
import HomeScreen from '../HomeScreen';
import DrawerNav from './DrawerNav';
const Drawer = createDrawerNavigator(); const Tab = createBottomTabNavigator();

const NavMain = () => {
    const { departments } = useSelector( ( { buyerDepartments } ) => buyerDepartments );

    return (
        <NavigationContainer >
            <Drawer.Navigator initialRouteName="Home" drawerContent={( props ) => <DrawerNav {...props} />} >
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Departments" >
                    {
                        () => (
                            <Tab.Navigator screenOptions={{ headerShown: false }}>
                                <Tab.Screen
                                    name="Form"
                                    component={DepartmentFormScreen}
                                    options={{ tabBarBadge: 1 }}
                                />
                                <Tab.Screen
                                    name="List"
                                    component={DepartmentList}
                                    options={{ tabBarBadge: departments.length }}
                                />
                            </Tab.Navigator >
                        )
                    }
                </Drawer.Screen>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default NavMain;