/**
 * Created by huxinxin on 2016/12/15.
 */
/**
 * Created by huxx on 2016/12/15.
 */
app.directive("radioGroups",function(){
    return {
        restrict:"A",
        link:function(scope,element){
            element.on("change",function(){
                <!--不分性别，固定值-->
                var SexFixDate=angular.element(document.querySelector('.SexFixDate'))[0];
                <!--不分性别，对应交费期间-->
                var SexDate=angular.element(document.querySelector('.SexDate'))[0];
                <!--分性别，固定值-->
                var diffSexFixDate=angular.element(document.querySelector('.diffSexFixDate'))[0];
                <!--分性别，对应交费期间-->
                var differentSexDate=angular.element(document.querySelector('.differentSexDate'))[0];
                        var type=$(this).attr("type");
                        var val=$(this).val();
                        var name=$(this).attr("name");
                        var isCheck=$(this).prop("checked");
                        if((val==1&&name=="sex"&&isCheck)&&(val==3&&name=="date"&&isCheck)){
                            SexFixDate.style.display="block";
                            SexDate.style.display="none";
                            diffSexFixDate.style.display="none";
                            diffSexFixDate.style.display="none";
                        }else if((val==2&&name=="sex"&&isCheck)&&(val==4&&name=="date"&&isCheck)){
                            SexFixDate.style.display="none";
                            SexDate.style.display="block";
                            diffSexFixDate.style.display="none";
                            diffSexFixDate.style.display="none";
                        }else if((val==2&&name=="sex"&&isCheck)&&(val==3&&name=="date"&&isCheck)){
                            SexFixDate.style.display="none";
                            SexDate.style.display="none";
                            diffSexFixDate.style.display="block";
                            diffSexFixDate.style.display="none";
                        }else if((val==1&&name=="sex"&&isCheck)&&(val==4&&name=="date"&&isCheck)){
                            SexFixDate.style.display="none";
                            SexDate.style.display="none";
                            diffSexFixDate.style.display="none";
                            diffSexFixDate.style.display="block";
                        }
            })
        }
    }
});

