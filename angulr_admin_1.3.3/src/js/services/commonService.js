/**
 * Created by huxx on 2016/12/15.
 */
/*种类标签*/
app.service("commonService",["$http",function($http){
        this.getTypeLabel=function(handler){
            $http.get("data/typeLabels.json").success(function(data){
                handler(data);
            })
        },
        this.getDate=function(handler){
            $http.get("data/day_sui.json").success(function(data){
                handler(data);
            })
        },
        this.getGenderLimited=function(handler){
            $http.get("data/genderLimited.json").success(function(data){
                handler(data);
            })
        },
        this.getIncomeTypeList=function(handler){
            $http.get("data/incomeTypeList.json").success(function(data){
                handler(data);
            })
        },
        this.getYearMoneyType=function(handler){
            $http.get("data/yearMoneyType.json").success(function(data){
                handler(data);
            })
        },
            this.getDetailListType=function(handler){
                $http.get("data/detailList.json").success(function(data){
                    handler(data);
                })
            },
            this.getBenefitAmount=function(handler){
                $http.get("data/benefitAmount.json").success(function(data){
                    handler(data);
                })
            },
            this.getValueType=function(handler){
                $http.get("data/valueType.json").success(function(data){
                    handler(data);
                })
            },
            this.getStageRate=function(handler){
                $http.get("data/stageRate.json").success(function(data){
                    handler(data);
                })
            },
            this.getRateSet_paymentPeriod=function(handler){
                $http.get("data/rateSet_paymentPeriod.json").success(function(data){
                    handler(data);
                })
            },
            this.getSocialSecuity=function(handler){
                $http.get("data/SocialSecuity.json").success(function(data){
                    handler(data);
                })
            },
            this.getRateTableType=function(handler){
                $http.get("data/rateTableType.json").success(function(data){
                    handler(data);
                })
            },
            this.getGuaranteeAge=function(handler){
                $http.get("data/guaranteeAge.json").success(function(data){
                    handler(data);
                })
            }
}])