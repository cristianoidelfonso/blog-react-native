import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({navigation}) => {

  const {state, addBlogPost, deleteBlogPost} = useContext(Context);

  return (
    <>
      <Text>Aprendendo a passagem de dados via contexto (hook useContext)</Text>
      <Text>Continuar aula pva-iysm-hmm(2023-04-24 16:23 GMT-3) aos 14 minutos</Text>
      <Text>Testando</Text>

      {/* <Button title='Add Post' onPress={()=>addBlogPost()} /> */}
      
      <FlatList
        vertical
        data={state}
        key={(blogPost) => blogPost.title}
        renderItem={ ({item}) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Show', {id:item.id})}>
              <View style={styles.row}>
                <Text style={styles.title}>
                  {item.title}
                </Text>
                <TouchableOpacity onPress={()=>{deleteBlogPost(item.id);}}>
                  <Feather style={styles.icon} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray'
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }
});

export default IndexScreen;
