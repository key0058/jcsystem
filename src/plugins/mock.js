import Mock from 'mockjs'
import loginMock from '../mock/login'

Mock.mock('/Account/Login', 'post', loginMock.getTestData())

export default Mock