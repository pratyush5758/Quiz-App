import {Dimensions, StyleSheet, TextInput} from 'react-native';
import {Box, Image, Pressable, Row, ScrollView, Text} from 'native-base';

const Login = () => {
  return (
    <Box safeArea flex={1} bgColor={'#fff'}>
      <ScrollView>
        <Box
          bgColor={'#000'}
          height={Dimensions.get('window').height / 3}
          width={Dimensions.get('window').width / 2.2}
          borderRightRadius={'full'}
          mt={-20}
          ml={-10}
          justifyContent={'center'}
          alignItems={'center'}>
          <Text color={'#fff'} textAlign={'center'} fontSize={'lg'} mt={10}>
            Login
          </Text>
        </Box>
        <Box alignSelf={'center'} mt={5}>
          <Image
            alt=""
            source={{
              uri: 'data:image/jpeg;base64,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',
            }}
            resizeMode={'contain'}
            borderRadius={6}
            size={10}
          />
        </Box>
        <Box shadow={6} bgColor={'#fff'} ml={4} height={'44%'} mt={6} mb={5}>
          <Row alignItems={'center'} borderBottomWidth={0.5} m={5}>
            <Image
              alt=""
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/456/456212.png',
              }}
              size={5}
            />
            <TextInput
              placeholder="Username"
              placeholderTextColor={'#000'}
              style={{marginLeft: 16, fontSize: 15, color: '#000'}}
            />
          </Row>
          <Row alignItems={'center'} borderBottomWidth={0.5} m={5}>
            <Image
              alt=""
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/3064/3064155.png',
              }}
              size={5}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor={'#000'}
              style={{marginLeft: 16, fontSize: 15, color: '#000'}}
            />
          </Row>
          <Pressable alignSelf={'flex-end'} mr={5}>
            <Text fontSize={'sm'}>Forgot Password?</Text>
          </Pressable>
          <Pressable
            bgColor={'black'}
            py={2}
            width={'30%'}
            alignItems={'center'}
            shadow={2}
            alignSelf={'flex-end'}
            mt={6}>
            <Row alignItems={'center'}>
              <Text fontSize={'sm'} color={'#fff'}>
                Login
              </Text>
              <Image
                alt=""
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/545/545783.png',
                }}
                size={5}
                ml={2}
                color={'#fff'}
              />
            </Row>
          </Pressable>
        </Box>
        <Row justifyContent={'center'} mt={10}>
          <Pressable>
            <Text color={'#000'} fontSize={'sm'}>
              Don't have an account?
            </Text>
          </Pressable>
          <Pressable>
            <Text bold fontSize={'sm'} ml={1}>
              Signup
            </Text>
          </Pressable>
        </Row>
      </ScrollView>
    </Box>
  );
};

export default Login;

const styles = StyleSheet.create({});
