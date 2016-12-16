/**
 * Created by huxx on 2016/12/15.
 */
/*种类标签*/
app.service("commonService",["$http",function($http){
        this.getTypeLabel=function(handler){
            $http.get("data/typeLabels.json").success(function(data){
                handler(data);
            })
        }
        this.getDate=function(handler){
            $http.get("data/day_sui.json").success(function(data){
                handler(data);
            })
        }
        this.getGenderLimited=function(handler){
            $http.get("data/genderLimited.json").success(function(data){
                handler(data);
            })
        }
}])