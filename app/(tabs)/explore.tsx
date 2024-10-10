import { Link } from "expo-router"
import {Text, View} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
const explore = ()=>{
    return (
        <SafeAreaView>
            <Text>Explore Page</Text>
            <Link href={"../accountInfo"}>
                <Text>Account Information</Text>
            </Link>
        </SafeAreaView>
    )
}
export default explore