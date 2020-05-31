import React,{useEffect} from 'react';
import { Image, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { css } from '@emotion/native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { OutOfStock } from '../../../redux/actions/product';
import { Root, Container, Header, Content, ActionSheet } from 'native-base';
import { Button, Input } from 'react-native-elements';

const NoStock = props => {
    const { nostockproducts } = props;
    const { dispatch,OutOfStock } = props;

    console.log(nostockproducts);

    useEffect(() => {
        !nostockproducts && dispatch(OutOfStock());
      }, [dispatch, nostockproducts]);
    
    
    const borderBottom = `
  border-bottom-width: 1px;
  border-bottom-color: #333;
  padding: 5px 0;
  `;

    const flexRow = `
  flex-direction: row;`;

    const flexColumn = `
  flex-direction: column;`;

    const alignItemEnd = `
  align-items: flex-end;`;

    const alignItemStart = `
    align-items: flex-start;`;

    const justifyContent = `
   justify-content: space-between;`;

    const padding = `
  padding: 0 5px;
  `;

    return (
        <Root>
            <Container>
                <View>
                    <ScrollView>
                        {
                            nostockproducts && nostockproducts.items && [...nostockproducts.items].map((product, key) =>
                                <View key={key} style={css`
                padding: 12px 10px;
                flex: 1;
                flex-direction: row;
                justify-content: space-between;
                border-bottom-width: 1px;
                border-bottom-color: #FF914D;
                `}>
                                    <View style={css` padding-left: 5px; flex: 2;`}>
                                        <Text style={css`font-size: 18px;`}>{product.name}</Text>
                                    </View>

                                </View>
                            )}
                    </ScrollView>
                </View>
            </Container>
        </Root>
    );
};
export default connect(state => ({
    nostockproducts: state.product.nostockproducts,
}), dispatch => ({
    dispatch,
    OutOfStock
}))(NoStock);
