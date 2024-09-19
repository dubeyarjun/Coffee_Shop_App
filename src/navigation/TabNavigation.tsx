import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { COLORS } from '../theme/theme'
import { BlurView } from '@react-native-community/blur'
import React from 'react'
import HomeScreen from '../screen/HomeScreen'
import FavouritScreen from '../screen/FavouritesScreen'
import CartScreen from '../screen/CartScreen'
import OrderHistoryScreen from '../screen/OrderHistoryScreen'
import CustomIcon from '../components/CustomIcon'

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
    return (
        <Tab.Navigator

            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBarStyle,
                tabBarBackground: () => (
                    <BlurView overlayColor='' blurAmount={5} style={styles.BlurViewStyles} />
                )
            }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <CustomIcon
                            name="home"
                            size={25}
                            color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
                        />
                    ),
                }}
            />
            <Tab.Screen name='Cart' component={CartScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <CustomIcon
                            name="cart"
                            size={25}
                            color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
                        />
                    ),
                }} />
            <Tab.Screen name='Favorite' component={FavouritScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <CustomIcon
                            name="like"
                            size={25}
                            color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
                        />
                    ),
                }} />


            <Tab.Screen name='History' component={OrderHistoryScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <CustomIcon
                            name="bell"
                            size={25}
                            color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
                        />
                    ),
                }} />


        </Tab.Navigator>
    )
}

export default TabNavigation

const styles = StyleSheet.create({
    tabBarStyle: {
        height: 80,
        position: 'absolute',
        backgroundColor: COLORS.primaryBlackRGBA,
        borderTopWidth: 0,
        elevation: 0,
        borderTopColor: 'transparent',
    },
    BlurViewStyles: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    }
})