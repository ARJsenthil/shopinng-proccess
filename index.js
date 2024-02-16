
function disPriceCount()
{
    var discount_type = document.getElementById('discount_type');
    var product_org_price = document.getElementById('product_org_price');
    var product_dis = document.getElementById('product_dis');
    var product_price = document.getElementById('product_price');


    localStorage.setItem('discountType', discount_type.value);
    localStorage.setItem('productOrgPrice', product_org_price.value);
    localStorage.setItem('productDis', product_dis.value);
    localStorage.setItem('productPrice', product_price.value);


    discount_type.style = 'border-color: none;';
    product_price.value = '';

    if(discount_type.value == '%')
    {
        var d = parseInt(product_org_price.value) - (parseInt(product_org_price.value) * (parseInt(product_dis.value)/100));
        console.log('%', d);
        product_price.value = d;
    }
    else if(discount_type.value == 'flat')
    {
        var d = parseInt(product_org_price.value) - parseInt(product_dis.value);
        console.log('Flat', d);
        product_price.value = d;
    }
    else
    {
        discount_type.style = 'border-color: red;';
    }
}


function disTypeSelect()
{
    var discount_type = document.getElementById('discount_type');
    var product_org_price = document.getElementById('product_org_price');
    var product_dis = document.getElementById('product_dis');
    var product_price = document.getElementById('product_price');



    localStorage.setItem('discountType', discount_type.value);
    localStorage.setItem('productOrgPrice', product_org_price.value);
    localStorage.setItem('productDis', product_dis.value);
    localStorage.setItem('productPrice', product_price.value);

    discount_type.style = 'border-color: none;';

    if(discount_type.value == '%')
    {
        if(product_dis.value)
        {
            var d = parseInt(product_org_price.value) - (parseInt(product_org_price.value) * (parseInt(product_dis.value)/100));
            console.log('%', d);
            product_price.value = d;
        }
        else
        {
            var d = product_org_price.value;
            product_price.value = d;

        }
    }
    else if(discount_type.value == 'flat')
    {
        if(product_dis.value)
        {
            var d = parseInt(product_org_price.value) - parseInt(product_dis.value);
            console.log('Flat', d);
            product_price.value = d;
        }
        else
        {
            var d = product_org_price.value;
            product_price.value = d;
        }
    }
    else
    {
        
        discount_type.style = 'border-color: red;';
        var d = parseInt(product_org_price.value) ;
        product_price.value = d;
    }
}

function productOrgPrice()
{

    var discount_type = document.getElementById('discount_type');
    var product_org_price = document.getElementById('product_org_price');
    var product_dis = document.getElementById('product_dis');
    var product_price = document.getElementById('product_price');


    localStorage.setItem('discountType', discount_type.value);
    localStorage.setItem('productOrgPrice', product_org_price.value);
    localStorage.setItem('productDis', product_dis.value);
    localStorage.setItem('productPrice', product_price.value);

    if(discount_type.value == '%')
    {
        if(product_dis.value)
        {
            var d = parseInt(product_org_price.value) - (parseInt(product_org_price.value) * (parseInt(product_dis.value)/100));
            console.log('%', d);
            product_price.value = d;
        }
        else
        {
            var d = product_org_price.value;
            product_price.value = d;

        }
    }
    else if(discount_type.value == 'flat')
    {
        if(product_dis.value)
        {
            var d = parseInt(product_org_price.value) - parseInt(product_dis.value);
            console.log('Flat', d);
            product_price.value = d;
        }
        else
        {
            var d = product_org_price.value;
            product_price.value = d;
        }
    }
    else
    {
        
        discount_type.style = 'border-color: red;';
        var d = parseInt(product_org_price.value) ;
        product_price.value = d;
    }
}

function productImg(event)
{
    console.log('event --- ',event.target.files[0]);
    var reader = new FileReader();
    
    console.log(reader.result);
    reader.onload = function(){
        var output = document.getElementById('productimg');
        output.src = reader.result;
        
        localStorage.setItem('productImgSrc', reader.result);

    };
    reader.readAsDataURL(event.target.files[0]);
}


function addProduct()
{

    var product_name = document.getElementById('product_name');
    var product_desc = document.getElementById('product_desc');
    var product_max_quantity = document.getElementById('product_max_quantity');
    var product_price = document.getElementById('product_price');


    localStorage.setItem('productName', product_name.value);
    localStorage.setItem('productDesc', product_desc.value);
    localStorage.setItem('productMaxQuantity', product_max_quantity.value);
    localStorage.setItem('productPrice', product_price.value);
}