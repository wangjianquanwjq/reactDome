import React from 'react'
import { history } from 'umi'
export default () => {
    const login = () => {
        history.push({
            pathname: "/assembly/table"
        })
    }
    return <>
        <span onClick={login}>我是登录</span>
    </>
}