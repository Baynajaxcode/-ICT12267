// ================== 1. ข้อมูลสินค้า (อัปเดตรูปภาพให้สวยงาม) ==================
const allProducts = [
    { 
        id: 1, 
        name: "ไม้ถูพื้นรีดน้ำ Microfiber", 
        price: 350, 
        category: "เครื่องครัว", 
        images: [
            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600",
            "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600",
            "https://images.unsplash.com/photo-1584622781564-1d9876a13d00?w=600"
        ],
        description: "ผ้าม็อบไมโครไฟเบอร์ ซับน้ำได้ดีเยี่ยม รีดน้ำง่ายไม่ต้องใช้มือบิด" 
    },
    { 
        id: 2, 
        name: "หุ่นยนต์ดูดฝุ่นอัจฉริยะ V2", 
        price: 2900, 
        category: "อิเล็กทรอนิกส์", 
        images: [
            "https://images.unsplash.com/photo-1589127077225-45ff7be4241c?w=600",
            "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=600",
            "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=600"
        ],
        description: "ทำงานอัตโนมัติด้วยระบบเซ็นเซอร์ เข้าถึงทุกซอกมุม แม้ใต้โซฟา" 
    },
    { 
        id: 3, 
        name: "น้ำยาอเนกประสงค์สูตรเข้มข้น", 
        price: 120, 
        category: "เครื่องครัว", 
        images: [
            "https://images.unsplash.com/photo-1558523038-0812256f5055?w=600",
            "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=600",
            "https://images.unsplash.com/photo-1618219944342-824e40a13285?w=600"
        ],
        description: "ขจัดคราบมันและคราบสกปรกได้หมดจด กลิ่นหอมสดชื่น" 
    },
    { 
        id: 4, 
        name: "ถังขยะอัจฉริยะระบบเซ็นเซอร์", 
        price: 890, 
        category: "ของใช้ในบ้าน",
        images: [
            "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600",
            "https://images.unsplash.com/photo-1614013444458-30549c40fd3d?w=600"
        ],
        description: "เปิด-ปิดฝาอัตโนมัติด้วยระบบเซ็นเซอร์ สะดวก สะอาด ไร้สัมผัส" 
    }
];

const bestSellers = allProducts; // ใช้ตัวอย่างเดียวกันเพื่อโชว์แถวละ 4

const promotions = [
    { id: 21, name: "Pack 10: ผ้าไมโครไฟเบอร์", price: 199, originalPrice: 350, images: ["https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600"] },
    { id: 22, name: "Set: น้ำยาซัก+ปรับผ้านุ่ม", price: 250, originalPrice: 390, images: ["https://images.unsplash.com/photo-1558523038-0812256f5055?w=600"] },
    { id: 23, name: "เครื่องล้างจานลดล้างสต็อก", price: 12000, originalPrice: 18000, images: ["https://images.unsplash.com/photo-1584622781564-1d9876a13d00?w=600"] },
    { id: 24, name: "สเปรย์ฆ่าเชื้อ Portable", price: 490, originalPrice: 850, images: ["https://images.unsplash.com/photo-1618219944342-824e40a13285?w=600"] }
];

// ================== 2. ระบบจัดการสถานะ (State) ==================
let cart = [];
let currentImgIndex = 0;
let currentProductId = null;

// ================== 3. ระบบเรนเดอร์หน้าเว็บ (แถวละ 4 รูป) ==================
function renderItems(data, containerId, isHot = false) {
    const container = document.getElementById(containerId);
    if (!container) return;
    // col-lg-3 คือการกำหนดให้จอใหญ่โชว์ 4 คอลัมน์ (12/3 = 4)
    container.innerHTML = data.map(item => `
        <div class="col-6 col-md-4 col-lg-3 d-flex align-items-stretch mb-4">
            <div class="card product-card shadow-sm p-3 text-center w-100 border-0" onclick="showProductDetail(${item.id})" style="cursor: pointer; position: relative;">
                ${isHot ? '<span class="best-seller-badge" style="position:absolute; top:10px; right:10px; background:red; color:white; padding:2px 8px; border-radius:10px; font-size:10px; z-index:2;"><i class="fas fa-crown"></i> HOT</span>' : ''}
                <div class="img-wrapper mb-3" style="height:160px; overflow:hidden;">
                    <img src="${item.images[0]}" class="card-img-top h-100 w-100" style="object-fit: cover; border-radius: 12px;">
                </div>
                <h6 class="fw-bold mb-1 text-dark text-truncate px-2">${item.name}</h6>
                <p class="text-primary fw-bold mb-0">฿${item.price.toLocaleString()}</p>
            </div>
        </div>
    `).join('');
}

