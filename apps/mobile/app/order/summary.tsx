import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { ChevronLeft, Wallet, Smartphone, Clock, ChevronRight } from 'lucide-react-native';

export default function OrderSummaryScreen() {
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
          <View style={{ flex: 1, height: 3, borderRadius: 2, backgroundColor: '#1484FF' }} />
        </View>
        <View style={{ marginHorizontal: 16, backgroundColor: '#101723', borderWidth: 1, borderColor: '#1F2A3D', borderRadius: 14, padding: 16 }}>
          <Text style={{ fontSize: 14, fontWeight: '600', color: '#fff', marginBottom: 12 }}>Order Summary</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 7 }}>
            <Text style={{ fontSize: 13, color: '#8A93A6' }}>Type</Text>
            <Text style={{ fontSize: 13, color: '#fff', fontWeight: '600' }}>Swap Refill</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 7 }}>
            <Text style={{ fontSize: 13, color: '#8A93A6' }}>Size</Text>
            <Text style={{ fontSize: 13, color: '#fff', fontWeight: '600' }}>12kg</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 7 }}>
            <Text style={{ fontSize: 13, color: '#8A93A6' }}>Delivery</Text>
            <Text style={{ fontSize: 13, color: '#34d399', fontWeight: '600' }}>Within 2 hours</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 7 }}>
            <Text style={{ fontSize: 13, color: '#8A93A6' }}>Cylinder (12kg)</Text>
            <Text style={{ fontSize: 13, color: '#fff', fontWeight: '600' }}>UGX 100,000</Text>
          </View>
          <View style={{ borderTopWidth: 1, borderTopColor: '#1F2A3D', marginTop: 8, paddingTop: 14, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 15, color: '#fff', fontWeight: '600' }}>Total</Text>
            <Text style={{ fontSize: 15, color: '#1484FF', fontWeight: '700' }}>UGX 100,000</Text>
          </View>
        </View>
        <Text style={{ fontSize: 13, color: '#8A93A6', marginHorizontal: 16, marginTop: 18, marginBottom: 10 }}>Pay with</Text>
        <View style={{ marginHorizontal: 16, gap: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, backgroundColor: '#101723', borderWidth: 1, borderColor: '#1484FF', borderRadius: 14, padding: 14 }}>
            <Wallet size={18} color="#fff" />
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 14, fontWeight: '600', color: '#fff' }}>Gasmobil Wallet</Text>
              <Text style={{ fontSize: 11, color: '#8A93A6' }}>Balance: UGX 0</Text>
            </View>
            <ChevronRight size={16} color="#8A93A6" />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, backgroundColor: '#101723', borderWidth: 1, borderColor: '#1F2A3D', borderRadius: 14, padding: 14 }}>
            <Smartphone size={18} color="#fff" />
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 14, fontWeight: '600', color: '#fff' }}>Mobile Money</Text>
              <Text style={{ fontSize: 11, color: '#8A93A6' }}>M-Pesa / Airtel</Text>
            </View>
            <ChevronRight size={16} color="#8A93A6" />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, backgroundColor: '#101723', borderWidth: 1, borderColor: '#1F2A3D', borderRadius: 14, padding: 14 }}>
            <Clock size={18} color="#fff" />
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 14, fontWeight: '600', color: '#fff' }}>Pay Later</Text>
              <Text style={{ fontSize: 11, color: '#8A93A6' }}>For verified businesses</Text>
            </View>
            <ChevronRight size={16} color="#8A93A6" />
          </View>
        </View>
        <View style={{ flexDirection: 'row', gap: 10, marginHorizontal: 16, marginTop: 16 }}>
          <TouchableOpacity onPress={() => router.back()} style={{ flex: 1, padding: 14, borderRadius: 14, borderWidth: 1, borderColor: '#1F2A3D', alignItems: 'center' }}>
            <Text style={{ color: '#fff', fontWeight: '600' }}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/(tabs)/tracking')} style={{ flex: 1.4, padding: 14, borderRadius: 14, backgroundColor: '#1484FF', alignItems: 'center' }}>
            <Text style={{ color: '#fff', fontWeight: '600' }}>Place Order</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}