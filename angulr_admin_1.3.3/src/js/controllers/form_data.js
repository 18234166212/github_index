/**
 * Created by huxx on 2016/12/12.
 */
/*产品录入页面js文件*/
app.controller('formCtrl', function ($scope, $http, $timeout, fileReader, commonService) {
    $scope.formData = {};
    $scope.formData.company = {"name":"","shortName":"","insuranceRecordNumber":""};
    $scope.submit = function () {

    }
    /*上传封面图片*/
    $scope.getFile = function () {
        fileReader.readAsDataUrl($scope.file, $scope)
            .then(function (result) {
                $scope.productPicture = result;
                $scope.planPicture = result;
            });
    };
    var handleFileSelect = function (evt) {
        var file = evt.currentTarget.files[0];
        var reader = new FileReader();
        reader.onload = function (evt) {
            $scope.$apply(function ($scope) {
                $scope.planPicture = evt.target.result;
            });
        };
        reader.readAsDataURL(file);
    };
    var uploadFile = function (file, callback) {
        var formData = new FormData();
        formData.append("file",file);//document.getElementById("fileListInput").files[0]);
        var config = {
                headers: {
                    "Content-Type": "application/json;charset=UTF-8",
                    "appToken": "18f1c01d-7ec5-46a3-a6e6-e22734f37ddc",
                }
            };
        // $http.post('http://10.22.64.36/BaoXianManage/common/fileUpload',
        //     formData,config)
        //     .then(function (data) {
        //         callback(nu/ll, data);
        //     }, function (err) {
        //         callback(err, null);
        //     });
        $http({
            method: 'POST',
            url: 'http://10.22.64.36/BaoXianManage/common/fileUpload',
            headers: {
                'Content-Type': undefined
            },
            data: formData,
            transformRequest: function (data, headersGetter) {
                var formData = new FormData();
                angular.forEach(data, function (value, key) {
                    formData.append(key, value);
                });
                return formData;
            }
        }).success(function () {
            alert('Upload Successfully');
        }).error(function () {
            alert('Fail to upload, please upload again');
        });
    }

    var handleListFileSelect = function (evt) {
        var file = evt.currentTarget.files[0];
        var reader = new FileReader();
        reader.onload = function (evt) {
            $scope.$apply(function ($scope) {
                $scope.productPicture = evt.target.result;
                uploadFile(file,
                    function (err, data) {
                        if (err) {
                            console.info("err:"+JSON.stringify(err))
                            return false;
                        }
                        console.info("data:"+JSON.stringify(data))
                    }
                );
            });
        };
        reader.readAsDataURL(file);
    };
    angular.element(document.querySelector('#fileListInput')).on('change', handleListFileSelect);
    angular.element(document.querySelector('#fileInput')).on('change', handleFileSelect);
    /*公司名称*/
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
        {name: "主险", value: "1", default: true,},
        {name: "附加险", value: "2", default: false,}
    ];
    $scope.TypeSelect = 1;
    $scope.onTypeSelectChange = function (value) {
        $scope.TypeSelect = value;
    }
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
    /*添加附加险---避免重复*/
    var fujia_productNameArr = [];
    var zhuxianSet = {};
    $scope.selectFujiaValueChange = function (fujia_productName) {
        if (!zhuxianSet[fujia_productName.name]) {
            zhuxianSet[fujia_productName.name] = fujia_productName.name;
            fujia_productNameArr.push(fujia_productName.name);
            $scope.fujia_productNameArr = fujia_productNameArr;
        } else {
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
    /*添加主险--避免重复*/
    var zhuxian_productNameArr = [];
    var fujiaxianSet = {};
    $scope.selectZhuValueChange = function (zhuxian_productName) {
        if (!fujiaxianSet[zhuxian_productName.name]) {
            fujiaxianSet[zhuxian_productName.name] = zhuxian_productName.name;
            zhuxian_productNameArr.push(zhuxian_productName.name);
            $scope.zhuxian_productNameArr = zhuxian_productNameArr;
        } else {
            console.log("item exists");
        }
    }
    /*保险金额*/
    $scope.insuranceMoney = [
        {name: "固定值", value: "1", default: true},
        {name: "区间值", value: "2", default: false}
    ];
    $scope.InsuranceMoney = 1;
    $scope.onInsuranceMoneyChange = function (value) {
        $scope.InsuranceMoney = value;
    }
    /*投保年龄*/
    $scope.insuranceAge = [
        {name: "固定值", value: "1", default: true},
        {name: "区间值", value: "2", default: false}
    ];
    $scope.InsuranceAge = 1;
    $scope.onInsuranceAgeChange = function (value) {
        $scope.InsuranceAge = value;
    }
    /*种类标签*/
    commonService.getTypeLabel(function (data) {
        $scope.typeLabels = data;
    })
    commonService.getIncomeTypeList(function (data) {
        $scope.incomeTypeLists = data;
    })
    /*投保年龄单位（岁、天）*/
    commonService.getDate(function (data) {
        $scope.offDates = data;
        $scope.upDates = data;
        $scope.offPeriod = data[0];
        $scope.upPeriod = data[0];
    })
    /*性别限制*/
    commonService.getGenderLimited(function (data) {
        $scope.genderLimiteds = data;
        $scope.initGenderLimited = data[0];
        $scope.initSex = data[0];
        $scope.morenSex = data[0];
    })
    /*获取性别限制里面的内容*/
    $scope.genderLimitedChange = function (value) {
        console.log(value);
    }
    /*年金领取方式*/
    commonService.getYearMoneyType(function (data) {
        $scope.yearMoneyTypes = data;
    })
    /*描述标签*/
    $scope.labelDescriptionsArr = [
        {"labelDescription": ""},
        {"labelDescription": ""},
        {"labelDescription": ""},
        {"labelDescription": ""},
        {"labelDescription": ""},
        {"labelDescription": ""},
    ];
    /*缴费方式中的缴费期间*/
    $scope.incomePeriodArr = [
        {"incomePeriod": ""},
        {"incomePeriod": ""},
        {"incomePeriod": ""},
        {"incomePeriod": ""},
        {"incomePeriod": ""},
        {"incomePeriod": ""},
    ]
    /*点击增加按钮增加一个输入框*/

    $scope.addIncomePeriod = function () {
        var addIncomePeriodObj = {};
        addIncomePeriodObj["incomePeriod"] = "";
        $scope.incomePeriodArr.push(addIncomePeriodObj);
        $scope.num = 4;
    }
    $scope.removeIncomePeriod = function () {
        $scope.incomePeriodArr.pop();
    }
    /*保障年限=======两组单选按钮的切换*/
    $scope.guaranteePeriod_sex = [
        {name: "不分性别", value: "1", default: true},
        {name: "分性别", value: "2", default: false},
    ];
    $scope.guaranteePeriod_date = [
        {name: "固定值", value: "1", default: true},
        {name: "对应交费期间", value: "2", default: false},
    ];
    $scope.guaranteePeriodNum = 1;
    $scope.guaranteeSexNum = 1;
    $scope.result = 11;
    $scope.test1 = function () {
        $scope.result = $scope.guaranteeSexNum + $scope.guaranteePeriodNum;
        console.info("result：" + $scope.result);
    }
    /*保障年限======不分性别固定值*/
    $scope.SexFixValueArr = [
        {"year": ""}, {"year": ""}, {"year": ""}, {"year": ""}];
    $scope.addYear = function () {
        var addYearObj = {};
        $scope.SexFixValueArr.push(addYearObj);
        $scope.year = 1;
    }
    $scope.removeYear = function () {
        $scope.SexFixValueArr.pop();
    }
    /*保障年限======不分性别对应交费期间*/
    $scope.SexDiffDateArr = [{"jiao": "", "bao": ""}, {"jiao": "", "bao": ""}];
    $scope.addSexDiffDate = function () {
        var addSexDiffDateObj = {};
        $scope.SexDiffDateArr.push(addSexDiffDateObj);
        $scope.SexDiffDate = 1;
    }
    $scope.removeSexDiffDate = function () {
        $scope.SexDiffDateArr.pop();
    }
    /*保障年限======分性别固定值(男)*/
    $scope.maleDiffSexFixValueArr = [
        {"year": ""}, {"year": ""}, {"year": ""}, {"year": ""},]
    $scope.addMaleDiffSexFix = function () {
        var maleDiffSexFixObj = {};
        $scope.maleDiffSexFixValueArr.push(maleDiffSexFixObj);
        $scope.removeMaleYear = 1;
    }
    $scope.removeMaleDiffSexFix = function () {
        $scope.maleDiffSexFixValueArr.pop();
    }
    /*保障年限======分性别固定值(女)*/
    $scope.femaleDiffSexFixValueArr = [
        {"year": ""}, {"year": ""}, {"year": ""}, {"year": ""},]
    $scope.addFemaleDiffSexFix = function () {
        var femaleDiffSexFixObj = {};
        $scope.femaleDiffSexFixValueArr.push(femaleDiffSexFixObj);
        $scope.removeFemaleYear = 1;
    }
    $scope.removeFemaleDiffSexFix = function () {
        $scope.femaleDiffSexFixValueArr.pop();
    }
    /*保障年限======分性别对应交费期间(男)*/
    $scope.maleDiffSexDiffDateArr = [{"jiao": "", "bao": ""}, {"jiao": "", "bao": ""}]
    $scope.addMalemale = function () {
        var maleDiffSexDiffDateObj = {};
        $scope.maleDiffSexDiffDateArr.push(maleDiffSexDiffDateObj);
        $scope.maleDiffSexDiffDateValue = 1;
    }
    $scope.removeDiffSexDiffDate = function () {
        $scope.maleDiffSexDiffDateArr.pop();
    }
    /*保障年限======分性别对应交费期间(女)*/
    $scope.femaleDiffSexDiffDateArr = [{"jiao": "", "bao": ""}, {"jiao": "", "bao": ""}]
    $scope.addFemalemale = function () {
        var femaleDiffSexDiffDateObj = {};
        $scope.femaleDiffSexDiffDateArr.push(femaleDiffSexDiffDateObj);
        $scope.femaleDiffSexDiffDateValue = 1;
    }
    $scope.removeFemaleDiffSexDiffDate = function () {
        $scope.femaleDiffSexDiffDateArr.pop();
    }
    /*----------------------------------------------*/
    /*保障项目管理*/
    /*受益方式的一次和按频次*/
    commonService.getDetailListType(function (data) {
        $scope.detailListTypes = data;
    })
    /*受益金额*/
    commonService.getBenefitAmount(function (data) {
        $scope.benefitAmounts = data;
        $scope.benefitAmountion = data[0];
    })
    /*受益金额----固定值单位的获取*/
    $scope.benefitAmountChange = function (value) {
        // console.log(value);
    }
    /*受益金额----比例倍数---保额保费获取*/
    commonService.getValueType(function (data) {
        $scope.valueTypes = data;
        $scope.firstValueType = data[0];
        $scope.firstValue = data[0];
        $scope.everyYearAdd = data[0];
        $scope.stageValue = data[0];
    })
    /*受益金额----阶段比例---第二年，第三年获取*/
    commonService.getStageRate(function (data) {
        $scope.StageRates = data;
        $scope.firstStageRate = data[0];
    })
    /*点击添加新保障项目*/
    var emptyProject = {
        incomeTypes: [
            {"name": "进万能账户", "value": "1"},
            {"name": "进意外身价", "value": "2"},
            {"name": "进健康保障", "value": "3"},
            {"name": "进疾病身故", "value": "4"}]
    };
    $scope.addNewGuaranteeProjectArr = [angular.copy(emptyProject)];
    $scope.addNewGuaranteeProject = function () {
        var addNewGuaranteeProjectObj = angular.copy(emptyProject);
        console.info($scope.addNewGuaranteeProjectArr);
        $scope.addNewGuaranteeProjectArr.push(addNewGuaranteeProjectObj);
    }
    /*保障期限*/
    commonService.getGuaranteeAge(function (data) {
        $scope.guaranteeAges = data;
        $scope.firstGuaranteeAge = data[0];
        $scope.first_guaranteeAge = data[0];
    })
    /*删除保障项目*/
    $scope.removeGuaranteeProject = function () {
        $scope.addNewGuaranteeProjectArr.pop();
    }
    /*--------------------------------------------------------*/
    /*费率设置*/
    commonService.getRateSet_paymentPeriod(function (data) {
        // console.log(data);
        $scope.paymentPeriods = data;
        $scope.firstPaymentPeriod = data[0];
        $scope.morenPaymentPeriod = data[0];
    })
    commonService.getSocialSecuity(function (data) {
        $scope.socialSecuitys = data;
        $scope.secondSocialSecuity = data[1];
        $scope.morenSocialSecuity = data[1];
    })
    /*费率设置----单一条件（增加、删除按钮）*/
    $scope.addFactorListArr = [{}];
    $scope.addRateCondition = function () {
        $scope.factorList = 1;
        var factorListObj = {};
        $scope.addFactorListArr.push(factorListObj);
    }
    $scope.removeLastRateCondition = function () {
        $scope.addFactorListArr.pop();
    }
    /*费率表设置*/
    commonService.getRateTableType(function (data) {
        $scope.rateTableTypes = data;
    })
    /*设置数据列条件---点击增加按钮*/
    $scope.conditionArr = [{}, {}, {}];
    $scope.addCondition = function () {
        $scope.condition = 1;
        var conditionObj = {};
        $scope.conditionArr.push(conditionObj);
    }
    $scope.removeCondition = function () {
        $scope.conditionArr.pop();
    }
    $scope.rateTableValue = 1;
    $scope.typeChange = function (value) {

        $scope.rateTableValue = value;
    }
    /*保险条款管理-----添加新条款*/
    $scope.insuranceClausesArr = [{}];
    $scope.addNewInsuranceClauses = function () {
        var newInsuranceClause = {};
        $scope.insuranceClausesArr.push(newInsuranceClause);
    }
    /*删除条款*/
    $scope.removeInsuranceClauses = function () {
        $scope.insuranceClausesArr.pop();
    }
})
