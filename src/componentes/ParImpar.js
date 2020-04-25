import React from 'react';
import { View, Text } from 'react-native';

import Padrao from '../estilo/Padrao.js';

export default props => (
    <View>
        <Text style={Padrao.ex}>
            {props.numero % 2 == 0 ? 'Par' : 'Ímpar'}
        </Text>
    </View>
);