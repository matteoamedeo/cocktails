import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

interface CartProps {
    title: string;
    description: string;
    image: string;
  }

const Cart: React.FC<CartProps> = ({ title, description, image }) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: image }} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 8,
    },
    content: {
        marginTop: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
});