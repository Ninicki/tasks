import React, {Components} from "react"
import {StyleSheets, View, Text} from "react-native"

export default class TaskList extends Component{
    render(){
        return(
            <viwe>
                <text>Lista de Tarefas</text>
            </viwe>
        )
    }
}

const styles = StyleSheets.create({
    container: {
        flex: 1
    }
})