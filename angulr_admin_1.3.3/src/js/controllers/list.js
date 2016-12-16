/**
 * Created by huxx on 2016/12/8.
 */
app.controller("mainCtrl",["$scope","listService",function($scope,listService){
        $scope.options=[10,20,30,40];
        $scope.myOption = $scope.options[2];
        var getList = function (pageIndex) {
            var params = {
                "pageSize":context.pageSize,
                "pageIndex":pageIndex,
            };console.info(params)

            listService.getList(params,function(data){
                $scope.lists=data;
                var a;
                for(var i=0;i<data.length;i++){
                    if(data[i].typeLabels){
                        var label='';
                        data[i].typeLabels.forEach(function (item,index) {
                            if(label){
                                label+="、";
                            }
                            label+=item;
                        })
                        data[i].label=label;
                        console.log(label);
                    }
                }
            });
        }
        getList(1);
        $scope.onChange=function(){
                context.pageSize= parseInt(this.value);
                console.log(context.value);

                getList(1);
                // console.log(this.options[this.selectedIndex].text)
            };
    }])
    .factory("listService",["$http",function($http){
        return{
            getList:function(params,handler){
                $http.post("http://10.22.64.30:8082/BaoXianManage/product/list",
                   formatJson(params),{
                        headers: {"Content-Type": "application/x-www-form-urlencoded"}
                    }
                )
                    .success(function (res){
                        if(res && res.code == 0){
                            window.localStorage.setItem("list",res.data.list);
                                handler(res.data.list);
                        }else{
                            console.log(res.msg);
                        }
                });
            },
            show:function(){

            }
        }
    }])
//获取下拉列表pageSize
var context={
    pageSize:15,
};

function formatJson(json) {
    if(!json){
        throw new Error('invalid json');
    }

    // get all keys in json
    var keys = [];
    for (p in json) {
        if (json[p]) {
            keys.push(p);
        }
    }
    // sort keys
    keys.sort();
    // format json
    var jsonString = '',
        template = '{key}={value}';
    for (var i = 0; i < keys.length; i++) {
        if (jsonString) {
            jsonString += '&';
        }
        // add array as string
        jsonString += keys[i] + '=' + JSON.stringify(json[keys[i]]);
    }
    // add md5 check value TODO

    return jsonString;
}