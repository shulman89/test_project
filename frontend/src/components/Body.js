import '../../src/css/body.scss'
import {useEffect, useState} from "react";
import axios from "axios";
import button from '../media/button.png'


function Body() {
    const [advantages, setAdvantages] = useState()
    useEffect(() => {
        axios
            .get('https://testigorek.site/advantages/')
            .then((response) => {
                setAdvantages(response.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);
    return (
        <div className={'body-container'}>
            <div className={'body-left'}>
                <div className={'body-title'}>
                    <h1>Путешествие<br/><span>
                         на красную планету
                    </span></h1>
                </div>
                <div className={'start-button'}>
                    <img src={button} alt={'button'}/>
                </div>
            </div>
            <div className={'body-right'}>
                {advantages &&
                    <div className={'advantage-block'}>
                        <div className={'block-half'}>
                            <div className={'advantage first'}>
                                <div>{advantages[0].upper}</div>
                                <div className={'advantage-num'}>{advantages[0].medium}</div>
                                <div>{advantages[0].lower}</div>
                            </div>
                            <div className={'advantage second'}>
                                <div>{advantages[1].upper}</div>
                                <div className={'advantage-num'}>{advantages[1].medium}</div>
                                <div>{advantages[1].lower}</div>
                            </div>
                        </div>
                        <div className={'block-half'}>
                            <div className={'advantage third'}>
                                <div>{advantages[2].upper}</div>
                                <div className={'advantage-num'}>{advantages[2].medium}</div>
                                <div>{advantages[2].lower}</div>
                            </div>
                            <div className={'advantage fourth'}>
                                 <div>{advantages[3].upper}</div>
                                <div className={'advantage-num'}>{advantages[3].medium}</div>
                                <div>{advantages[3].lower}</div>
                            </div>
                        </div>
                    </div>}
            </div>
        </div>

    )
}

export default Body