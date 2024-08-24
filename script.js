const data = [
    {
        discount_off: "30% Off",
        coupon_title: "Buy 1 Get 2",
        coupon_amount: "$18.00 USD",
    },
    {
        discount_off: "30% Off",
        coupon_title: "Buy 2 Get 4",
        coupon_amount: "$24.00 USD",
        message: "Most Popular"
    },  
    {
        discount_off: "10% Off",
        coupon_title: "Buy 3 Get 6",
        coupon_amount: "$36.00 USD",
        discount_amount: "$10.00 USD",
    }
];

function displayCouponData() {
    const parentContainer = document.querySelector('.container');

    data.forEach((item, index) => {
        // Create the coupon container
        const couponContainer = document.createElement('div');
        couponContainer.classList.add('parent-coupon-container');
        
        // Create the first child container with discount info
        const childContainer1 = document.createElement('div');
        childContainer1.classList.add('child-coupon-container-1');
        childContainer1.innerHTML = `<p>${item.discount_off}</p>`;
        
        // Create the second child container with coupon details
        const childContainer2 = document.createElement('div');
        childContainer2.classList.add('child-coupon-container-2');
        childContainer2.innerHTML = `
                <div class="radio-button">
                    <input type="radio" id="coupon-radio" name="coupon-radio">
                    <label for="coupon-radio">
                        <div class="coupon-title">
                            <p>${item.coupon_title}</p>
                            <p class="discount">${item.discount_off}</p>
                        </div>
                        <div class="coupon-amount">
                            <p class="amount">${item.coupon_amount}</p>&nbsp
                            <p class="dashed-amount">${item.discount_amount || ''}</p>
                        </div>
                    </label>
                    <div>
                        <p class="most_popular">${item.message || ''}</p>
                    </div>
                </div>
                <div class="dropdown-parent">
                    <table>
                        <tr>
                            <th></th>
                            <th>Size</th>
                            <th>Colour</th>
                        </tr>
                        <tr>
                            <td>#1</td>
                            <td>
                                <select name="size" id="size">
                                    <option value="small">S</option>
                                </select>
                            </td>
                            <td>
                                <select name="colour" id="colour">
                                    <option value="black">Black</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>#2</td>
                            <td>
                                <select name="size" id="size">
                                    <option value="small">S</option>
                                </select>
                            </td>
                            <td>
                                <select name="colour" id="colour">
                                    <option value="colour">Colour</option>
                                </select>
                            </td>
                        </tr>
                    </table>
                </div>
            `;
        childContainer2.setAttribute('onclick', `display(${index})`);
        couponContainer.appendChild(childContainer1);
        couponContainer.appendChild(childContainer2);
        parentContainer.appendChild(couponContainer);

        if(item.discount_amount){

        }
    });

    const exampleContainer1 = document.createElement("div");
    exampleContainer1.classList.add('exampleContainer1');
    exampleContainer1.innerHTML = `
        <p class="free-delivery"> Free Delivery </p>
        <p class="total"> Total: $18.00 USD </p>
    `;

    const exampleContainer2 = document.createElement("div");
    exampleContainer2.classList.add('exampleContainer2');
    exampleContainer2.innerHTML = `
        <button class="add-to-cart">+ Add to Cart</button>
    `;

    const poweredBy = document.createElement("div");
    poweredBy.classList.add("powered-by");
    poweredBy.innerHTML = `
        <span class="poweredBy-label">Powered by</span>
        <span class="pumper"> Pumper</span>
    `


    parentContainer.appendChild(exampleContainer1)
    parentContainer.appendChild(exampleContainer2)
    parentContainer.appendChild(poweredBy)
}

let activeIndex = null;

function display(index) {
    const containers = document.querySelectorAll('.parent-coupon-container');

    if (activeIndex !== null && activeIndex !== index) {
        const prevContainer1 = containers[activeIndex].querySelector('.child-coupon-container-1');
        const prevDropdownParent = containers[activeIndex].querySelector('.dropdown-parent');
        prevContainer1.style.display = 'block';
        prevDropdownParent.style.display = 'none';
        containers[activeIndex].querySelector('.child-coupon-container-2').style.backgroundColor = "";
        containers[activeIndex].querySelector('.child-coupon-container-2').style.borderRadius = "0px 12px 12px 0px";
    }

    const container1 = containers[index].querySelector('.child-coupon-container-1');
    const container2 = containers[index].querySelector('.child-coupon-container-2');
    const dropdownParent = containers[index].querySelector('.dropdown-parent');

    if (container1.style.display === 'none') {
        container1.style.display = 'block';
    } else {
        container1.style.display = 'none';
    }
    
    if (dropdownParent.style.display === 'block') {
        dropdownParent.style.display = 'none';
        container2.style.backgroundColor = "";
        container2.style.borderRadius = '0px 12px 12px 0px'
        activeIndex = null;
    } else {
        dropdownParent.style.display = 'block';
        container2.style.backgroundColor = "#fff3f5";
        container2.style.borderRadius = '12px'
        activeIndex = index; 
    }

    
}

displayCouponData();