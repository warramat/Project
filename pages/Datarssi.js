import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'

const isInCar = (rssi) => {
    if (+rssi <= -76) return false
    return true
}

const Datarssi = () => {
    const [watches, setWatches] = useState([])
    useEffect(() => {
        setInterval(() => {
            fetch('http://172.16.186.51:3000/getbandincar', {
                method: 'GET',
              })
                .then((response) => response.json())
                .then((responseJson) => {
                    const lastData = responseJson[responseJson.length - 1]
                    const { _id, carid, watch } = lastData
                    setWatches(watch)
                })
        }, 5000)
    }, [])
    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            style={{ marginVertical: 20 }}
        >
            <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>รายการ MAC_ADDESS</Text>
            <View style={{ marginBottom: 20 }} />
            {watches.map(({ _id, rssi, name, mac_address }) => {
                const inCar = isInCar(rssi)
                return (
                    <View style={{ marginBottom: 10, padding: 10, borderRadius: 6, paddingHorizontal: 10, borderWidth: 1, borderColor: '#999', width: '90%', alignSelf: 'center' }} key={_id}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{mac_address}</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Name: {name}</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>RSSI: {rssi}</Text>
                        <Text style={{ color: inCar ? 'green' : 'red', fontSize: 16, fontWeight: 'bold', textAlign: 'right' }}>{inCar ? 'อยู่ในรถ' : 'ไม่อยู่ในรถ'}</Text>
                    </View>
                )
            })}
        </ScrollView>
    )
}

export default Datarssi
