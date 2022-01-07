import React from "react";
import { Text } from "react-native-elements";
export interface HomeProp{

}
interface HomeState{

}
// 主页组件
export class Home extends React.Component<HomeProp,HomeState>{
    public static ROUTE_NAME = "home"; 

    render(): React.ReactNode {
        return (
           <Text>Home---</Text> 
        );
    }
}
