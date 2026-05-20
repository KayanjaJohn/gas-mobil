import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { ChevronLeft, MapPin } from 'lucide-react-native';

export default function OrderLocationScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#070b14' }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14, padding: 16 }}>
          <TouchableOpacity onPress={() => router.back()} style={{ width: 38, height: 38, borderRadius: 19, backgroundColor: '#1a2236', alignItems: 'center', justifyContent: 'center' }}>
            <ChevronLeft size={18} color="#fff" />
          </TouchableOpacity>
          <Text style={{ fontSize: 18, fontWeight: '700', color: '#fff' }}>Order Gas</Text>
        </View>
        <View style={{ flexDirection: 'row', gap: 6, marginHorizontal: 16, marginBottom: 16 }}>
          <View style={{ flex: 1, height: 3, borderRadius: 2, backgroundColor: '#1484FF' }} />
          <View style={{ flex: 1, height: 3, borderRadius: 2, backgroundColor: '#1484FF' }} />
          <View style={{ flex: 1, height: 3, borderRadius: 2, backgroundColor: '#1E2A44' }} />
        </View>
        <Text style={{ fontSize: 15, color: '#fff', marginHorizontal: 16, marginBottom: 4 }}>Delivery location</Text>
        <Text style={{ fontSize: 12, color: '#8A93A6', marginHorizontal: 16, marginBottom: 12 }}>Drop a pin to mark your delivery spot</Text>
        <View style={{ height: 200, borderRadius: 14, backgroundColor: '#0a1530', borderWidth: 1, borderColor: '#1F2A3D', marginHorizontal: 16, alignItems: 'center', justifyContent: 'center' }}>
          <MapPin size={32} color="#1484FF" />
          <Text style={{ color: '#8A93A6', fontSize: 11, marginTop: 8 }}>Map integration coming soon</Text>
        </View>
        <Text style={{ fontSize: 15, color: '#fff', marginHorizontal: 16, marginTop: 18, marginBottom: 4 }}>Delivery address</Text>
        <TextInput 
          style={{ marginHorizontal: 16, backgroundColor: '#101723', borderWidth: 1, borderColor: '#1F2A3D', borderRadius: 14, padding: 14, color: '#fff', fontSize: 14, minHeight: 84, textAlignVertical: 'top' }}
          placeholder="Enter your address..."
          placeholderTextColor="#8A93A6"
          multiline
        />
        <View style={{ flexDirection: 'row', gap: 10, marginHorizontal: 16, marginTop: 16 }}>
          <TouchableOpacity onPress={() => router.back()} style={{ flex: 1, padding: 14, borderRadius: 14, borderWidth: 1, borderColor: '#1F2A3D', alignItems: 'center' }}>
            <Text style={{ color: '#fff', fontWeight: '600' }}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/order/summary')} style={{ flex: 1.4, padding: 14, borderRadius: 14, backgroundColor: '#1484FF', alignItems: 'center' }}>
            <Text style={{ color: '#fff', fontWeight: '600' }}>Continue</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}