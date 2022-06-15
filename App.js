import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, StatusBar, SafeAreaView, ScrollView, useWindowDimensions, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SliderBox } from './components/Sliderbox';

const uri = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='

// 식물인식 이미지 파일 import
import Plantrecog from './images/plantrecog.jpeg';

// 식물병 이미지 파일 import
import PlantDisease from './images/plantreal.png';


import PlantCute from './images/plant_cute.jpeg';

// 플랜트 닥터 로고 이미지 파일 import

import PlantLogo from './images/website_logo.png';

// 검색 이미지 파일 import
import Search from './images/search.png';
import { white } from 'chalk';


const styles = StyleSheet.create({
    profile: {
    borderRadius:100,
    height:50,
    width:50
    },

    profile1: {
    borderRadius:100,
    height:100,
    width:100
    },

    picture: {
    height: 300,
    width: 330,
    marginHorizontal:10,
    borderRadius:5
    },

    tinyLogo: {
    height: 25,
    width: 25,
    },

    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },

    header: {
    width: '100%',
    justifyContent: 'center',
    height: '7%',
    marginBottom: 10
    },

    title: {
    height: '3%',
    width: '100%',
    borderRadius: 10,

    },

    content: {
    marginTop: 5,
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 30
    },

    content2: {
    flex: 1
    },

    content3: {
    backgroundColor: 'skyblue',
    width: '90%',
    height: '5%',
    flexDirection: 'row',
    alignItems: 'center'
    },

    footer: {
    margin: 10,
    backgroundColor: 'green',
    width: '90%',
    height: '20%',
    borderRadius: 10
    },

    HomescreenBox : {
        borderRadius:5,
        marginTop:'20%',
        backgroundColor: '#f9f9f9',
        padding:'10%',
        width:350
    },

    HomescreenBox_font : {
        fontSize:18,
        textAlign:'center'
    },
    
    logo : {
        width: '100%',
        height: 55,
    },

    loginButton : {
        flexDirection: 'row',
        backgroundColor:'#04AA6D',
        marginHorizontal:60,
        height:'50%',
        width:'22%',
        marginTop:30,
        borderRadius:5,
        padding:'2%',
    },
    
    logoStyles : {
        flexDirection: 'row',
        marginHorizontal: 25, width:'60%', marginTop:20
    },

    RecogContent : {
        alignItems:'center',
        marginTop:'15%'
    },
    
    MainText : {
        fontSize:30, 
        marginTop:'15%',
        textAlign:'center', 
    },

    PlantButton : {
        backgroundColor:'#04AA6D',
        borderRadius:5,
        width:310,
        marginHorizontal:20 ,
        marginTop:'5%',
    },

    PlantButtonFont : {
        textAlign:'center',
        fontSize:20,
        padding:'5%',
        color:'white',        
    },

    PlantPlusImage : {
        width:'40%',
        height:160,
        marginHorizontal:'30%'
    }
    ,
    searchBox : {
        borderRadius:5,
        marginTop:'10%',
        backgroundColor: '#f9f9f9',
        padding:'5%',
        width:'70%',
    },
    searchIcon : {
        width:50,
        height:53,
        borderRadius:10,
        marginTop:40,
        marginLeft:10
    }

});

