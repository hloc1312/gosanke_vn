import React from 'react'
import './company.css'
import imageCompany from '../../../assets/images/company/compayny.jpg'
const Company = () => {
  return (
    <div className='facility company' id='company'>
        <h2 className='title'>
         Our Company
        </h2>
        <div className='grid grid-cols-3 gap-4'>
            <div >
                <img src={imageCompany} alt="" />
            </div>
            <div className="col-span-2 pl-[40px]">
            <dl className="company-left">
                <div>
                    <dt>Name of the company</dt>
                    <dd>Omosako Koi Farm Co., Ltd.</dd>
                </div>
                <div>
                    <dt>Representative</dt>
                    <dd>Omosako, Takashi</dd>
                </div>
                <div>
                    <dt>Address</dt>
                    <dd>178 Tochihara Cho, Kure City, 737-0922</dd>
                </div>
                <div>
                    <dt>Phone</dt>
                    <dd>0823-33-8903</dd>
                </div>
                <div>
                    <dt>Fax</dt>
                    <dd>0823-33-8906</dd>
                </div>
                <div>
                    <dt>Breeds we are producing</dt>
                    <dd>Shiro-Utsuri, Showa-Sanshoku, Ginrin-Shiroutsuri, Ginrin-showa, Goshoku, Kujaku</dd>
                </div>
            </dl>
            </div>
        </div>
    </div>
  )
}

export default Company