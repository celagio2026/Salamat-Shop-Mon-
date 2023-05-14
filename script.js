let accordion = document.querySelectorAll('.faq .accordion-container .accordion');

accordion.forEach(acco => {
    acco.onclick = () => {
        accordion.forEach(remove => remove.classList.remove('active'));
        acco.classList.add('active');
    }
});

/* menu */
var a = 0, b = 0, c = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, prod_name = 0, prod_price =0, totalprod_price = 0, cust_order = [];
function formSubmit() {
    while (a > 0) {
        var cust_order1 = {
            prod_name: "Italian Carbonara",
            prod_price: 320,
        }
        cust_order.push(cust_order1);
        a--;
    }
    while (b > 0) {
        var cust_order2 = {
            prod_name: "Spaghetti Bolognese",
            prod_price: 370,
        }
        cust_order.push(cust_order2);
        b--;
    }
    while (c > 0) {
        var cust_order3 = {
            prod_name: "Chicken Ravioli",
            prod_price: 370,
        }
        cust_order.push(cust_order3);
        c--;
    }
    while (d > 0) {
        var cust_order4 = {
            prod_name: "Lasagna",
            prod_price: 350,
        }
        cust_order.push(cust_order4);
        d--;
    }
    while (e > 0) {
        var cust_order5 = {
            prod_name: "Beef Stroganoff",
            prod_price: 400,
        }
        cust_order.push(cust_order5);
        e--;
    }
    while (f > 0) {
        var cust_order6 = {
            prod_name: "Chicken Alfredo",
            prod_price: 370,
        }
        cust_order.push(cust_order6);
        f--;
    }
    while (g > 0) {
        var cust_order7 = {
            prod_name: "Cinnamon Roll",
            prod_price: 125,
        }
        cust_order.push(cust_order7);
        g--;
    }
    while (h > 0) {
        var cust_order8 = {
            prod_name: "Mini Tiramisu",
            prod_price: 235,
        }
        cust_order.push(cust_order8);
        h--;
    }
    while (i > 0) {
        var cust_order9 = {
            prod_name: "Butter Croissant",
            prod_price: 115,
        }
        cust_order.push(cust_order9);
        i--;
    }
    while (j > 0) {
        var cust_order10 = {
            prod_name: "Iced Shaken Dragon Tea",
            prod_price: 195,
        }
        cust_order.push(cust_order10);
        j--;
    }
    while (k > 0) {
        var cust_order11 = {
            prod_name: "Pistachio Cream Frapuccino",
            prod_price: 265,
        }
        cust_order.push(cust_order11);
        k--;
    }
    while (l > 0) {
        var cust_order12 = {
            prod_name: "Spanish Latte",
            prod_price: 225,
        }
        cust_order.push(cust_order12);
        l--;
    }
    cust_orderstring = JSON.stringify(cust_order);
    document.getElementById("cust_order").value = cust_orderstring;

}
function add(x) {
    const fooditemandprice = document.createElement("li");
    const divprice = document.createElement("div");
    if (x == 1) {
        a++;
        document.getElementById("food" + x + "num").innerHTML = a;
        prod_name = "Italian Carbonara";
        prod_price = 320;
        totalprod_price = totalprod_price + 320;
        fooditemandprice.className = "food1";
    }
    if (x == 2) {
        b++;
        document.getElementById("food" + x + "num").innerHTML = b;
        prod_name = "Spaghetti Bolognese";
        prod_price = 370;
        totalprod_price = totalprod_price + 370;
        fooditemandprice.className = "food2";
    }
    if (x == 3) {
        c++;
        document.getElementById("food" + x + "num").innerHTML = c;
        prod_name = "Chicken Ravioli";
        prod_price = 370;
        totalprod_price = totalprod_price + 370;
        fooditemandprice.className = "food3";
    }
    if (x == 4) {
        d++;
        document.getElementById("food" + x + "num").innerHTML = d;
        prod_name = "Lasagna";
        prod_price = 350;
        totalprod_price = totalprod_price + 350;
        fooditemandprice.className = "food4";
    }
    if (x == 5) {
        e++;
        document.getElementById("food" + x + "num").innerHTML = e;
        prod_name = "Beef Stroganoff";
        prod_price = 400;
        totalprod_price = totalprod_price + 400;
        fooditemandprice.className = "food5";
    }
    if (x == 6) {
        f++;
        document.getElementById("food" + x + "num").innerHTML = f;
        prod_name = "Chicken Alfredo";
        prod_price = 370;
        totalprod_price = totalprod_price + 370;
        fooditemandprice.className = "food6";
    }
    if (x == 7) {
        g++;
        document.getElementById("food" + x + "num").innerHTML = g;
        prod_name = "Cinnamon Roll";
        prod_price = 125;
        totalprod_price = totalprod_price + 125;
        fooditemandprice.className = "food7";
    }
    if (x == 8) {
        h++;
        document.getElementById("food" + x + "num").innerHTML = h;
        prod_name = "Mini Tiramisu";
        prod_price = 235;
        totalprod_price = totalprod_price + 235;
        fooditemandprice.className = "food8";
    }
    if (x == 9) {
        i++;
        document.getElementById("food" + x + "num").innerHTML = i;
        prod_name = "Butter Croissant";
        prod_price = 115;
        totalprod_price = totalprod_price + 115;
        fooditemandprice.className = "food9";
    }
    if (x == 10) {
        j++;
        document.getElementById("food" + x + "num").innerHTML = j;
        prod_name = "Iced Shaken Dragon Tea";
        prod_price = 195;
        totalprod_price = totalprod_price + 195;
        fooditemandprice.className = "food10";
    }
    if (x == 11) {
        k++;
        document.getElementById("food" + x + "num").innerHTML = k;
        prod_name = "Pistachio Cream Frapuccino";
        prod_price = 265;
        totalprod_price = totalprod_price + 265;
        fooditemandprice.className = "food11";
    }
    if (x == 12) {
        l++;
        document.getElementById("food" + x + "num").innerHTML = l;
        prod_name = "Spanish Latte";
        prod_price = 225;
        totalprod_price = totalprod_price + 225;
        fooditemandprice.className = "food12";
    }
    document.getElementById("totalprice").innerHTML = "₱" + totalprod_price;
    const item = document.createTextNode(prod_name);
    divprice.className = "cust_orderprice";
    const price = document.createTextNode("₱" + prod_price);
    divprice.appendChild(price);
    fooditemandprice.appendChild(item);
    fooditemandprice.appendChild(divprice);
    document.getElementById("list").appendChild(fooditemandprice);
}
function subtract(x) {
    var y = 0;
    if (x == 1 && a > 0) {
        a--;
        document.getElementById("food" + x + "num").innerHTML = a;
        totalprod_price = totalprod_price - 320;
        const fooda = document.getElementsByClassName("food1");
        fooda[0].remove();
    }
    if (x == 2 && b > 0) {
        b--;
        document.getElementById("food" + x + "num").innerHTML = b;
        totalprod_price = totalprod_price - 370;
        const foodb = document.getElementsByClassName("food2");
        foodb[0].remove();
    }
    if (x == 3 && c > 0) {
        c--;
        document.getElementById("food" + x + "num").innerHTML = c;
        totalprod_price = totalprod_price - 370;
        const foodc = document.getElementsByClassName("food3");
        foodc[0].remove();
    }
    if (x == 4 && d > 0) {
        d--;
        document.getElementById("food" + x + "num").innerHTML = d;
        totalprod_price = totalprod_price - 350;
        const foodd = document.getElementsByClassName("food4");
        foodd[0].remove();
    }
    if (x == 5 && e > 0) {
        e--;
        document.getElementById("food" + x + "num").innerHTML = e;
        totalprod_price = totalprod_price - 400;
        const foode = document.getElementsByClassName("food5");
        foode[0].remove();
    }
    if (x == 6 && f > 0) {
        f--;
        document.getElementById("food" + x + "num").innerHTML = f;
        totalprod_price = totalprod_price - 370;
        const foodf = document.getElementsByClassName("food6");
        foodf[0].remove();
    }
    if (x == 7 && g > 0) {
        g--;
        document.getElementById("food" + x + "num").innerHTML = g;
        totalprod_price = totalprod_price - 125;
        const foodg = document.getElementsByClassName("food7");
        foodg[0].remove();
    }
    if (x == 8 && h > 0) {
        h--;
        document.getElementById("food" + x + "num").innerHTML = h;
        totalprod_price = totalprod_price - 235;
        const foodh = document.getElementsByClassName("food8");
        foodh[0].remove();
    }
    if (x == 9 && i > 0) {
        i--;
        document.getElementById("food" + x + "num").innerHTML = i;
        totalprod_price = totalprod_price - 115;
        const foodi = document.getElementsByClassName("food9");
        foodi[0].remove();
    }
    if (x == 10 && j > 0) {
        j--;
        document.getElementById("food" + x + "num").innerHTML = j;
        totalprod_price = totalprod_price - 195;
        const foodj = document.getElementsByClassName("food10");
        foodj[0].remove();
    }
    if (x == 11 && k > 0) {
        k--;
        document.getElementById("food" + x + "num").innerHTML = k;
        totalprod_price = totalprod_price - 265;
        const foodk = document.getElementsByClassName("food11");
        foodk[0].remove();
    }
    if (x == 12 && l > 0) {
        l--;
        document.getElementById("food" + x + "num").innerHTML = l;
        totalprod_price = totalprod_price - 225;
        const foodl = document.getElementsByClassName("food12");
        foodl[0].remove();
    }
    document.getElementById("totalprice").innerHTML = "₱" + totalprod_price;
}
