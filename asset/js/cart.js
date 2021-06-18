var app = angular.module('myApp', ['ngRoute']);

app.controller('cart', function($scope) {
    $scope.ship = 5;
    $scope.listCart = [{
            id: "123",
            title: "Chair",
            content: "Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.",
            price: "4",
            img: "https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/chair-2-sq.jpg",
            date: new Date('6-7-2020'),
        },
        {
            id: "123",
            title: "clock",
            content: "Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.",
            price: "10",
            img: "https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/book.jpg",
            date: new Date('6-7-2020'),
        },
        {
            id: "123",
            title: "Ghe banh",
            content: "Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.",
            price: "34",
            img: "https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/chair2.jpg",
            date: new Date('6-7-2020'),
        },
        {
            id: "123",
            title: "ghe den",
            content: "Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.",
            price: "7",
            img: "https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/chair3-sq.jpg",
            date: new Date('6-7-2020'),
        },
    ];
    $scope.freeCode = [{
            img: "https://www.airpay.vn/filer/canonical/1553585117/2595/",
            title: "VOUCHER BAN MOI",
            content: "Giam 100k cho don hang dau tien",
            code: "CDD192"
        },
        {
            img: "https://doopage.com/assets/uploads/2019/05/dau-tu-hinh-anh-khi-ban-hang-tren-shopee.jpg",
            title: "VOUCHER BAN MOI 50%",
            content: "Voucher co san trong vi khi click va day",
            code: "CDD102"
        },
        {
            img: "https://khangnguyenco.vn/pub/media/magefan_blog/ma-qr-code.jpg",
            title: "VOUCHER BAN MOI 30%",
            content: "Voucher co san trong vi khi click va day",
            code: "CDD2609"
        },
    ]
    $scope.totalPrice = 0;
    $scope.changesls = function(item, index) {
        if (item.choose == true) {
            $scope.totalPrice = 0
            $scope.listCart.forEach(element => {
                if (element.choose == true) {
                    $scope.totalPrice = $scope.totalPrice + element.numOrder * element.price;
                }
            });
        }
    }
    $scope.change = function(item, index) {
            if (item.choose == true) {
                $scope.listCart[index].choose = false
                $scope.totalPrice = 0
                $scope.listCart.forEach(element => {
                    if (element.choose == true) {
                        $scope.totalPrice = $scope.totalPrice + element.numOrder * element.price;
                    }
                });
            } else {
                $scope.listCart[index].choose = true
                $scope.totalPrice = 0
                $scope.listCart.forEach(element => {
                    if (element.choose == true) {
                        $scope.totalPrice = $scope.totalPrice + element.numOrder * element.price;
                    }
                });
            }
        }
        // them 1 phan tu vao mang
    $scope.addProduct = function() {
        var rand = $scope.listCart[Math.floor(Math.random() * $scope.listCart.length)];
        $scope.listCart.push({ rand });
        console.log(rand);

    };

    // xoa 1 phan tu 
    $scope.delete = function(item) {
        var index = $scope.listCart.indexOf(item);
        $scope.listCart.splice(index, 1);
    };



});