import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { View, Button } from 'react-native';

import { Inverter, MegaSena } from './componentes/Multi.js';
import ParImpar from './componentes/ParImpar.js';
import Simples from './componentes/Simples.js';
import Contador from './componentes/Contador.js';
import Plataformas from './componentes/Plataformas.js';
import ValidarProps from './componentes/ValidarProps.js';
import Evento from './componentes/Evento.js';
import Avo from './componentes/ComunicacaoDireta.js';
import { TextoSincronizado } from './componentes/ComunicacaoIndireta.js';
import ListaFlex from './componentes/ListaFlex.js';
import Flex from './componentes/Flex.js';

function Back({ navigation }) {
    return (
        <View style={{ 
                flex: 1, 
                alignItems: 'center', 
                justifyContent: 'center' 
            }
        }>
            <Button onPress={() => navigation.goBack()}
                title='Voltar'
            />
        </View>
    );
}

function ShowHideItemMenu(pShowHide = true) {
    if (pShowHide) {
        return (<Drawer.Screen name='Back' component={Back} />);
    }
}

const Drawer = createDrawerNavigator();

export default function Menu() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName='Flex'>
                <Drawer.Screen name='Flex' component={Flex} />
                <Drawer.Screen name='Lista Flex' component={ListaFlex} />
                <Drawer.Screen name='Texto Sincronizado' component={TextoSincronizado} />
                <Drawer.Screen name='Avô-Pai-Filho' component={() => <Avo nome='João' sobrenome='Silva' />} />
                <Drawer.Screen name='Evento' component={Evento} />
                <Drawer.Screen name='Validar Props' component={ () => <ValidarProps label='Data: ' ano={20} />} />
                <Drawer.Screen name='Plataformas' component={Plataformas} />
                <Drawer.Screen name='Contador' component={() => <Contador numeroInicial={1000} />} />
                <Drawer.Screen name='Mega Sena' component={() => <MegaSena />} />
                <Drawer.Screen name='Inverter' component={() => <Inverter texto='Item no Menu' />} />
                <Drawer.Screen name='Par & Ímpar' component={() => <ParImpar numero={12} />} />
                <Drawer.Screen name='Simples' component={() => <Simples texto='Texto Simples' />} />

                {ShowHideItemMenu()}

                {/* <Drawer.Screen name='Back' component={Back} /> */}
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

