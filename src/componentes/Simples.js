import React from 'react';
import { Text } from 'react-native';

import Padrao from '../estilo/Padrao.js';

export default props => (
    <Text style={Padrao.ex}>{props.texto}</Text>
);