function renderPromotions() {
    const container = document.getElementById('promotion-container');
    if (!container) return;
    container.innerHTML = promotions.map(item => `
        <div class="col-6 col-md-4 col-lg-3 d-flex align-items-stretch mb-4">
            <div class="card product-card p-3 shadow-sm text-center w-100 border-0" onclick="showProductDetail(${item.id})" style="cursor:pointer">
                <div class="img-wrapper mb-2" style="height:140px; overflow:hidden;">
                    <img src="${item.images[0]}" class="img-fluid rounded-3 w-100 h-100" style="object-fit:cover;">
                </div>
                <h6 class="fw-bold mb-1 text-truncate x-small">${item.name}</h6>
                <div class="d-flex justify-content-center gap-2 align-items-center">
                    <span class="text-primary fw-bold">฿${item.price.toLocaleString()}</span>
                    <small class="text-muted text-decoration-line-through" style="font-size:10px">฿${item.originalPrice.toLocaleString()}</small>
                </div>
            </div>
        </div>
    `).join('');
}

// ================== 4. ระบบรายละเอียดสินค้า (พร้อมปุ่มเลื่อนรูป) ==================
function showProductDetail(productId) {
    const allAvailable = [...allProducts, ...bestSellers, ...promotions];
    const item = allAvailable.find(p => p.id === productId);
    if (item) {
        currentProductId = productId;
        currentImgIndex = 0; 
        updateDetailContent(item);
        const myModal = new bootstrap.Modal(document.getElementById('productDetailModal'));
        myModal.show();
    }
}

// แก้ไขส่วนนี้ในไฟล์ js.js
function updateDetailContent(item) {
    const detailContainer = document.getElementById('product-detail-content');
    if (!detailContainer) return;

    const dots = item.images.map((_, index) => `
        <span class="dot ${index === currentImgIndex ? 'active' : ''}" 
              onclick="event.stopPropagation(); jumpToImage(${index})"
              style="height: 8px; width: 8px; background-color: ${index === currentImgIndex ? '#0d6efd' : '#bbb'}; border-radius: 50%; display: inline-block; margin: 0 4px; cursor: pointer;">
        </span>
    `).join('');

    detailContainer.innerHTML = `
        <div class="row g-0">
            <div class="col-md-6 position-relative p-4 bg-light d-flex flex-column align-items-center justify-content-center" style="min-height: 350px;">
                <button class="btn btn-light shadow-sm rounded-circle position-absolute start-0 ms-2" onclick="changeImage(-1)" style="z-index:10; width:40px; height:40px;">
                    <i class="fas fa-chevron-left"></i>
                </button>
                
                <img src="${item.images[currentImgIndex]}" id="main-detail-img" class="img-fluid rounded shadow-sm" style="max-height: 300px; object-fit: contain;">
                
                <button class="btn btn-light shadow-sm rounded-circle position-absolute end-0 me-2" onclick="changeImage(1)" style="z-index:10; width:40px; height:40px;">
                    <i class="fas fa-chevron-right"></i>
                </button>

                <div class="mt-3 text-center">${dots}</div>
            </div>

            <div class="col-md-6 p-4 pt-5 text-start">
                <button type="button" class="btn-close position-absolute top-0 end-0 m-3" data-bs-dismiss="modal"></button>
                <nav class="small mb-2 text-muted">สินค้า / ${item.category || 'ทั่วไป'}</nav>
                <h3 class="fw-bold mb-1">${item.name}</h3>
                <p class="fs-4 fw-bold text-primary mb-3">฿${item.price.toLocaleString()}</p>
                <div class="mb-4">
                    <label class="small fw-bold text-muted mb-2 d-block">รายละเอียดสินค้า</label>
                    <p class="text-secondary small mb-0">${item.description || 'ไม่มีข้อมูลรายละเอียด'}</p>
                </div>
                
                <div class="mb-4">
                    <label class="small fw-bold text-muted mb-2 d-block">จำนวน</label>
                    <div class="input-group mb-3" style="width: 130px;">
                        <button class="btn btn-outline-secondary rounded-start-pill" type="button" onclick="this.parentNode.querySelector('input').stepDown()">-</button>
                        <input type="number" id="buy-quantity" class="form-control text-center" value="1" min="1">
                        <button class="btn btn-outline-secondary rounded-end-pill" type="button" onclick="this.parentNode.querySelector('input').stepUp()">+</button>
                    </div>
                </div>

                <div class="d-grid gap-2 mt-4">
                    <button class="btn btn-primary btn-lg rounded-pill fw-bold py-3 shadow-sm" onclick="addToCartWithQty(${item.id})">
                        <i class="fas fa-cart-plus me-2"></i>เพิ่มลงตะกร้า
                    </button>
                </div>
            </div>
        </div>
    `;
}

