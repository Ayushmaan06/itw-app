import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Link } from 'expo-router';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@/context/ThemeContext';
import { Moon, Sun } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function Register() {
  const { isDark, theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#000' : '#fff' }]}>
      <LinearGradient
        colors={isDark ? ['#000', '#1a1a1a'] : ['#fff', '#f5f5f5']}
        style={styles.gradient}
      />
      
      <TouchableOpacity 
        style={[styles.themeToggle, { backgroundColor: isDark ? '#333' : '#f0f0f0' }]} 
        onPress={toggleTheme}
      >
        {isDark ? (
          <Sun size={20} color="#fff" />
        ) : (
          <Moon size={20} color="#000" />
        )}
      </TouchableOpacity>

      <Animated.View 
        entering={FadeInUp.delay(200).springify()} 
        style={styles.header}
      >
        <Text style={[styles.title, { color: isDark ? '#fff' : '#000' }]}>
          Create Account
        </Text>
        <Text style={[styles.subtitle, { color: isDark ? '#aaa' : '#666' }]}>
          Sign up to get started
        </Text>
      </Animated.View>

      <Animated.View 
        entering={FadeInDown.delay(400).springify()} 
        style={styles.form}
      >
        <TextInput
          placeholder="Full Name"
          placeholderTextColor={isDark ? '#666' : '#999'}
          style={[
            styles.input,
            { 
              backgroundColor: isDark ? '#1a1a1a' : '#f5f5f5',
              color: isDark ? '#fff' : '#000'
            }
          ]}
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor={isDark ? '#666' : '#999'}
          style={[
            styles.input,
            { 
              backgroundColor: isDark ? '#1a1a1a' : '#f5f5f5',
              color: isDark ? '#fff' : '#000'
            }
          ]}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={isDark ? '#666' : '#999'}
          secureTextEntry
          style={[
            styles.input,
            { 
              backgroundColor: isDark ? '#1a1a1a' : '#f5f5f5',
              color: isDark ? '#fff' : '#000'
            }
          ]}
        />
        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor={isDark ? '#666' : '#999'}
          secureTextEntry
          style={[
            styles.input,
            { 
              backgroundColor: isDark ? '#1a1a1a' : '#f5f5f5',
              color: isDark ? '#fff' : '#000'
            }
          ]}
        />

        <TouchableOpacity 
          style={[styles.button, { backgroundColor: '#007AFF' }]}
        >
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={[styles.footerText, { color: isDark ? '#aaa' : '#666' }]}>
            Already have an account?{' '}
          </Text>
          <Link href="/login" asChild>
            <TouchableOpacity>
              <Text style={styles.link}>Sign In</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  themeToggle: {
    position: 'absolute',
    top: 50,
    right: 20,
    padding: 10,
    borderRadius: 20,
  },
  header: {
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontFamily: 'Inter_700Bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
  },
  form: {
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 12,
    marginBottom: 16,
    paddingHorizontal: 16,
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  footerText: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
  },
  link: {
    color: '#007AFF',
    fontSize: 14,
    fontFamily: 'Inter_600SemiBold',
  },
});