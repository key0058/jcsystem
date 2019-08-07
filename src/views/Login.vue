<template>
  <div>
    <Layout>
        <Header class="login-header"></Header>
        <Content class="login-content">
            <Card :bordered="false" dis-hover>
                <Row type="flex" justify="center">
                    <Col :xs="22" :md="6" class="login-frame">
                        <Card>
                            <p slot="title">JC管理系统平台登录</p>
                            <div>
                                <Form ref="formData" :model="formData" :rules="formValidate" label-position="left">
                                    <FormItem prop="username">
                                        <Input type="text" v-model="formData.username" placeholder="请填写账户/邮箱/电话">
                                            <Icon type="ios-person" slot="prepend"></Icon>
                                        </Input>
                                    </FormItem>
                                    <FormItem prop="password">
                                        <Input type="password" v-model="formData.password" placeholder="请填写密码">
                                            <Icon type="ios-lock" slot="prepend"></Icon>
                                        </Input>
                                    </FormItem>
                                    <FormItem prop="organizeCode">
                                        <Select v-model="formData.organizeCode" prefix="ios-home">
                                            <Option v-for="item in organizes" :value="item.value" :key="item.value">{{item.label}}</Option>
                                        </Select>
                                    </FormItem>
                                    <FormItem>
                                        <Button type="primary" long @click="handleSubmit('formData')">登入</Button>
                                        <br/>
                                        <Checkbox v-model="formData.rememberMe">记住我?</Checkbox>
                                    </FormItem>
                                </Form>
                            </div>
                        </Card>
                    </Col>
                    
                </Row>
            </Card>
        </Content>
        <CopyrightFooter />
    </Layout>
  </div>
</template>

<script>
import CopyrightFooter from "@/components/footer/Copyright.vue"
import router from "@/router.js"

export default {
  name: 'loginPanel',
  components: {
    CopyrightFooter
  },
  data() {
      return {
          formData: {
              username: "",
              password: "",
              organizeCode: "DG",
              rememberMe: ""
          },
          formValidate: {
              

          },
          organizes: [
              { value: "DG", label: "东莞" },
              { value: "HK", label: "香港" },
              { value: "SGD", label: "新加坡" }
          ]
      }
  },
  methods: {
        handleSubmit (name) {
            console.log(name);
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('Success!');
                    router.replace("/About")
                } else {
                    this.$Message.error('Fail!');
                }
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .login-header {
        background-color: white;
    }

    .login-content {
        background-color: white;
        padding: 1% 10%;
    }

    .login-frame {
        text-align: center;
    }

    .login-bg {
        padding: 5px;
    }
</style>
