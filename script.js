const data = [
    {
        discount_off: "30% Off",
        coupon_title: "Buy 1 Get 2",
        coupon_amount: "$18.00 USD",
        discount_amount: "$10.00 USD",
    },
    {
        discount_off: "30% Off",
        coupon_title: "Buy 2 Get 4",
        coupon_amount: "$24.00 USD",
        discount_amount: "$15.00 USD",
    }    
];

function displayCouponData() {
    const parentContainer = document.querySelector('.container');

    data.forEach((item, index) => {
        // Create the coupon container
        const couponContainer = document.createElement('div');
        couponContainer.classList.add('parent-coupon-container');
        couponContainer.setAttribute('onclick', `display(${index})`);

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
                        <p style="font-weight: 600;">${item.coupon_amount}</p>
                        
                    </div>
                </label>
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

        couponContainer.appendChild(childContainer1);
        couponContainer.appendChild(childContainer2);
        parentContainer.appendChild(couponContainer);
    });

    const exampleContainer1 = document.createElement("div");
    exampleContainer1.classList.add('exampleContainer1');
    exampleContainer1.innerHTML = `
    <div style="display:flex; justify-content: space-between; margin: 0rem 4rem">
        <p style="margin: 0px; color:#FF6B82"> Free Delivery </p>
        <p style="margin: 0px"> Total: $18.00 USD </p>
    </div>`;

    const exampleContainer2 = document.createElement("div");
    exampleContainer2.classList.add('exampleContainer2');
    exampleContainer2.innerHTML = `
    <div>
        <button class="add-to-cart">+ Add to Cart</button>
    </div>`;


    parentContainer.appendChild(exampleContainer1)
    parentContainer.appendChild(exampleContainer2)
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
        activeIndex = null;
    } else {
        dropdownParent.style.display = 'block';
        container2.style.backgroundColor = "#fff3f5";
        activeIndex = index; 
    }

    
}

displayCouponData();