$(document).ready(function() {
    var options = {
        'option1': null,
        'option2': null,
        'option3': null
    }
    $(".product-option-group .option-variant select.pdp-option-select").on("change", function() {
        const wrapper = $(this).closest(".product-option-group");
        const prod_html = wrapper.find(`script[class*='ProductJson']`);
        const product = JSON.parse(prod_html[0].innerHTML);
        
        wrapper.find(".option-variant").each(function(index) {
            const i = index + 1;
            const selected = $(this).find("select.pdp-option-select").val();

            options['option'+i] = selected;
            $(this).find(".label-variant .name-option").html(selected);
        });
        console.log(options);
        const variant = product.variants.filter(v => v.option1 == options.option1 && v.option2 == options.option2 && v.option3 == options.option3);
        const variant_id = variant[0].id;

        wrapper.find(".prod-variant-id").val(variant_id);
    })
    $("body").on("click", ".monogram-modal__button", function() {
        setTimeout(function() {
            location.href = '/cart';
        }, 1000)
    })
})