import React from 'react';
import {View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PageHeader from '../../components/PageHeader';

function DetalhesObjeto (){
    const navigation = useNavigation();
    return (
        <View>
            <PageHeader title="Detalhes" />
        </View>
    );
}

export default DetalhesObjeto;