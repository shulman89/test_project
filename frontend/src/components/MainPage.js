import Header from "./Header";
import Body from "./Body";
import '../css/mainpage.scss'

function MainPage() {
    return (
        <div className={'wrapper'}>
            <div className={'container'}>
                <Header/>
                <Body/>
            </div>
        </div>
    )
}

export default MainPage