import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { ChevronLeft, ShoppingCart } from 'lucide-react-native';

export default function CartScreen() {
  const router = useRouter();
  const cart: any[] = []; // Empty cart for now

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
            <ChevronLeft size={18} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Your Cart</Text>
        </View>

        {cart.length === 0 ? (
          <View style={styles.empty}>
            <ShoppingCart size={48} color="#1e2a44" />
            <Text style={styles.emptyText}>Your cart is empty</Text>
            <TouchableOpacity style={styles.browseBtn} onPress={() => router.push('/(tabs)/accessories')}>
              <Text style={styles.browseText}>Browse Accessories</Text>
            </TouchableOpacity>
          </View>
        ) : null}

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#070b14',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 14,
  },
  backBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#1a2236',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
  empty: {
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  emptyText: {
    color: '#8A93A6',
    marginTop: 10,
    fontSize: 14,
  },
  browseBtn: {
    backgroundColor: '#1484FF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 14,
    marginTop: 16,
  },
  browseText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
});