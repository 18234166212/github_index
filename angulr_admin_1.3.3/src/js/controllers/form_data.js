/**
 * Created by huxx on 2016/12/12.
 */
/*产品录入页面js文件*/
app.controller('formCtrl', function ($scope, $http, $timeout, fileReader,commonService) {
    $scope.formData = {
        // name: "",
        // shortName: "",
        // insuranceRecordNumber: "",
        // company: "",
        // xian_company:"",
        // guaranteePeriodName:"",
        // fixValue:"",
        // purchaseOnLine:"",
        // moneyOnLine:"",
        // fixAge:"",
        // ageOffLine:"",
        // ageOnLine:""
    };
    $scope.formData.company={};
    $scope.submit = function (formData) {
        formData.ageOffLine=$scope.ageOffLineNum+$scope.offPeriod.name;
        formData.ageOnLine=$scope.ageOnLineNum+$scope.upPeriod.name;
        formData.company = formData.company.name;
        formData.add_fujia=$scope.add_fujia;
        formData.add_zhuxian=$scope.add_zhuxian;
        console.info(formData);
    }
    /*上传封面图片*/
    $scope.getFile = function () {
        fileReader.readAsDataUrl($scope.file, $scope)
            .then(function (result) {
                console.info(result);
                $scope.productPicture = result;
                $scope.planPicture = result;
                console.log(result);
            });
    };
    var handleFileSelect = function (evt) {
        var file = evt.currentTarget.files[0];
        var reader = new FileReader();
        reader.onload = function (evt) {
            $scope.$apply(function ($scope) {
                $scope.productPicture = evt.target.result;
            });
        };
        reader.readAsDataURL(file);
    };
    var handleListFileSelect = function (evt) {
        var file = evt.currentTarget.files[0];
        var reader = new FileReader();
        reader.onload = function (evt) {
            $scope.$apply(function ($scope) {
                $scope.planPicture = evt.target.result;
            });
        };
        reader.readAsDataURL(file);
    };
    angular.element(document.querySelector('#fileListInput')).on('change', handleFileSelect);
    angular.element(document.querySelector('#fileInput')).on('change', handleListFileSelect);

    $scope.disabled = undefined;
    $scope.searchEnabled = undefined;

    $scope.enable = function () {
        $scope.disabled = false;
    };

    $scope.disable = function () {
        $scope.disabled = true;
    };

    $scope.enableSearch = function () {
        $scope.searchEnabled = true;
    }

    $scope.disableSearch = function () {
        $scope.searchEnabled = false;
    }

    $scope.clear = function () {
        $scope.person.selected = undefined;
        $scope.address.selected = undefined;
        $scope.country.selected = undefined;
    };
    $scope.company = {};
    $scope.companies = [
        {name: 'Adam', email: 'adam@email.com', age: 12, country: 'United States'},
        {name: 'Amalie', email: 'amalie@email.com', age: 12, country: 'Argentina'},
        {name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina'},
        {name: 'Adrian', email: 'adrian@email.com', age: 21, country: 'Ecuador'},
        {name: 'Wladimir', email: 'wladimir@email.com', age: 30, country: 'Ecuador'},
        {name: 'Samantha', email: 'samantha@email.com', age: 30, country: 'United States'},
        {name: 'Nicole', email: 'nicole@email.com', age: 43, country: 'Colombia'},
        {name: 'Natasha', email: 'natasha@email.com', age: 54, country: 'Ecuador'},
        {name: 'Michael', email: 'michael@email.com', age: 15, country: 'Colombia'},
        {name: 'Nicolás', email: 'nicolas@email.com', age: 43, country: 'Colombia'}
    ];
/*保险种类切换*/
    $scope.insuranceTypes = [
        {name:"主险",value:"1",default:true,},
        {name:"附加险",value:"2",default:false,}
    ];
    $scope.onTypeSelectChange = function (value) {
        console.info(value);
        if(value==1){
            fujia_xian.style.display="block";
            add_zhuxian.style.display="none";
        }else if(value==2){
            fujia_xian.style.display="none";
            add_zhuxian.style.display="block";
        }
    }
    /*选中主险下面对应显示添加附加险，选中附加险下面对应显示添加主险*/
    /*获取添加附加险元素*/
    var fujia_xian=angular.element(document.querySelector('.fujia_xian'))[0];
   /*获取主险元素*/
    var add_zhuxian=angular.element(document.querySelector('.add_zhuxian'))[0];
    /*添加附加险的公司名称*/
    $scope.fujia_productName = {};
    $scope.fujia_productNames = [
        {name: 'Adam', email: 'adam@email.com', age: 12, country: 'United States'},
        {name: 'Amalie', email: 'amalie@email.com', age: 12, country: 'Argentina'},
        {name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina'},
        {name: 'Adrian', email: 'adrian@email.com', age: 21, country: 'Ecuador'},
        {name: 'Wladimir', email: 'wladimir@email.com', age: 30, country: 'Ecuador'},
        {name: 'Samantha', email: 'samantha@email.com', age: 30, country: 'United States'},
        {name: 'Nicole', email: 'nicole@email.com', age: 43, country: 'Colombia'},
        {name: 'Natasha', email: 'natasha@email.com', age: 54, country: 'Ecuador'},
        {name: 'Michael', email: 'michael@email.com', age: 15, country: 'Colombia'},
        {name: 'Nicolás', email: 'nicolas@email.com', age: 43, country: 'Colombia'}
    ];
    /*点击主险，下面显示添加附加险，下拉菜单值的改变的监听*/
    var fujia_productNameArr=[];
    var zhuxianSet = {};
    $scope.selectFujiaValueChange=function(fujia_productName){
        if(!zhuxianSet[fujia_productName.name]){
            zhuxianSet[fujia_productName.name] = fujia_productName.name;
            fujia_productNameArr.push(fujia_productName.name);
            $scope.fujia_productNameArr=fujia_productNameArr;
        }else{
            console.log("item exists");
        }
    }
    /*添加主险部分*/
    $scope.zhuxian_productName = {};
    $scope.zhuxian_productNames = [
        {name: 'cdam', email: 'adam@email.com', age: 12, country: 'United States'},
        {name: 'cmalie', email: 'amalie@email.com', age: 12, country: 'Argentina'},
        {name: 'cstefanía', email: 'estefania@email.com', age: 21, country: 'Argentina'},
        {name: 'ddrian', email: 'adrian@email.com', age: 21, country: 'Ecuador'},
        {name: 'dladimir', email: 'wladimir@email.com', age: 30, country: 'Ecuador'},
        {name: 'damantha', email: 'samantha@email.com', age: 30, country: 'United States'},
        {name: 'eicole', email: 'nicole@email.com', age: 43, country: 'Colombia'},
        {name: 'eatasha', email: 'natasha@email.com', age: 54, country: 'Ecuador'},
        {name: 'eichael', email: 'michael@email.com', age: 15, country: 'Colombia'},
        {name: 'hicolás', email: 'nicolas@email.com', age: 43, country: 'Colombia'}
    ];
    /*点击附加险，下面显示添加主险*/
    var zhuxian_productNameArr=[];
    var fujiaxianSet = {};
    $scope.selectZhuValueChange=function(zhuxian_productName){
        if(!fujiaxianSet[zhuxian_productName.name]){
            fujiaxianSet[zhuxian_productName.name] = zhuxian_productName.name;
            zhuxian_productNameArr.push(zhuxian_productName.name);
            $scope.zhuxian_productNameArr=zhuxian_productNameArr;
        }else{
            console.log("item exists");
        }
    }

    /*保险金额*/
    $scope.insuranceMoney = [
        {name:"固定值",value:"1",default:true},
        {name:"区间值",value:"2",default:false}
    ];
    var fixValue=angular.element(document.querySelector('.fixValue'))[0];
    var qujian=angular.element(document.querySelector('.qujian'))[0];
    $scope.onInsuranceMoneyChange = function (value) {
        if(value==1){
            fixValue.style.display="block";
            qujian.style.display="none";
        }else if(value==2){
            fixValue.style.display="none";
            qujian.style.display="block";
        }
    }
/*投保年龄*/
    $scope.insuranceAge= [
        {name:"固定值",value:"1",default:true},
        {name:"区间值",value:"2",default:false}
    ];
    var fixAge=angular.element(document.querySelector('.fixAge'))[0];
    var qujianAge=angular.element(document.querySelector('.qujianAge'))[0];
    $scope.onInsuranceAgeChange = function (value) {
        if(value==1){
            fixAge.style.display="block";
            qujianAge.style.display="none";
        }else if(value==2){
            fixAge.style.display="none";
            qujianAge.style.display="block";
        }
    }
    /*保障年限*/
    $scope.guaranteePeriod_sex= [
        {name:"不分性别",value:"1",default:true},
        {name:"分性别",value:"2",default:false},
    ];
    $scope.guaranteePeriod_date= [
        {name:"固定值",value:"3",default:true},
        {name:"对应交费期间",value:"4",default:false},
    ];
/*种类标签*/
    // $scope.typeLabelSelection="1231231";
    commonService.getTypeLabel(function(data){
        $scope.typeLabels=data;
        /*TODO*/
        $scope.typeLabelSelection=data[0];
        console.log($scope.typeLabelSelection);
    })
    /*投保年龄单位（岁、天）*/
    commonService.getDate(function(data){
        $scope.offDates=data;
        $scope.upDates=data;
        $scope.offPeriod=data[0];
        $scope.upPeriod=data[0];
        console.log($scope.upPeriod.name)
    })
    /*性别限制*/
    commonService.getGenderLimited(function(data){
        $scope.genderLimiteds=data;
        $scope.initGenderLimited=data[0];
    })
    $scope.labelDescriptionsArr=[
        {"labelDescription":"1"},
        {"labelDescription":"2"},
        {"labelDescription":"3"},
        {"labelDescription":""},
        {"labelDescription":""},
        {"labelDescription":""},
    ];
    console.log($scope.labelDescriptionsArr);
})
