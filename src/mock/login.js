import Mock from 'mockjs'

const testArray = Mock.mock({
    'array|1-10': [
        {
            'name|+1': [
                'hello',
                'mock.js',
                '!'
            ]
        }
    ]
})

export default {
    getTestData: () => ({
        status: 200,
        data: testArray
    })
}