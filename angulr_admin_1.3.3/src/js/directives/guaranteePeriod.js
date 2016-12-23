/**
 * Created by huxinxin on 2016/12/15.
 */
/**
 * Created by huxx on 2016/12/15.
 */
app.directive("radioGroups", function ($parse) {
    return {
        restrict: "A",
        scope:false,
        link: function (scope, element, attrs) {
            element.on("change", function () {
                // console.log('guaranteeSexNum:' + scope.guaranteeSexNum);
                // console.log('guaranteePeriodNum:' + scope.guaranteePeriodNum);
                scope.result = scope.guaranteeSexNum + scope.guaranteePeriodNum;
                switch (scope.result) {
                    case '11':
                        break;
                    case '12':
                        break;
                    case '21':
                        break;
                    case '22':
                        break;
                }
                // console.log(scope.result);
            })
        }
    }
});

