import React, { FC } from 'react'
import { Avatar,Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export const AvatarB:FC<PropsType>=props=>{
    return(
        <div data-testid="avatar-component">
            {
                props.avatar
                    ?<Image data-testid="image-antd-component" src={props.avatar} alt="..."/>
                    :<Avatar data-testid="avatar-antd-component" shape="square" size={64} icon={<UserOutlined />} />
            }
        </div>
    )
}

type PropsType={
    avatar:string
}