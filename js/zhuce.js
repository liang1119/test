/**
 * Created by Administrator on 2018/5/19.
 */
$(function(){

   //注册表单

    $('#btt').click(function(){
        var name=$('#uname').val(); //获得注册账号的值
        var pas1=$('#pas1').val();//获得密码值
        var pas2=$('#pas2').val();

        //正则表达式
        var reg= /^[A-Za-z0-9]+$/;

        if( name===''||pas1===''||pas2===''){

            alert('错误')
        }else{

            if(reg.test(name)&&name.length>=6){

                if(reg.test(pas1)&&pas1.length>=6&&pas1.length<=12){

                    if(pas1===pas2){
                        localStorage.setItem('name',name);
                        localStorage.setItem('pas1',pas1);

                        $('#uname').val('');
                        $('#pas1').val('');
                        $('#pas2').val('');

                    }else{
                       alert('密码不一致')
                    }

                }else{
                    alert('密码需大于6位小于12位')


                }





            }else{
                alert('请输入正确6位以上账号名')



            }





        }





    })











})