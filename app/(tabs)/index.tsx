import CustomButton from "@/components/CunstomButton";
import React, { useState } from "react"
import { Text, View, Button } from "react-native";

export default function HomeScreem() {
    const [count, setCount] = useState(0);

    return (
        <View style={{backgroundColor:'red'}}>
            <Text>{count}</Text>
            <CustomButton title="teste"/>
            <Button
             title="Diminuir"
            onPress={() => {setCount(count-1)}}
            />
             <Button
             title="Aumentar"
            onPress={() => {setCount(count+1)}}
            />
             <Button
             title="Voltar"
            onPress={() => {setCount(0)}}
            />
        </View> 
        
    );
}