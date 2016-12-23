/**
 * Created by huxx on 2016/12/18.
 */
app.directive("myBlur",function(){
    return {
        restrict:"A",
        link:function(scope,element){
            element.on("change",function(){
                var val=$(this).val();
                var reg=/^\d{2}$/;
                var matchNumberLimit=reg.test(val)
                    if(matchNumberLimit==false){
                        // alert("缴费期间输入格式错误，请重新输入!");
                        alert("输入格式错误，请重新输入!");
                    }
            })
        }
    }
});
app.directive("jobBlur",function(){
    return {
        restrict:"A",
        link:function(scope,element){
            element.on("change",function(){
                var val=$(this).val();
                var reg=/^\d{1}$/;
                var jobType=reg.test(val);
                if(jobType==false){
                    alert("只能输入一位数字！");
                }
            })
        }
    }
});
app.directive("paymentBlur",function(){
    return {
        restrict:"A",
        link:function(scope,element){
            element.on("change",function(){
                var val=$(this).val();
                var reg=/^\d{3}$/;
                var MaxPaymentType=reg.test(val);
                if(MaxPaymentType==false){
                    alert("交费上限输入格式错误，请重新输入！");
                }
            })
        }
    }
});
app.directive("intervalBlur",function(){
    return {
        restrict:"A",
        link:function(scope,element){
            element.on("change",function(){
                var val=$(this).val();
                var reg=/^\d{3}$/;
                var interval=reg.test(val);
                if(interval==false){
                    alert("交费频率输入格式错误，请重新输入！");
                }
            })
        }
    }
});
app.directive("rateBlur",function(){
    return {
        restrict:"A",
        link:function(scope,element){
            element.on("change",function(){
                var val=$(this).val();
                var reg=/^((\d+\.?\d*)|(\d*\.\d+))\%$/;;
                var rate=reg.test(val);
                if(rate==false){
                    alert("只能输入百分比数字！");
                }
            })
        }
    }
});
app.directive("guaranteeBlur",function(){
    return {
        restrict:"A",
        link:function(scope,element){
            element.on("change",function(){
                var val=$(this).val();
                var reg=/^\d{0,3}$/;
                var guarantee=reg.test(val);
                if(guarantee==false){
                    alert("保障期限输入格式错误，请重新输入！");
                }
            })
        }
    }
});
app.directive("benefitBlur",function(){
    return {
        restrict:"A",
        link:function(scope,element){
            element.on("change",function(){
                var val=$(this).val();
                var reg=/[^\d.]/g;
                var MaxPaymentType=reg.test(val);
                if(MaxPaymentType==false){
                    alert("受益金额输入格式错误，请重新输入！");
                }
            })
        }
    }
});
app.directive("valueBlur",function(){
    return {
        restrict:"A",
        link:function(scope,element){
            element.on("change",function(){
                var val=$(this).val();
                var reg=/^\d{3}$/;
                var MaxPaymentType=reg.test(val);
                if(MaxPaymentType==false){
                    alert("受益金额输入格式错误，请重新输入！");
                }
            })
        }
    }
});
app.directive("stageBlur",function(){
    return {
        restrict:"A",
        link:function(scope,element){
            element.on("change",function(){
                var val=$(this).val();
                var reg=/^\d$/;
                var MaxPaymentType=reg.test(val);
                if(MaxPaymentType==false){
                    alert("受益金额输入格式错误，请重新输入！");
                }
            })
        }
    }
});
app.directive("baofeiBlur",function(){
    return {
        restrict:"A",
        link:function(scope,element){
            element.on("change",function(){
                var val=$(this).val();
                var reg=/^\d$/;
                var MaxPaymentType=reg.test(val);
                if(MaxPaymentType==false){
                    alert("费率单一条件输入格式错误，请重新输入！");
                }
            })
        }
    }
});



