var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "./views/home.html?" + Math.random(),
            controller: "home",
        })
        .when('/shop', {
            templateUrl: "./views/shop.html",
            controller: "shop",

        })
        .when('/cart', {
            templateUrl: "./views/cart.html",
            controller: "cart",

        })
        .otherwise({
            redirectTo: "/"
        });
});
// controller truyen du lieu cua shop len
app.controller('shop', function($scope, $routeParams) {
    // $scope.tk = $scope.search
    $scope.listProducts = [{
            id: "123",
            title: "Norwegg Chair",
            content: "Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.",
            price: "40",
            img: "https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/chair-2-sq.jpg",
        },
        {
            id: "123",
            title: "Book color",
            content: "Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.",
            price: "23",
            img: "https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/book.jpg",
        },
        {
            id: "123",
            title: "Ghế xám",
            content: "Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.",
            price: "14",
            img: "https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/chair2.jpg",
        },
        {
            id: "123",
            title: "Norwegg Chair",
            content: "Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.",
            price: "48",
            img: "https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/chair3-sq.jpg",
        },
        {
            id: "123",
            title: "Pen color",
            content: "Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.",
            price: "34",
            img: "https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/clock.jpg",
        },
        {
            id: "123",
            title: "Norwegg Chair",
            content: "Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.",
            price: "49",
            img: "https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/box.jpg",
        },
        {
            id: "123",
            title: "Giỏ Đựng",
            content: "Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.",
            price: "41",
            img: "https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/box2-sq.jpg",
        },
        {
            id: "123",
            title: "Đồng Hồ cheo tường",
            content: "Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.",
            price: "24",
            img: "https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/clock3.jpg",
        },
        {
            id: "123",
            title: "Ghe đen",
            content: "Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.",
            price: "11",
            img: "https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/chair2-2.jpg",
        },
        {
            id: "123",
            title: "Chair tựa",
            content: "Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.",
            price: "99",
            img: "https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/chair3-sq.jpg",
        },
        {
            id: "123",
            title: "Ghe sofa",
            content: "Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.",
            price: "80",
            img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hhaXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        }, {
            id: "123",
            title: "Ghe cao",
            content: "Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.",
            price: "45",
            img: "https://images.unsplash.com/photo-1503602642458-232111445657?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        },
        // 
        {
            id: "123",
            title: "Chair us",
            content: "Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.",
            price: "22",
            img: "https://images.unsplash.com/photo-1589584649628-b597067e07a3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        },
        {
            id: "123",
            title: "Chair",
            content: "Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.",
            price: "40",
            img: "https://images.unsplash.com/photo-1574189555774-7cbcd66d0fcb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        },
        {
            id: "123",
            title: "Black Book",
            content: "Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.",
            price: "23",
            img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        },
        {
            id: "123",
            title: "Chair short",
            content: "",
            price: "10",
            img: "https://images.unsplash.com/photo-1586158291800-2665f07bba79?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
        },
    ];
    $scope.optionPrice = [10, 40, 70, 80, 12];
    $scope.orderPrice = function(x) {
        $scope.orderByPrice = x;
    };



});

app.controller('home', function($scope, $routeParams) {
    $scope.book = [{
            id: "123",
            title: "Chair",
            content: "Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.",
            price: "21",
            img: "https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/chair-2-sq.jpg",
            date: new Date('6-7-2020'),
        },
        {
            id: "123",
            title: "clock",
            content: "Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.",
            price: "12",
            img: "https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/book.jpg",
            date: new Date('6-7-2020'),
        },
        {
            id: "123",
            title: "Ghe banh",
            content: "Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.",
            price: "43",
            img: "https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/chair2.jpg",
            date: new Date('6-7-2020'),
        },
        {
            id: "123",
            title: "ghe den",
            content: "Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.",
            price: "49",
            img: "https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/chair3-sq.jpg",
            date: new Date('6-7-2020'),
        },
        {
            id: "123",
            title: "Norwegg Chair",
            content: "Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.",
            price: "40",
            img: "https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/clock.jpg",
            date: new Date('6-7-2020'),
        },
        {
            id: "123",
            title: "Gio vang",
            content: "Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.",
            price: "70",
            img: "https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/box.jpg",
            date: new Date('6-7-2020'),
        },

    ];



});

app.controller('cart', function($scope) {
    $scope.ship = 5;
    $scope.listCart = [{
            id: "123",
            title: "Chair",
            content: "Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.",
            price: "4",
            img: "https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/chair-2-sq.jpg",
        },
        {
            id: "123",
            title: "clock",
            content: "Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.",
            price: "10",
            img: "https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/book.jpg",
        },
        {
            id: "123",
            title: "Ghe banh",
            content: "Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.",
            price: "34",
            img: "https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/chair2.jpg",
        },
        {
            id: "123",
            title: "ghe den",
            content: "Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.",
            price: "7",
            img: "https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/chair3-sq.jpg",
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

    $scope.totalItem = $scope.listCart.length;
    // $scope.totalItem = function() {
    //     for (var i = 0; i < $scope.listCart.length; i++) {
    //         $scope.tong += $scope.listCart[i];
    //     }

    // }




});


$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
    $('a.ac').click(function() {
        $(this).css('color', 'orangered');
    })
});