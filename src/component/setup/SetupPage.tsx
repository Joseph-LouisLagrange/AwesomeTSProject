import React from "react"
import { Text } from "react-native-elements";
import {getDefaultSetupImage} from '@assets/images/setup/index';


import { SetupPageProps } from "@config/Types";
import axios from "@config/AxiosConfig";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Home } from "../Home";

interface SetUpPageState{

}


export class SetupPage extends React.Component<SetupPageProps,SetUpPageState>{
    public static ROUTE_NAME = "setup-page";
    public constructor(props:SetupPageProps){
        super(props);
    }

    private async bootstrap():Promise<any>{
        return await axios.get("/");
    }

    componentDidMount(){
        this.bootstrap().then(rsp=>{
            console.info(rsp.data)
            this.props.navigation.navigate(Home.ROUTE_NAME);
        }).catch(err=>{
            console.error(err);
        })
    }

    render(): React.ReactNode {
        return (
            <View>
                <ImageBackground source={getDefaultSetupImage()} style={Style.BG}>
                   
                </ImageBackground>
            </View>
        )
    }
}

var Style = StyleSheet.create({
    BG:{
        width: "100%",
        height: "100%"
    }
});