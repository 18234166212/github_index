/**
 * Created by huxx on 2016/12/15.
 */
app.directive("radioOption",function(){
    return {
        restrict:"A",
        link:function(scope,element){
            element.on("change",function(){
                var type=$(this).attr("type");
                var val=$(this).val();
                var data=$(this).attr("data");
                var isCheck=$(this).prop("checked");
                if(type=="radio"&&isCheck&&data=="fujia_xian"){
                    var fujia_obj={};
                    fujia_obj.choice=val;
                    fujia_obj.name=scope.fujia_proName;
                    scope.add_fujia=fujia_obj;
                    console.log(fujia_obj);
                    var add_fujiaArr=[];


                    if(!scope.fujiaSet){
                        scope.fujiaSet = {};
                    }console.info(fujia_obj.name);
                    if(!scope.fujiaSet[fujia_obj.name]){
                        scope.fujiaSet[fujia_obj.name] = fujia_obj;
                        add_fujiaArr.push(fujia_obj);
                        console.log(add_fujiaArr);
                    }else{
                        console.log('item exists');
                    }

                }else if(type=="radio"&&isCheck&&data=="zhu_xian"){
                    var zhu_obj={};
                    zhu_obj.choice=val;
                    zhu_obj.name=scope.zhuxian_proName;
                    scope.add_zhuxian=zhu_obj;
                    console.log(scope.add_zhuxian);
                    var add_zhuxianArr=[];

                    if(!scope.zhuxianSet){
                        scope.zhuxianSet = {};
                    }console.info(zhu_obj.name);
                    if(!scope.zhuxianSet[zhu_obj.name]){
                        scope.zhuxianSet[zhu_obj.name] = zhu_obj;
                        add_zhuxianArr.push(zhu_obj);
                        console.log(add_zhuxianArr);
                    }else{
                        console.log('item exists');
                    }
                }
                //强制消化
                // scope.$digest();
            })
        }
    }
});