function changeImage(step) {
    const allAvailable = [...allProducts, ...bestSellers, ...promotions];
    const item = allAvailable.find(p => p.id === currentProductId);
    if (!item) return;

    currentImgIndex = (currentImgIndex + step + item.images.length) % item.images.length;
    updateDetailContent(item);
}

function jumpToImage(index) {
    currentImgIndex = index;
    const allAvailable = [...allProducts, ...bestSellers, ...promotions];
    const item = allAvailable.find(p => p.id === currentProductId);
    updateDetailContent(item);
}

function addToCartWithQty(productId) {
    const qtyInput = document.getElementById('buy-quantity');
    const quantity = parseInt(qtyInput.value) || 1; // ดึงค่าจาก Input
    
    const allAvailable = [...allProducts, ...bestSellers, ...promotions];
    const item = allAvailable.find(p => p.id === productId);
    
    if (item) {
        const targetItem = cart.find(cartItem => cartItem.id === productId);
        
        if (targetItem) {
            targetItem.quantity += quantity; // เพิ่มจำนวนตามที่ระบุ
        } else {
            cart.push({ ...item, quantity: quantity }); // เพิ่มสินค้าใหม่พร้อมจำนวนที่ระบุ
        }
        
        updateCartCount();
        updateCartUI();
        
        // ปิด Modal
        const modalElement = document.getElementById('productDetailModal');
        const modalInstance = bootstrap.Modal.getInstance(modalElement);
        if (modalInstance) modalInstance.hide();
        
        alert(`เพิ่ม "${item.name}" จำนวน ${quantity} ชิ้น ลงตะกร้าแล้ว!`);
    }
}

// ================== 5. ระบบตะกร้า & จ่ายเงิน (คงเดิม) ==================
function addToCart(productId) {
    const allAvailable = [...allProducts, ...bestSellers, ...promotions];
    const item = allAvailable.find(p => p.id === productId);
    
    if (item) {
        // ตรวจสอบว่ามีสินค้านี้ในตะกร้าหรือยัง
        const targetItem = cart.find(cartItem => cartItem.id === productId);
        
        if (targetItem) {
            // ถ้ามีแล้ว ให้เพิ่มจำนวน (quantity)
            targetItem.quantity += 1;
        } else {
            // ถ้ายังไม่มี ให้เพิ่มสินค้าเข้าไปพร้อมกำหนด quantity เริ่มต้นที่ 1
            cart.push({ ...item, quantity: 1 });
        }
        
        updateCartCount();
        updateCartUI();
        
        // ปิด Modal รายละเอียดสินค้า
        const modalElement = document.getElementById('productDetailModal');
        const modalInstance = bootstrap.Modal.getInstance(modalElement);
        if (modalInstance) modalInstance.hide();
        
        alert(`เพิ่ม "${item.name}" ลงตะกร้าแล้ว!`);
    }
}

function updateCartCount() {
    const el = document.getElementById("cart-count");
    if (el) {
        // รวมจำนวน quantity ของสินค้าทุกชิ้นในตะกร้า
        const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
        el.innerText = totalQty;
    }
}