function HomeScreen() {
    //반응형 코드
    const {width, height} = useWindowDimensions();
    return (
    <View style={styles.container}>
    <View style={styles.header}>

    <View style={styles.logoStyles}>
    <Image style={styles.logo} source={PlantLogo} />

    <TouchableOpacity style={styles.loginButton}>
        <Text style={{fontWeight:'bold', fontSize:16}}>로그인</Text>
    </TouchableOpacity>

    </View>

    </View>

    <View style={styles.title}>
    <View>

    <View style={{ justifyContent: 'center', margin: 5, marginTop: 50, marginLeft: 10 }}>
    </View>

    </View>

    <View style={{ alignItems: 'flex-end', width: '60%', flexDirection: 'column' }}>
    </View>

    </View>

    <View style={styles.content}>
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>

    <View style={styles.HomescreenBox}>
    <Text style={styles.HomescreenBox_font}>서울특별시</Text>
    <Text style={styles.HomescreenBox_font}>온도: 24'c</Text>
    </View>

    <View style={styles.HomescreenBox}>
    <Text style={styles.HomescreenBox_font}>습도</Text>
    <Text style={styles.HomescreenBox_font}>자외선 지수</Text>
    </View>

    <View style={styles.HomescreenBox}>
    <Text style={styles.HomescreenBox_font}>15시</Text>
    <Text style={styles.HomescreenBox_font}>24'c</Text>
    </View>

    <View style={styles.HomescreenBox}>
    <Image style={styles.PlantPlusImage} source={PlantCute} />
    <Text style={styles.HomescreenBox_font}>식물을 추가해주세요</Text>
    </View>

    </ScrollView>

    </SafeAreaView>

    </View>
    </View>
);
}


