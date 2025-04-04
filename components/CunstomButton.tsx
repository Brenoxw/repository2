import { TouchableOpacity, Text } from "react-native"
import React from "react"

interface Props{
    title: string
}

export default function CustomButton ({title}: Props){
    return(
        <TouchableOpacity>
<Text>{title}</Text>
        </TouchableOpacity>
    )
}