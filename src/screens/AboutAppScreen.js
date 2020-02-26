import React from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking, Alert, StatusBar } from "react-native";
import Header from "../components/Header";

import Ionicons from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";

const githubIconSize = 24;
let appUrl = "https://www.getoiio.com";
let linkedinUrl = "https://www.linkedin.com/company/getoiio";
let facebookUrl = "https://www.facebook.com/getOIIO/";


export default class AboutAppScreen extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    _onPressFab = value => {
        if (value == 1) {
            Linking.canOpenURL(appUrl)
                .then(supported => {
                    if (supported) Linking.openURL(appUrl);
                    else Alert.alert("Error!!!", "There is some error while parsing this url, please try again later.");
                })
                .catch(err => {
                    Alert.alert("Error!!!", "There is some error while opening this url, please try again later.");
                });
        } else if (value == 2) {
            Linking.canOpenURL(linkedinUrl)
                .then(supported => {
                    if (supported) Linking.openURL(linkedinUrl);
                    else Alert.alert("Error!!!", "There is some error while parsing this url, please try again later.");
                })
                .catch(err => {
                    Alert.alert("Error!!!", "There is some error while opening this url, please try again later.");
                });
        } else if (value == 3) {
            Linking.canOpenURL(facebookUrl)
                .then(supported => {
                    if (supported) Linking.openURL(facebookUrl);
                    else Alert.alert("Error!!!", "There is some error while parsing this url, please try again later.");
                })
                .catch(err => {
                    Alert.alert("Error!!!", "There is some error while opening this url, please try again later.");
                });
        } 
    };
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <Header title={"About App"} renderBack={true} navigation={this.props.navigation} />

                <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#f093fb", "#f5576c"]} style={styles.card}>
                        <Text style={styles.title}>OIIO</Text>
                        <Text style={styles.description}>
                        OIIO is relationship management, handy document management, 1-click invoicing and smart agenda planning in a secure customer environment. {"\n"} Always available on every device. 
                        {"\n"} Discover smarter and faster business.{"\n\n"} Check our website.
                        </Text>
                        <TouchableOpacity style={styles.fab} onPress={() => this._onPressFab(1)} activeOpacity={0.8}>
                            <Ionicons name={"ios-globe"} size={githubIconSize} color={"black"} style={styles.githubIcon} />
                        </TouchableOpacity>
                    </LinearGradient>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#f6d365", "#fda085"]} style={styles.card}>
                        <Text style={styles.title}>OIIO Linkedin</Text>
                        <Text style={styles.description}>
                        Always in contact with your customer. OIIO offers smart applications to help the self-employed professional advance their own business.
                        </Text>
                        <TouchableOpacity style={styles.fab} onPress={() => this._onPressFab(2)} activeOpacity={0.8}>
                            <Ionicons name={"ios-globe"} size={githubIconSize} color={"black"} style={styles.githubIcon} />
                        </TouchableOpacity>
                    </LinearGradient>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#84fab0", "#8fd3f4"]} style={styles.card}>
                        <Text style={styles.title}>OIIO Facebook</Text>
                        <Text style={styles.description}>
                        OIIO makes it easier for independent professionals to run their own businesses.{"\n"} With smart online applications such as a calendar planner,
                        quotes and invoices,{"\n"} marketing tools and more. Manage, communicate and document.
                        </Text>
                        <TouchableOpacity style={styles.fab} onPress={() => this._onPressFab(3)} activeOpacity={0.8}>
                            <Ionicons name={"ios-globe"} size={githubIconSize} color={"black"} style={styles.githubIcon} />
                        </TouchableOpacity>
                    </LinearGradient>

                    <Text style={styles.bottomTitle}>
                        Made with <Ionicons name={"ios-heart"} size={14} color={"red"} /> in Geleen,Netherlands
                    </Text>
                    <Text style={styles.textVersion}>version-0.0</Text>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    card: {
        height: 180,
        backgroundColor: "white",
        elevation: 4,
        marginTop: 8,
        marginBottom: 8,
        marginRight: 16,
        marginLeft: 16,
        borderRadius: 12,
        padding: 16
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white"
    },
    description: {
        fontSize: 14,
        fontWeight: "bold",
        color: "white",
        marginTop: 4
    },
    fab: {
        flexDirection: "column",
        justifyContent: "center",
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: "white",
        elevation: 8,
        position: "absolute",
        bottom: 16,
        right: 16
    },
    githubIcon: {
        alignSelf: "center"
    },
    bottomTitle: {
        color: "black",
        fontWeight: "bold",
        alignSelf: "center",
        paddingTop: 8
    },
    textVersion: {
        color: "#A9A9A9",
        fontWeight: "bold",
        alignSelf: "center",
        paddingBottom: 8,
        fontSize: 10
    }
});
