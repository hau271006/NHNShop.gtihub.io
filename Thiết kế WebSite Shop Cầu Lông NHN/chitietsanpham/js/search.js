const products = [
    { name: 'vợt cầu lông carbon training màu xanh', image: 'chitietsanpham/img/vot-cau-long-carbon-training-150g-5.png', url: "chitietsanpham/vot-cau-long-carbon-training-150g.html" },
    { name: 'vợt cầu lông v200', image: 'chitietsanpham/img/vot-cau-long-v200-do-2.png', url: "chitietsanpham/vot-cau-long-v200.html" },
    { name: 'vợt cầu lông vnb v88', image: 'chitietsanpham/img/vot-cau-long-vnb-v88-3.png', url: "chitietsanpham/vot-cau-long-vnb-v88-cam.html" },
    { name: 'vợt cầu lông redson shape esg', image: 'chitietsanpham/img/vot-cau-long-redson-shape-esg.png', url: "chitietsanpham/vot-cau-long-redson-shape-esg.html" },
    { name: 'vợt cầu lông the 3rd game arc', image: 'chitietsanpham/img/vot-cau-long-the-3rd-game-arc-fb-do.png', url: "chitietsanpham/vot-cau-long-the-3rd-game-arc.html" },
    { name: 'vợt cầu lông vnb tc88c', image: 'chitietsanpham/img/vot-cau-long-vnb-tc88c-1.png', url: "chitietsanpham/vot-cau-long-vnb-tc88c.html" },
    { name: 'vợt cầu lông vnb v88 xanh', image: 'chitietsanpham/img/vot-cau-long-vnb-v88-xanh-chinh-hang-1.png', url: "chitietsanpham/vot-cau-long-vnb-v88-xanh.html" },
    { name: 'vợt cầu lông yonex astrox 99 lcw', image: 'chitietsanpham/img/vot-cau-long-yonex-astrox-99-lcw-2.png', url: "chitietsanpham/vot-cau-long-yonex-astrox-99-lcw.html" },
];

const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('search-results');

searchInput.addEventListener('input', function () {
    const keyword = this.value.toLowerCase();
    searchResults.innerHTML = '';
    if (keyword.length === 0) {
        searchResults.style.display = 'none';
        return;
    }
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(keyword)
    );
    if (filteredProducts.length > 0) {
        filteredProducts.forEach(product => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
            resultItem.setAttribute('data-url', product.url);
            resultItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}" style="width:50px; height:50px;">
                <span>${product.name}</span>
            `;
            searchResults.appendChild(resultItem);

            resultItem.addEventListener('click', function() {
                const productUrl = this.getAttribute('data-url');
                window.location.href = productUrl;
            });
        });
        searchResults.style.display = 'block';
    } else {
        searchResults.style.display = 'none';
    }
});

document.querySelectorAll(".add-to-cart").forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Đã thêm vào giỏ hàng!");
    });
  });