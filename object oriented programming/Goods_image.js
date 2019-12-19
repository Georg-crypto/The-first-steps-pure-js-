class Goods_image extends Goods {

    constructor(name, amount, storage, image) {

        super(name, amount, storage);
        this.image = image;

    }

    showIconGoods() {

        document.querySelector('#out_img').innerHTML = `<i class="material-icons">${this.image}</i> ${this.name}: ${this.amount} pcs. (${this.storage} pcs. at the storage).`;

    }

}