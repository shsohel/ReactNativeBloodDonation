
// export default function App() = ( { navigation } ) => {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
//             <View>
//                 <TextInput
//                     style={styles.textInput}
//                 />
//             </View>
//             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
//                 <Button
//                     onPress={() => navigation.navigate( 'Notifications' )}
//                     title="Go to notifications"
//                 />
//             </View>
//         </View>
//     )
// }

// const styles = StyleSheet.create( {
//     textInput: {
//         height: 40,
//         margin: 12,
//         borderWidth: 1,
//         padding: 10,
//         backgroundColor: 'white'
//     }
// } )

import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const HomeScreen = ( { navigation } ) => {
    return (
        <View style={styles.mainSection}>
            <Text>Welcome</Text>
            <Button title="Go To Department" onPress={() => { navigation.navigate( 'Departments' ) }} />

        </View>
    )
};

export default HomeScreen;

const styles = StyleSheet.create( {
    mainSection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#C76300",
        width: '100%',
        padding: 14
    }
} )