// 식물인식 화면
function SettingsScreen() {
    //반응형 코드
    const {width, height} = useWindowDimensions();
    return (   
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

    <SafeAreaView style={styles.container}>
    
    <ScrollView style={styles.scrollView}>

        <Text style={styles.MainText}>촬영으로 정보조회</Text>

        <View style={{justifyContent:'center', marginTop:'15%'}}>
        <Image style={styles.picture} source={Plantrecog} />
        </View>

        <View style={styles.RecogContent}>
            <Text style={{fontSize:19, marginBottom:'2%'}}>식물의 이미지 데이터를 분석해 </Text>
            <Text style={{fontSize:19, marginBottom:'2%'}}>어떤 식물인지 알아내고 관련된 정보</Text>
            <Text style={{fontSize:19, marginBottom:'2%'}}> 제공를 통해 식물을 더 잘 관리할 수 있어요.</Text>
        </View>
        
        <TouchableOpacity style={styles.PlantButton}>
            <Text style={styles.PlantButtonFont}>나의 식물 가져오기</Text>
        </TouchableOpacity>

    </ScrollView>
    
    </SafeAreaView>
    
    </View>
    
    );
    
    }
    
    function EventsScreen() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <SafeAreaView style={styles.container}>
        
        <ScrollView style={styles.scrollView}>

            <Text style={styles.MainText}>촬영으로 식물병 조회</Text>

            <View style={{justifyContent:'center', marginTop:'15%'}}>
            <Image style={styles.picture} source={PlantDisease} />
            </View>

            <View style={styles.RecogContent}>
                <Text style={{fontSize:19, marginBottom:'2%'}}>식물의 이미지 데이터를 분석해 </Text>
                <Text style={{fontSize:19, marginBottom:'2%'}}>식물이 어떤 식물병에 걸렸는지</Text>
                <Text style={{fontSize:19, marginBottom:'2%'}}>확인하고 정보를 제공 받을 수 있어요.</Text>
            </View>
            
            <TouchableOpacity style={styles.PlantButton}>
                <Text style={styles.PlantButtonFont}>나의 식물 가져오기</Text>
            </TouchableOpacity>

        </ScrollView>
        
        </SafeAreaView>
        
        </View>
    
        );
        
        }

    function HealthsScreen() {
        return (
        
        <View style={{ flex: 1, justifyContent: 'flex-start' }}>
        
        <SafeAreaView style={styles.container}>
            <View style={{flexDirection:'row'}}>
                <TextInput style={styles.searchBox}>
                    
                </TextInput>
        
                <TouchableOpacity>
                    <Image style={styles.searchIcon} source={Search} />
                </TouchableOpacity>

            </View>


        
        <ScrollView style={styles.scrollView}>

        
        </ScrollView>
 
        </SafeAreaView>
        
        </View>   
        );  
    }

        // 프로필 화면 부분 주석
        // function ProfileScreen() {
            
        //     return (
    
        //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>        
        //     <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-start', height: '5%', margin: 10 }}>
            
        //     <View style={{width: '10%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', width: '80%', borderRadius: 9, marginRight: 20 }}>   
        //     <View style={{marginHorizontal:10}}>  
        //     <Text style={{fontWeight:'bold', fontSize:20}}>Younwoo</Text>  
        //     </View>

        //     <Image style={styles.tinyLogo} source={{ uri: uri }} />  
        //     </View>
            
        //     <View style={{justifyContent:'center', flexDirection:'row', marginTop:5}}>            
        //     <Image style={styles.tinyLogo} source={{ uri: uri }} /> 
        //     <View style={{marginHorizontal:10}}>
        //     <Image style={styles.tinyLogo} source={{ uri: uri }} /> 
        //     </View>
            
        //     </View>   
        //     </TouchableOpacity>
            
        //     <View style={{flexDirection:'row', alignItems:'center'}}>         
        //     <View style={{borderRadius:100, justifyContent:'flex-start'}}>
            
        //     <Image style={styles.profile1} source={{ uri: "https://source.unsplash.com/1024x768/?girl" }} />
            
        //     </View>
            
        //     <View style={{flexDirection:'column', marginHorizontal:20, alignItems:'center'}}>
            
        //     <Text style={{fontWeight:'bold'}}>12</Text>
            
        //     <Text>게시물</Text>
            
        //     </View>
            
        //     <View style={{flexDirection:'column', alignItems:'center', marginHorizontal:20}}>
            
        //     <Text style={{fontWeight:'bold'}}>35</Text>
            
        //     <Text>팔로워</Text>
            
        //     </View>
            
        //     <View style={{flexDirection:'column', alignItems:'center', marginHorizontal:20}}>
            
        //     <Text style={{fontWeight:'bold'}}>315</Text>
            
        //     <Text>팔로잉</Text>
            
        //     </View>
            
        //     </View>
            
        //     <View style={{margin:10,justifyContent:'flex-start', marginRight:180}}>
            
        //     <Text>연우</Text>
            
        //     <Text>일상을 공유하는 계정입니다.</Text>
            
        //     </View>
            
        //     <TouchableOpacity style={{borderColor:'grey', borderWidth:1, borderRadius:5, borderEndColor:'red', margin:10, width:'90%', height:'4%', justifyContent:'center', alignItems:'center'}}>
            
        //     <Text>프로필 편집</Text>
            
        //     </TouchableOpacity>
            
        //     <SafeAreaView style={styles.container}>
            
        //     <ScrollView style={styles.scrollView}>
            
        //     <View style={{ flexDirection: 'row' }}>
            
        //     <Image style={styles.picture} source={{ uri: 'https://source.unsplash.com/1024x768/?nature' }} />
        //     <Image style={styles.picture} source={{ uri: 'https://images.unsplash.com/photo-1586941962765-d3896cc85ac8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80' }} />
        //     <Image style={styles.picture} source={{ uri: "https://source.unsplash.com/1024x768/?girl" }} />
            
        //     </View>

            

        
    
            
        //     </ScrollView>
            
        //     </SafeAreaView>
            
        //     </View>
            
        //     );
            
        //     }
            
        const Tab = createBottomTabNavigator();
            
        export default function App() {
            
        return (
            
            <NavigationContainer>
            
            <Tab.Navigator>
            <Tab.Screen name="홈" component={HomeScreen} />
            <Tab.Screen name="식물인식" component={SettingsScreen} />
            <Tab.Screen name="식물병 인식" component={EventsScreen} />
            <Tab.Screen name="식물검색" component={HealthsScreen} />
            
            {/* 프로필부분 주석 */}
            {/* <Tab.Screen name="프로필" component={ProfileScreen} /> */}          
            </Tab.Navigator>
            </NavigationContainer>
            
            );
            
        }