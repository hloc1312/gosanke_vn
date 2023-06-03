import React from 'react'
import './history.css'
import CardWeDo from '../../../components/Molecules/CardWeDo/CardWeDo'
import kome from '../../../assets/images/history/1978.jpg'
const History = () => {
  return (
    <div className='history'>
        <h2>HISTORY</h2>
        <p className='history_bar'></p>
        <div className="history-wrapper grid grid-cols-2 gap-x-4">
            <div className='history-left'>
                <dl className="smpl_dl">
                    <div>
                        <dt>1960</dt>
                        <dd>1960 Omosako Koi Farm was established.</dd>
                    </div>
                    <div>
                        <dt>1973</dt>
                        <dd>1973 Koi farm was built at Tochihara Cho.</dd>
                    </div>
                    <div>
                        <dt>1978</dt>
                        <dd>1978 First encounter with the koi to come up with production of Shiro-Utsuri<span className="mini">※</span></dd>
                    </div>
                    <div>
                        <dt>1979</dt>
                        <dd>1979 Startup to produce Shiro-Utsuri</dd>
                    </div>
                    <div>
                        <dt>1981</dt>
                        <dd>1981 ‘Ganso’ parent koi from Sakai was introduced.</dd>
                    </div>
                    <div>
                        <dt>1984</dt>
                        <dd>1985 Male parent koi from Niigata was introduced.</dd>
                    </div>
                    <div>
                        <dt>1990</dt>
                        <dd>1989 Parent koi ‘Tokumitsu’ was introduced.</dd>
                    </div>
                    <div>
                        <dt>1992</dt>
                        <dd>1992 Omosako Koi Farm Co., Ltd. was established.</dd>
                    </div>
                    <div>
                        <dt>1992</dt>
                        <dd>1992 Parent koi ‘Tatsuma-Utsuri’ was introduced.</dd>
                    </div>
                </dl>
                <div className='history-left-kome '>
                    <div className="kome-left">
                        <p>
                            <img src={kome} className="max" alt=""/>
                        </p>
                    </div>
                    <div className="kome-right">
                        <p>1st All Chugoku District Convention</p>
                        <p>Comprehensive Grand Champion was awarded to Shiro-Utsuri</p>
                        <p>Producer:Sakai Koi Farm</p>
                    </div>
                </div>
            </div>
            <div className='history-right'>
                <CardWeDo image={require('../../../assets/images/history/bg_3.jpg')} nameLightBox='history'/>
            </div>
        </div>
    </div>
  )
}

export default History