function updateCartUI() {
    const cartList = document.getElementById('cart-items-list');
    const totalPriceEl = document.getElementById('cart-total-price');
    if (!cartList || !totalPriceEl) return;

    if (cart.length === 0) {
        cartList.innerHTML = '<p class="text-center py-4">ไม่มีสินค้าในตะกร้า</p>';
        totalPriceEl.innerText = '฿0';
    } else {
        let total = 0;
        cartList.innerHTML = cart.map((item, index) => {
            const itemTotal = item.price * item.quantity; // ราคารวมของชิ้นนี้
            total += itemTotal;
            
            return `
                <div class="d-flex align-items-center mb-3 pb-3 border-bottom text-start">
                    <img src="${item.images[0]}" width="50" height="50" class="rounded me-3" style="object-fit:cover">
                    <div class="flex-grow-1">
                        <div class="fw-bold small text-truncate" style="max-width:150px">${item.name}</div>
                        <div class="text-muted small">จำนวน: ${item.quantity} ชิ้น</div>
                        <div class="text-primary small">฿${itemTotal.toLocaleString()}</div>
                    </div>
                    <button class="btn btn-sm text-danger" onclick="removeFromCart(${index})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>`;
        }).join('');
        totalPriceEl.innerText = '฿' + total.toLocaleString();
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
    updateCartCount();
}

function showCart() {
    updateCartUI();
    new bootstrap.Modal(document.getElementById('cartModal')).show();
}

function openPaymentModal() {
    if (cart.length === 0) return alert("ไม่มีสินค้าในตะกร้า");
    const totalStr = document.getElementById("cart-total-price").innerText;
    document.querySelector("#paymentModal .btn-primary").innerText = "ยืนยันการสั่งซื้อ (" + totalStr + ")";
    new bootstrap.Modal(document.getElementById('paymentModal')).show();
}

function confirmPayment() {
    alert("สั่งซื้อสำเร็จ!");
    cart = [];
    updateCartUI();
    updateCartCount();
    bootstrap.Modal.getInstance(document.getElementById('paymentModal')).hide();
    bootstrap.Modal.getInstance(document.getElementById('cartModal')).hide();
}

// ================== 6. เริ่มต้นระบบ ==================
document.addEventListener('DOMContentLoaded', () => {
    renderItems(bestSellers, 'best-seller-container', true);
    renderItems(allProducts, 'all-products-container');
    renderPromotions();
    updateCartCount();
});
// ================== 8. ระบบค้นหา (Search System) ==================

// ฟังก์ชันสำหรับค้นหาและเรนเดอร์ใหม่
function searchProducts() {
    const searchInput = document.getElementById('searchInput'); // ให้ตรงกับ ID ใน HTML
    if (!searchInput) return;

    const searchTerm = searchInput.value.toLowerCase();
    const allAvailable = [...allProducts, ...bestSellers, ...promotions];

    // กรองสินค้าที่ชื่อตรงกับคำค้นหา (ตัดตัวซ้ำออกด้วย Set)
    const filteredResults = allAvailable.filter((item, index, self) => 
        item.name.toLowerCase().includes(searchTerm) &&
        index === self.findIndex((t) => t.id === item.id)
    );

    const productsContainer = document.getElementById('all-products-container');
    if (!productsContainer) return;

    if (filteredResults.length > 0) {
        // เรนเดอร์ผลลัพธ์ (ฟังก์ชัน renderItems จะจัดแถวละ 4 ตาม col-lg-3 ที่มีอยู่แล้ว)
        renderItems(filteredResults, 'all-products-container');
    } else {
        productsContainer.innerHTML = `
            <div class="col-12 text-center py-5">
                <div class="mb-3">
                    <i class="fa-solid fa-magnifying-glass fa-3x text-light"></i>
                </div>
                <h5 class="text-muted">ไม่พบสินค้าที่ตรงกับ "${searchInput.value}"</h5>
                <button class="btn btn-primary rounded-pill mt-3" onclick="resetSearch()">แสดงสินค้าทั้งหมด</button>
            </div>`;
    }
}

// ฟังก์ชันล้างการค้นหา
function resetSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';
    renderItems(allProducts, 'all-products-container');
}

// ผูกเหตุการณ์การพิมพ์ (Event Listeners)
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        // ค้นหาแบบ Real-time: พิมพ์ปุ๊บ ผลลัพธ์เปลี่ยนปั๊บ
        searchInput.addEventListener('input', searchProducts);

        // ค้นหาเมื่อกด Enter
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchProducts();
                // เลื่อนหน้าจอลงมาดูผลลัพธ์
                document.getElementById('product-recommend-section').scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});