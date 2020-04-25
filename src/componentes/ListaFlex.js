import React from 'react';
import { ScrollView, View, FlatList, Text } from 'react-native';

const alunos = [
    { id: 1, nome: 'Aluno 1', nota: 7.9 },
    { id: 2, nome: 'Aluno 2', nota: 9 },
    { id: 3, nome: 'Aluno 3', nota: 8.9 },
    { id: 4, nome: 'Aluno 4', nota: 6 },
    { id: 5, nome: 'Aluno 5', nota: 5.5 },
    { id: 6, nome: 'Aluno 6', nota: 5 },
    { id: 7, nome: 'Aluno 7', nota: 5.9 },
    { id: 8, nome: 'Aluno 8', nota: 7.9 },
    { id: 9, nome: 'Aluno 9', nota: 9.9 },
    { id: 10, nome: 'Aluno 10', nota: 8.9 },
    { id: 11, nome: 'Aluno 11', nota: 9 },
    { id: 12, nome: 'Aluno 12', nota: 10 },
    { id: 13, nome: 'Aluno 13', nota: 10 },
    { id: 14, nome: 'Aluno 14', nota: 9 },
    { id: 15, nome: 'Aluno 15', nota: 4.9 },
    { id: 16, nome: 'Aluno 16', nota: 9.9 },
    { id: 17, nome: 'Aluno 17', nota: 7 },
    { id: 18, nome: 'Aluno 18', nota: 7.3 }
];

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',

    alignItems: 'center',
    // justifyContent: 'space-between'
    flexDirection: 'row',
    justifyContent: 'space-between'
}

export const Aluno = props => {
    return (
        <View style={itemEstilo}>
            <Text>
                Nome: {props.nome}
            </Text>
            <Text style={{ fontWeight: "bold" }}>
                Nota: {props.nota}
            </Text>
        </View>
    );
}

export default props => {
    const renderItem = ({ item }) => {
        return (
            <Aluno {...item} />
        );
    }

    return (
        <ScrollView>
            <FlatList data={alunos} 
                    renderItem={renderItem} 
                    keyExtractor={(_, index) => index.toString()} />
        </ScrollView>
    );
}

